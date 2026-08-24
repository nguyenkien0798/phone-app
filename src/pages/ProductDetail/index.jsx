import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import {
  Row,
  Col,
  Rate,
  Radio,
  Button,
  Form,
  Input,
  Skeleton,
  InputNumber,
  notification,
  Tooltip,
} from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
  SafetyCertificateOutlined,
  SyncOutlined,
  ThunderboltOutlined,
  CarOutlined,
  CustomerServiceOutlined,
  MobileOutlined,
  CameraOutlined,
  DatabaseOutlined,
  HddOutlined,
  DashboardOutlined,
  CheckCircleOutlined,
  FireOutlined,
  TagOutlined,
  CreditCardOutlined,
  AppstoreOutlined,
  CheckOutlined,
  FileTextOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import TopWrapper from "../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import { getProductDetailAction } from "../../redux/slices/product.slice";
import {
  getCommentListAction,
  postCommentAction,
} from "../../redux/slices/comment.slice";
import {
  addToCartAction,
  updateCartProductAction,
} from "../../redux/slices/cart.slice";

import * as S from "./styles";

const ProductDetailPage = ({ match }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const id = match.params?.id;
  const history = useHistory();

  const [commentForm] = Form.useForm();

  const { userInfo } = useSelector((state) => state.authReducer);
  const { productDetail } = useSelector((state) => state.productReducer);
  const { commentList } = useSelector((state) => state.commentReducer);
  const { cartList } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const isFavorite =
    productDetail.data.favorites?.findIndex(
      (item) => item.userId === userInfo.data.id
    ) !== -1;

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailAction({ id }));
      dispatch(getCommentListAction({ productId: id }));
    }
  }, [dispatch, id]);

  // Set default selected option when options are loaded
  useEffect(() => {
    if (productDetail.data.productOptions?.length > 0 && !selectedOption) {
      setSelectedOption(productDetail.data.productOptions[0]);
    }
  }, [productDetail.data.productOptions, selectedOption]);

  const handleFavoriteProduct = () => {
    if (!userInfo.data.id) {
      notification.warning({
        message: "Thông báo",
        description: "Vui lòng đăng nhập để lưu sản phẩm yêu thích",
      });
      return;
    }
    notification.info({
      message: "Yêu thích",
      description: isFavorite
        ? "Đã bỏ yêu thích sản phẩm"
        : "Đã thêm vào danh sách yêu thích",
    });
  };

  const handleAddToCart = (isBuyNow = false) => {
    if (userInfo.data.id) {
      if (productDetail.data.productOptions?.length) {
        if (!selectedOption) {
          notification.error({
            message: "Vui lòng chọn phiên bản sản phẩm",
          });
          return;
        } else {
          const existCartProduct = cartList.data.find(
            (item) => item.productOptionId === selectedOption.id
          );
          if (existCartProduct) {
            dispatch(
              updateCartProductAction({
                data: {
                  id: existCartProduct.id,
                  quantity: existCartProduct.quantity + productQuantity,
                },
                callback: {
                  showSuccess: () => {
                    notification.success({
                      message: "Đã cập nhật giỏ hàng thành công",
                    });
                    if (isBuyNow) history.push("/cart");
                  },
                },
              })
            );
          } else {
            dispatch(
              addToCartAction({
                userId: userInfo.data.id,
                quantity: productQuantity,
                productId: parseInt(id, 10),
                productOptionId: selectedOption.id,
              })
            );
            notification.success({
              message: "Đã thêm vào giỏ hàng thành công",
            });
            if (isBuyNow) history.push("/cart");
          }
        }
      } else {
        const existCartProduct = cartList.data.find(
          (item) => item.productId === parseInt(id, 10)
        );
        if (existCartProduct) {
          dispatch(
            updateCartProductAction({
              data: {
                id: existCartProduct.id,
                quantity: existCartProduct.quantity + productQuantity,
              },
              callback: {
                showSuccess: () => {
                  notification.success({
                    message: "Đã cập nhật giỏ hàng thành công",
                  });
                  if (isBuyNow) history.push("/cart");
                },
              },
            })
          );
        } else {
          dispatch(
            addToCartAction({
              userId: userInfo.data.id,
              quantity: productQuantity,
              productId: parseInt(id, 10),
              productOptionId: false,
            })
          );
          notification.success({
            message: "Đã thêm vào giỏ hàng thành công",
          });
          if (isBuyNow) history.push("/cart");
        }
      }
    } else {
      notification.warning({
        message: "Thông báo",
        description: "Bạn cần đăng nhập để thực hiện chức năng này",
      });
      history.push("/login");
    }
  };

  const handleSubmitComment = (values) => {
    const isExist =
      commentList.data.findIndex(
        (item) => item.userId === userInfo.data.id
      ) !== -1;
    if (isExist) {
      notification.warning({
        message: "Bạn đã gửi đánh giá cho sản phẩm này rồi",
      });
    } else {
      dispatch(
        postCommentAction({
          ...values,
          productId: parseInt(id, 10),
          userId: userInfo.data.id,
        })
      );
      notification.success({
        message: "Cảm ơn bạn đã đánh giá sản phẩm!",
      });
      commentForm.resetFields();
    }
  };

  const productRate = useMemo(() => {
    let total = 0;
    if (!commentList.data.length) return 5.0;
    commentList.data.forEach((item) => {
      total += item.rate || 5;
    });
    return (total / commentList.data.length).toFixed(1);
  }, [commentList.data]);

  const currentPriceNumber = useMemo(() => {
    const basePrice = productDetail.data.price || 0;
    const optionPrice = selectedOption?.price || 0;
    return basePrice + optionPrice;
  }, [productDetail.data.price, selectedOption]);

  const originalPriceNumber = useMemo(() => {
    if (!currentPriceNumber) return 0;
    // Estimate original price (+12%) for realistic discount effect
    return Math.round(currentPriceNumber * 1.12);
  }, [currentPriceNumber]);

  const techSpecs = useMemo(() => {
    const data = productDetail.data || {};
    return [
      {
        label: "Màn hình",
        icon: <MobileOutlined className="spec-icon" />,
        value: data.screen,
      },
      {
        label: "Camera",
        icon: <CameraOutlined className="spec-icon" />,
        value: data.camera,
      },
      {
        label: "RAM",
        icon: <DatabaseOutlined className="spec-icon" />,
        value: data.ram,
      },
      {
        label: "Bộ nhớ trong (ROM)",
        icon: <HddOutlined className="spec-icon" />,
        value: data.rom,
      },
      {
        label: "Vi xử lý (CPU)",
        icon: <ThunderboltOutlined className="spec-icon" />,
        value: data.cpu,
      },
      {
        label: "Đồ họa (GPU)",
        icon: <DashboardOutlined className="spec-icon" />,
        value: data.gpu,
      },
      {
        label: "Dung lượng pin",
        icon: <SafetyCertificateOutlined className="spec-icon" />,
        value: data.pin,
      },
      {
        label: "Thẻ SIM",
        icon: <AppstoreOutlined className="spec-icon" />,
        value: data.sim,
      },
      {
        label: "Hệ điều hành",
        icon: <CheckCircleOutlined className="spec-icon" />,
        value: data.hdh,
      },
    ].filter((item) => item.value);
  }, [productDetail.data]);

  return (
    <div>
      <TopWrapper
        breadcrumb={[
          ...BREADCRUMB,
          {
            title: productDetail.data.name || "Chi tiết sản phẩm",
          },
        ]}
        height={80}
      />
      <S.ProductDetailContainer>
        {/* TOP MAIN CARD: GALLERY + BUY BOX */}
        <S.MainCard>
          <Row gutter={[32, 24]}>
            {/* Image gallery column */}
            <Col lg={10} md={11} xs={24}>
              <S.ImageGalleryWrapper>
                <S.MainImageContainer>
                  <S.ProductBadge>
                    <FireOutlined /> HOT SALE
                  </S.ProductBadge>
                  <S.GenuineTag>
                    <CheckOutlined /> 100% Chính Hãng
                  </S.GenuineTag>

                  {productDetail.loading ? (
                    <S.SkeletonImage>
                      <Skeleton.Image />
                    </S.SkeletonImage>
                  ) : (
                    <img
                      src={productDetail.data.image}
                      alt={productDetail.data.name || "Product Image"}
                    />
                  )}
                </S.MainImageContainer>

                <S.PolicyBar>
                  <S.PolicyItem>
                    <CarOutlined className="policy-icon" />
                    <span>Miễn phí giao hàng toàn quốc</span>
                  </S.PolicyItem>
                  <S.PolicyItem>
                    <SafetyCertificateOutlined className="policy-icon" />
                    <span>Bảo hành chính hãng 12T</span>
                  </S.PolicyItem>
                  <S.PolicyItem>
                    <SyncOutlined className="policy-icon" />
                    <span>1 đổi 1 trong 30 ngày</span>
                  </S.PolicyItem>
                  <S.PolicyItem>
                    <CreditCardOutlined className="policy-icon" />
                    <span>Trả góp 0% lãi suất</span>
                  </S.PolicyItem>
                </S.PolicyBar>
              </S.ImageGalleryWrapper>
            </Col>

            {/* Product info & purchase column */}
            <Col lg={14} md={13} xs={24}>
              {productDetail.loading ? (
                <Skeleton active paragraph={{ rows: 8 }} />
              ) : (
                <S.ProductInfoWrapper>
                  <div>
                    <S.ProductTitle>{productDetail.data.name}</S.ProductTitle>

                    <S.MetaBar>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Rate
                          allowHalf
                          disabled
                          value={parseFloat(productRate)}
                          style={{ fontSize: 15, color: "#f59e0b" }}
                        />
                        <span className="rating-score">{productRate}</span>
                      </div>

                      <div className="divider" />

                      <span className="review-count">
                        {commentList.data.length > 0
                          ? `${commentList.data.length} Đánh giá`
                          : "Chưa có đánh giá"}
                      </span>

                      <div className="divider" />

                      <div className="stock-status">
                        <span className="dot" />
                        Còn hàng
                      </div>
                    </S.MetaBar>

                    {/* Price Card */}
                    <S.PriceCard>
                      <S.CurrentPrice>
                        <span className="amount">
                          {currentPriceNumber.toLocaleString("vi-VN")}
                          <span className="currency">₫</span>
                        </span>
                        {originalPriceNumber > currentPriceNumber && (
                          <>
                            <span className="original-price">
                              {originalPriceNumber.toLocaleString("vi-VN")}₫
                            </span>
                            <span className="discount-chip">-12%</span>
                          </>
                        )}
                      </S.CurrentPrice>
                      <S.PromoTag>
                        <TagOutlined /> Tiết kiệm thêm với voucher giảm 5% khi thanh toán trực tuyến
                      </S.PromoTag>
                    </S.PriceCard>

                    {/* Variant options */}
                    {productDetail.data.productOptions?.length > 0 && (
                      <S.VariantOptions>
                        <S.SectionLabel>
                          Chọn phiên bản / dung lượng:
                        </S.SectionLabel>
                        <Radio.Group
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        >
                          {productDetail.data.productOptions.map((option) => (
                            <Radio.Button key={option.id} value={option}>
                              <span>{option.name}</span>
                            </Radio.Button>
                          ))}
                        </Radio.Group>
                      </S.VariantOptions>
                    )}

                    {/* Quantity Selection */}
                    <S.QuantitySection>
                      <S.SectionLabel style={{ marginBottom: 0 }}>
                        Số lượng:
                      </S.SectionLabel>
                      <InputNumber
                        min={1}
                        max={10}
                        value={productQuantity}
                        onChange={(value) => setProductQuantity(value || 1)}
                      />
                      <span style={{ fontSize: 13, color: "#64748b" }}>
                        (Tối đa 10 sản phẩm / đơn)
                      </span>
                    </S.QuantitySection>
                  </div>

                  {/* Actions */}
                  <S.ActionButtonGroup>
                    <Button
                      className="add-cart-btn"
                      icon={<ShoppingCartOutlined style={{ fontSize: 18 }} />}
                      onClick={() => handleAddToCart(false)}
                    >
                      Thêm vào giỏ
                    </Button>
                    <Button
                      className="buy-now-btn"
                      onClick={() => handleAddToCart(true)}
                    >
                      Mua ngay
                    </Button>
                    <Tooltip
                      title={
                        isFavorite ? "Đã yêu thích" : "Thêm vào danh sách yêu thích"
                      }
                    >
                      <Button
                        className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
                        icon={
                          isFavorite ? (
                            <HeartFilled style={{ color: "#e11d48", fontSize: 18 }} />
                          ) : (
                            <HeartOutlined style={{ fontSize: 18 }} />
                          )
                        }
                        onClick={handleFavoriteProduct}
                      >
                        {productDetail.data.favorites?.length
                          ? `(${productDetail.data.favorites.length})`
                          : "Thích"}
                      </Button>
                    </Tooltip>
                  </S.ActionButtonGroup>
                </S.ProductInfoWrapper>
              )}
            </Col>
          </Row>
        </S.MainCard>

        {/* BOTTOM SECTION: SPECS + DESCRIPTION + COMMENTS */}
        <Row gutter={[24, 24]}>
          {/* Main content: Description and Reviews */}
          <Col lg={{ span: 15, order: 1 }} xs={{ span: 24, order: 2 }}>
            {/* Description Card */}
            <S.SectionCard>
              <S.CardHeader>
                <div className="title-group">
                  <div className="icon-wrap">
                    <FileTextOutlined />
                  </div>
                  <h3>Thông tin chi tiết sản phẩm</h3>
                </div>
              </S.CardHeader>
              {productDetail.loading ? (
                <Skeleton active paragraph={{ rows: 6 }} />
              ) : (
                <S.ProductDetailContent
                  dangerouslySetInnerHTML={{
                    __html:
                      productDetail.data.content ||
                      "<p>Đang cập nhật nội dung chi tiết cho sản phẩm này...</p>",
                  }}
                />
              )}
            </S.SectionCard>

            {/* Reviews Card */}
            <S.SectionCard id="reviews-section">
              <S.CardHeader>
                <div className="title-group">
                  <div className="icon-wrap" style={{ background: "#fef3c7", color: "#d97706" }}>
                    <MessageOutlined />
                  </div>
                  <h3>Đánh giá & Nhận xét ({commentList.data.length})</h3>
                </div>
              </S.CardHeader>

              {/* Rating Overview */}
              <S.ReviewSummary>
                <div className="score-box">
                  <span className="big-score">{productRate}</span>
                  <Rate
                    allowHalf
                    disabled
                    value={parseFloat(productRate)}
                    style={{ fontSize: 16, color: "#f59e0b" }}
                    className="rating-stars"
                  />
                  <span className="total-text">
                    {commentList.data.length} lượt đánh giá
                  </span>
                </div>
                <div className="score-divider" />
                <div className="score-msg">
                  <strong>Khách hàng nói gì về sản phẩm?</strong>
                  <br />
                  Sản phẩm nhận được phản hồi tích cực từ khách hàng về chất lượng và hiệu năng.
                </div>
              </S.ReviewSummary>

              {/* Review Input Form */}
              {userInfo.data.id ? (
                <S.CommentFormCard>
                  <div className="form-title">Gửi đánh giá của bạn</div>
                  <Form
                    form={commentForm}
                    layout="vertical"
                    initialValues={{ rate: 5, content: "" }}
                    onFinish={handleSubmitComment}
                  >
                    <Form.Item
                      label="Bạn cảm thấy sản phẩm này như thế nào?"
                      name="rate"
                      rules={[{ required: true, message: "Vui lòng chọn số sao đánh giá" }]}
                    >
                      <Rate
                        allowHalf
                        tooltips={["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"]}
                        style={{ color: "#f59e0b" }}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Nhận xét chi tiết"
                      name="content"
                      rules={[{ required: true, message: "Vui lòng nhập nhận xét của bạn" }]}
                    >
                      <Input.TextArea
                        placeholder="Hãy chia sẻ trải nghiệm của bạn về sản phẩm này nhé..."
                        autoSize={{ minRows: 3, maxRows: 6 }}
                      />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="submit-btn">
                      Gửi đánh giá
                    </Button>
                  </Form>
                </S.CommentFormCard>
              ) : (
                <div
                  style={{
                    padding: "16px 20px",
                    background: "#f8fafc",
                    borderRadius: 12,
                    border: "1px dashed #cbd5e1",
                    marginBottom: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  <span style={{ color: "#64748b", fontSize: 14 }}>
                    Đăng nhập để gửi đánh giá và nhận xét về sản phẩm này.
                  </span>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => history.push("/login")}
                    style={{ borderRadius: 6 }}
                  >
                    Đăng nhập ngay
                  </Button>
                </div>
              )}

              {/* Comments List */}
              {commentList.data.length > 0 ? (
                <div>
                  {commentList.data.map((item) => {
                    const authorName = item.user?.name || "Khách hàng";
                    const initialChar = authorName.charAt(0).toUpperCase();

                    return (
                      <S.CommentItemWrapper key={item.id || item.createdAt}>
                        <div className="avatar">{initialChar}</div>
                        <div className="comment-content">
                          <div className="header-row">
                            <span className="author">{authorName}</span>
                            <span className="verified-badge">
                              <CheckCircleOutlined /> Đã mua hàng
                            </span>
                            <span className="date">
                              {moment(item.createdAt).fromNow()}
                            </span>
                          </div>
                          <div className="rating-row">
                            <Rate
                              disabled
                              value={item.rate || 5}
                              allowHalf
                              style={{ fontSize: 13, color: "#f59e0b" }}
                            />
                          </div>
                          <p className="body">{item.content}</p>
                        </div>
                      </S.CommentItemWrapper>
                    );
                  })}
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    padding: "32px 0",
                    color: "#94a3b8",
                    fontSize: 14,
                  }}
                >
                  Chưa có đánh giá nào cho sản phẩm này. Hãy là người đầu tiên đánh giá!
                </div>
              )}
            </S.SectionCard>
          </Col>

          {/* Right Sidebar: Tech Specs & Support */}
          <Col lg={{ span: 9, order: 2 }} xs={{ span: 24, order: 1 }}>
            <div style={{ position: "sticky", top: 20 }}>
              {/* Tech Specs Card */}
              <S.SectionCard>
                <S.CardHeader>
                  <div className="title-group">
                    <div className="icon-wrap" style={{ background: "#ecfdf5", color: "#059669" }}>
                      <MobileOutlined />
                    </div>
                    <h3>Thông số kĩ thuật</h3>
                  </div>
                </S.CardHeader>

                {techSpecs.length > 0 ? (
                  <S.SpecList>
                    {techSpecs.map((spec, index) => (
                      <S.SpecItem key={spec.label} striped={index % 2 === 1}>
                        <div className="spec-label">
                          {spec.icon}
                          <span>{spec.label}</span>
                        </div>
                        <div
                          className="spec-value"
                          dangerouslySetInnerHTML={{ __html: spec.value }}
                        />
                      </S.SpecItem>
                    ))}
                  </S.SpecList>
                ) : (
                  <div style={{ color: "#94a3b8", fontSize: 13, textAlign: "center", padding: "16px 0" }}>
                    Thông số kĩ thuật đang được cập nhật
                  </div>
                )}
              </S.SectionCard>

              {/* Support & Contact Card */}
              <S.SupportBox>
                <div className="support-icon">
                  <CustomerServiceOutlined />
                </div>
                <div className="support-text">
                  <h4>Cần tư vấn hỗ trợ?</h4>
                  <p>
                    Gọi ngay Hotline miễn phí: <span className="hotline">1800 6601</span>
                    <br />
                    (Hỗ trợ từ 8:00 - 22:00 hàng ngày)
                  </p>
                </div>
              </S.SupportBox>
            </div>
          </Col>
        </Row>
      </S.ProductDetailContainer>
    </div>
  );
};

export default ProductDetailPage;
