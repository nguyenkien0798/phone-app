import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  Card,
  Row,
  Col,
  Rate,
  Radio,
  Button,
  Space,
  Descriptions,
  Form,
  Input,
  List,
  Comment,
  Skeleton,
  InputNumber,
  notification,
} from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";

import TopWrapper from "../../components/TopWrapper";

import { BREADCRUMB } from "./constants";

import {
  getProductDetailAction,
  getCommentListAction,
  postCommentAction,
  addToCartAction,
  updateCartProductAction,
} from "../../redux/actions";

import * as S from "./styles";

const ProductDetailPage = ({ match, ...props }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const id = match.params?.id;

  const [commentForm] = Form.useForm();

  const { userInfo } = useSelector((state) => state.authReducer);
  const { productDetail } = useSelector((state) => state.productReducer);
  const { commentList } = useSelector((state) => state.commentReducer);
  const { cartList } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailAction({ id }));
      dispatch(getCommentListAction({ productId: id }));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (userInfo.data.id) {
      const existCartProduct = cartList.data.find(
        (item) => item.productId === parseInt(id)
      );
      if (existCartProduct) {
       // notification.error({
        //   message: "Error",
        //   description: "Sản phẩm đã tồn tại trong giỏ hàng",
        // });
        dispatch(
          updateCartProductAction({
            data: {
              id: existCartProduct.id,
              quantity: existCartProduct.quantity + productQuantity,
            },
            callback: {
              showSuccess: () =>
                notification.success({
                  message: "Thêm vào giỏ hàng thành công",
                }),
            },
          })
        );
      } else {
        dispatch(
          addToCartAction({
            quantity: productQuantity,
            productId: parseInt(id),
            userId: userInfo.data.id,
          })
        );
      }
    } else {
      notification.error({
        message: "Thông báo",
        description: "Bạn cần đăng nhập để thực hiện chức năng này",
      });
    }
  };

  const handleSubmitComment = (values) => {
    const isExist =
      commentList.data.findIndex((item) => item.userId === userInfo.data.id) !==
      -1;
    if (isExist) {
      notification.warning({
        message: "Bạn đã bình luận",
      });
    } else {
      dispatch(
        postCommentAction({
          ...values,
          productId: parseInt(id),
          userId: userInfo.data.id,
        })
      );
      commentForm.resetFields();
    }
  };

  const renderProductRate = () => {
    let total = 0;
    commentList.data.forEach((item) => {
      total = total + item.rate;
    });
    return (total / commentList.data.length).toFixed(1);
  };

  return (
    <div>
      <TopWrapper
        breadcrumb={[
          ...BREADCRUMB,
          {
            title: productDetail.data.name,
          },
        ]}
        height={80}
      />
      <S.ProductDetailContainer>
        <Card size="small">
          <Row gutter={[16, 16]}>
            <Col span={10}>
              {productDetail.loading ? (
                <S.SkeletonImage>
                  <Skeleton.Image />
                </S.SkeletonImage>
              ) : (
                <img
                  src={productDetail.data.image}
                  alt=""
                  width="100%"
                  height="auto"
                />
              )}
            </Col>
            <Col span={14}>
              {productDetail.loading ? (
                <Skeleton active />
              ) : (
                <>
                  <h2 style={{ marginBottom: 0 }}>{productDetail.data.name}</h2>
                  <Space align="baseline">
                    <Rate
                      allowHalf
                      disabled
                      value={renderProductRate()}
                      style={{}}
                    />
                    <h3>{renderProductRate()}</h3>
                  </Space>

                  <div style={{ margin: "16px 0" }}>
                    Loại sản phẩm:
                    <div>
                      <Radio.Group
                        options={[
                          { label: "4Gb RAM & 64Gb ROM", value: 1 },
                          { label: "6Gb RAM & 128Gb ROM", value: 2 },
                        ]}
                        optionType="button"
                      />
                    </div>
                  </div>
                  <InputNumber
                    min={1}
                    max={10}
                    value={productQuantity}
                    onChange={(value) => setProductQuantity(value)}
                  />
                  <h3>{productDetail.data.price?.toLocaleString()}</h3>
                </>
              )}

              {productDetail.loading ? (
                <Space>
                  <Skeleton.Button size="large" />
                  <Skeleton.Button size="large" />
                </Space>
              ) : (
                <Space>
                  <Button
                    size="large"
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    onClick={() => handleAddToCart()}
                  >
                    Thêm vào giỏ
                  </Button>
                  <Button size="large" icon={<HeartOutlined />}>
                    Yêu thích
                  </Button>
                </Space>
              )}
            </Col>
          </Row>
        </Card>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={16}>
            <Card size="small">
              <h3 style={{ color: "#2f54eb" }}>Thông tin chi tiết</h3>
              <S.ProductDetailContent
                dangerouslySetInnerHTML={{ __html: productDetail.data.content }}
              />
            </Card>
            <Card size="small" style={{ marginTop: 16 }}>
              <h3 style={{ color: "#2f54eb" }}>Đánh giá & Bình luận</h3>
              {userInfo.data.id && (
                <Form
                  form={commentForm}
                  layout="vertical"
                  initialValues={{ rate: 0, content: "" }}
                  onFinish={(values) => handleSubmitComment(values)}
                >
                  <Form.Item
                    label="Đánh giá"
                    name="rate"
                    rules={[{ required: true, message: "Required !" }]}
                  >
                    <Rate allowHalf />
                  </Form.Item>
                  <Form.Item
                    label="Bình luận"
                    name="content"
                    rules={[{ required: true, message: "Required !" }]}
                  >
                    <Input.TextArea
                      placeholder="Bình luận"
                      autoSize={{ minRows: 2, maxRows: 4 }}
                    />
                  </Form.Item>
                  <Button htmlType="submit" type="primary">
                    Gửi
                  </Button>
                </Form>
              )}
              <List
                className="comment-list"
                header={`${commentList.data.length} Bình luận`}
                itemLayout="horizontal"
                dataSource={commentList.data}
                renderItem={(item) => (
                  <li>
                    <Comment
                      author={item.user?.name}
                      content={
                        <div>
                          <Rate
                            disabled
                            value={item.rate}
                            allowHalf
                            style={{ fontSize: 14 }}
                          />
                          <p>{item.content}</p>
                        </div>
                      }
                      datetime={moment(item.createdAt).fromNow()}
                    />
                  </li>
                )}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small">
              <h3 style={{ color: "#2f54eb" }}>Thông số kĩ thuật</h3>
              <Descriptions bordered size="small">
                <Descriptions.Item label="Màn hình" span={3}>
                  OLED6.1"Super Retina XDR
                </Descriptions.Item>
                <Descriptions.Item label="Hệ điều hành" span={3}>
                  iOS 15
                </Descriptions.Item>
                <Descriptions.Item label="Camera trước" span={3}>
                  12 MP
                </Descriptions.Item>
                <Descriptions.Item label="Camera sau" span={3}>
                  2 camera 12 MP
                </Descriptions.Item>
                <Descriptions.Item label="Chip" span={3}>
                  Apple A15 Bionic
                </Descriptions.Item>
                <Descriptions.Item label="Ram" span={3}>
                  4GB
                </Descriptions.Item>
                <Descriptions.Item label="Bộ nhớ trong" span={3}>
                  64GB
                </Descriptions.Item>
                <Descriptions.Item label="Sim" span={3}>
                  1 Nano SIM và 1 eSIMHỗ trợ 5G
                </Descriptions.Item>
                <Descriptions.Item label="Pin" span={3}>
                  3240 mAh, 20 W
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </S.ProductDetailContainer>
    </div>
  );
};

export default ProductDetailPage;
