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
  CheckCircleFilled,
  FireFilled,
  TagFilled,
  CreditCardFilled,
  AppstoreOutlined,
  FileTextOutlined,
  MessageOutlined,
  CheckOutlined,
  ThunderboltFilled,
  StarFilled,
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
    if (!commentList.data.length) return "5.0";
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
    return Math.round(currentPriceNumber * 1.15);
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
        label: "Thẻ SIM / Kết nối",
        icon: <AppstoreOutlined className="spec-icon" />,
        value: data.sim,
      },
      {
        label: "Hệ điều hành",
        icon: <CheckCircleFilled className="spec-icon" />,
        value: data.hdh,
      },
    ].filter((item) => item.value);
  }, [productDetail.data]);

  return (
    <div>
      <TopWrapper
        titlePage={productDetail.data.name || "Chi Tiết Sản Phẩm Apple"}
        subtitle="Apple Authorised Reseller · Bảo hành chính hãng VN/A 12 tháng · Giao siêu tốc 2H"
        breadcrumb={[
          ...BREADCRUMB,
          {
            title: productDetail.data.name || "Chi tiết sản phẩm",
          },
        ]}
      />
      <S.ProductDetailContainer>
        {/* ================= 1. MAIN HERO SHOWCASE CARD ================= */}
        <S.MainShowcaseCard>
          <Row gutter={[36, 32]}>
            {/* Left Column: Image Showcase + Policies */}
            <Col lg={11} md={12} xs={24}>
              <S.ImageStageWrapper>
                <div className="product-image-stage">
                  <div className="badge-row">
                    <span className="badge-hot">
                      <FireFilled /> HOT DEAL
                    </span>
                    <span className="badge-official">
                      <CheckOutlined /> 100% Chính Hãng VN/A
                    </span>
                  </div>

                  {productDetail.loading ? (
                    <S.SkeletonImage>
                      <Skeleton.Image />
                    </S.SkeletonImage>
                  ) : (
                    <img
                      src={productDetail.data.image}
                      alt={productDetail.data.name || "Apple Product"}
                    />
                  )}
                </div>

                {/* 4 Apple Trust Highlights */}
                <S.TrustGrid>
                  <div className="trust-tile">
                    <CarOutlined className="tile-icon blue" />
                    <div className="tile-info">
                      <strong>Giao Siêu Tốc 2H</strong>
                      <span>Miễn phí nội thành</span>
                    </div>
                  </div>
                  <div className="trust-tile">
                    <SafetyCertificateOutlined className="tile-icon green" />
                    <div className="tile-info">
                      <strong>Bảo Hành 12 Tháng</strong>
                      <span>Chính hãng Apple VN</span>
                    </div>
                  </div>
                  <div className="trust-tile">
                    <SyncOutlined className="tile-icon purple" />
                    <div className="tile-info">
                      <strong>1 Đổi 1 Trong 30 Ngày</strong>
                      <span>Yên tâm tuyệt đối</span>
                    </div>
                  </div>
                  <div className="trust-tile">
                    <CreditCardFilled className="tile-icon orange" />
                    <div className="tile-info">
                      <strong>Trả Góp 0%</strong>
                      <span>Xét duyệt 5 phút</span>
                    </div>
                  </div>
                </S.TrustGrid>
              </S.ImageStageWrapper>
            </Col>

            {/* Right Column: Product Specs & Buying Box */}
            <Col lg={13} md={12} xs={24}>
              {productDetail.loading ? (
                <Skeleton active paragraph={{ rows: 10 }} />
              ) : (
                <S.ProductBuyBox>
                  <div className="product-header">
                    <div className="category-tag">
                      {productDetail.data.categoryId === 1
                        ? "Điện thoại iPhone"
                        : productDetail.data.categoryId === 2
                        ? "Máy tính Mac & MacBook"
                        : productDetail.data.categoryId === 3
                        ? "Máy tính bảng iPad"
                        : productDetail.data.categoryId === 4
                        ? "Đồng hồ Apple Watch"
                        : productDetail.data.categoryId === 5
                        ? "Tai nghe Apple AirPods"
                        : "Thiết bị Apple chính hãng"}
                    </div>
                    <h1 className="product-title">{productDetail.data.name}</h1>

                    {/* Rating and Meta Bar */}
                    <div className="meta-stats-row">
                      <div className="rating-box">
                        <Rate
                          allowHalf
                          disabled
                          value={parseFloat(productRate)}
                          style={{ fontSize: 14, color: "#f59e0b" }}
                        />
                        <span className="rate-num">{productRate}</span>
                      </div>
                      <span className="dot-divider">•</span>
                      <span className="comment-count">
                        {commentList.data.length > 0
                          ? `${commentList.data.length} đánh giá`
                          : "Chưa có đánh giá"}
                      </span>
                      <span className="dot-divider">•</span>
                      <div className="stock-pill">
                        <span className="pulse-dot" /> Còn hàng (Sẵn sàng giao)
                      </div>
                    </div>
                  </div>

                  {/* Price Banner Card */}
                  <S.PriceHeroBox>
                    <div className="price-primary">
                      <span className="val">
                        {currentPriceNumber.toLocaleString("vi-VN")}
                      </span>
                      <span className="sym">₫</span>
                    </div>
                    {originalPriceNumber > currentPriceNumber && (
                      <div className="price-secondary">
                        <span className="original">
                          {originalPriceNumber.toLocaleString("vi-VN")} ₫
                        </span>
                        <span className="save-chip">Tiết kiệm 15%</span>
                      </div>
                    )}
                    <div className="promo-note">
                      <TagFilled /> Hỗ trợ thu cũ đổi mới trợ giá lên đến 2.000.000₫
                    </div>
                  </S.PriceHeroBox>

                  {/* Variant / Option Selector */}
                  {productDetail.data.productOptions?.length > 0 && (
                    <S.OptionSelectorGroup>
                      <div className="group-label">Chọn phiên bản / màu sắc:</div>
                      <Radio.Group
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="option-radio-group"
                      >
                        {productDetail.data.productOptions.map((opt) => (
                          <Radio.Button key={opt.id} value={opt} className="option-pill">
                            <span className="opt-name">{opt.name}</span>
                            {opt.price > 0 && (
                              <span className="opt-plus">
                                +{opt.price.toLocaleString("vi-VN")}₫
                              </span>
                            )}
                          </Radio.Button>
                        ))}
                      </Radio.Group>
                    </S.OptionSelectorGroup>
                  )}

                  {/* Quantity & CTA Buttons */}
                  <S.PurchaseControls>
                    <div className="quantity-row">
                      <span className="qty-label">Số lượng:</span>
                      <InputNumber
                        min={1}
                        max={10}
                        value={productQuantity}
                        onChange={(val) => setProductQuantity(val || 1)}
                        className="qty-input"
                      />
                      <span className="qty-hint">Bảo hiểm rơi vỡ 12T tặng kèm</span>
                    </div>

                    <div className="action-buttons-grid">
                      <Button
                        className="btn-add-cart"
                        icon={<ShoppingCartOutlined style={{ fontSize: 18 }} />}
                        onClick={() => handleAddToCart(false)}
                      >
                        Thêm vào giỏ
                      </Button>
                      <Button
                        className="btn-buy-now"
                        icon={<ThunderboltFilled />}
                        onClick={() => handleAddToCart(true)}
                      >
                        Mua ngay (Giao 2H)
                      </Button>
                      <Tooltip
                        title={
                          isFavorite ? "Đã yêu thích" : "Lưu vào danh sách thích"
                        }
                      >
                        <Button
                          className={`btn-fav ${isFavorite ? "active" : ""}`}
                          icon={
                            isFavorite ? (
                              <HeartFilled style={{ color: "#e11d48", fontSize: 18 }} />
                            ) : (
                              <HeartOutlined style={{ fontSize: 18 }} />
                            )
                          }
                          onClick={handleFavoriteProduct}
                        />
                      </Tooltip>
                    </div>
                  </S.PurchaseControls>
                </S.ProductBuyBox>
              )}
            </Col>
          </Row>
        </S.MainShowcaseCard>

        {/* ================= 2. CONTENT + REVIEWS + SPECS ================= */}
        <Row gutter={[28, 28]}>
          {/* Main Column: Details & Reviews */}
          <Col lg={{ span: 15, order: 1 }} xs={{ span: 24, order: 2 }}>
            {/* Description Card */}
            <S.DetailCard>
              <S.DetailCardHeader>
                <div className="header-icon-box blue">
                  <FileTextOutlined />
                </div>
                <h3>Đặc Điểm Nổi Bật & Mô Tả Chi Tiết</h3>
              </S.DetailCardHeader>
              {productDetail.loading ? (
                <Skeleton active paragraph={{ rows: 6 }} />
              ) : (
                <S.ArticleContent
                  dangerouslySetInnerHTML={{
                    __html:
                      productDetail.data.content ||
                      "<p>Sản phẩm Apple chính hãng phân phối tại Việt Nam. Thiết kế đẳng cấp, hiệu năng bứt phá và trải nghiệm hệ sinh thái mượt mà đỉnh cao.</p>",
                  }}
                />
              )}
            </S.DetailCard>

            {/* Reviews Card */}
            <S.DetailCard id="reviews-section">
              <S.DetailCardHeader>
                <div className="header-icon-box amber">
                  <MessageOutlined />
                </div>
                <h3>Đánh Giá & Nhận Xét ({commentList.data.length})</h3>
              </S.DetailCardHeader>

              {/* Rating Summary Bar */}
              <S.RatingOverviewBox>
                <div className="score-badge-area">
                  <span className="big-rating">{productRate}</span>
                  <Rate
                    allowHalf
                    disabled
                    value={parseFloat(productRate)}
                    style={{ fontSize: 16, color: "#f59e0b" }}
                  />
                  <span className="count-lbl">
                    {commentList.data.length} lượt đánh giá thực tế
                  </span>
                </div>
                <div className="rating-divider" />
                <div className="rating-desc">
                  <strong>Khách hàng đánh giá thế nào?</strong>
                  <p>
                    100% đánh giá từ khách hàng đã trải nghiệm và mua sắm thiết bị Apple tại cửa hàng.
                  </p>
                </div>
              </S.RatingOverviewBox>

              {/* Submit Comment Form */}
              {userInfo.data.id ? (
                <S.CommentFormContainer>
                  <div className="form-heading">Gửi nhận xét của bạn</div>
                  <Form
                    form={commentForm}
                    layout="vertical"
                    initialValues={{ rate: 5, content: "" }}
                    onFinish={handleSubmitComment}
                  >
                    <Form.Item
                      label="Mức độ hài lòng của bạn:"
                      name="rate"
                      rules={[{ required: true, message: "Vui lòng chọn số sao" }]}
                    >
                      <Rate
                        allowHalf
                        tooltips={["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"]}
                        style={{ color: "#f59e0b" }}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Nội dung đánh giá:"
                      name="content"
                      rules={[{ required: true, message: "Vui lòng nhập nhận xét" }]}
                    >
                      <Input.TextArea
                        placeholder="Hãy chia sẻ cảm nhận của bạn về thiết kế, hiệu năng, thời lượng pin..."
                        autoSize={{ minRows: 3, maxRows: 6 }}
                        className="custom-textarea"
                      />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-post-review">
                      Gửi đánh giá
                    </Button>
                  </Form>
                </S.CommentFormContainer>
              ) : (
                <S.LoginPromptBox>
                  <span>Đăng nhập để chia sẻ đánh giá và nhận voucher ưu đãi 50k.</span>
                  <button onClick={() => history.push("/login")} className="btn-login-now">
                    Đăng nhập ngay
                  </button>
                </S.LoginPromptBox>
              )}

              {/* Comment Items List */}
              {commentList.data.length > 0 ? (
                <div className="comment-list-wrapper">
                  {commentList.data.map((item) => {
                    const authorName = item.user?.name || "Khách hàng Apple";
                    const initialChar = authorName.charAt(0).toUpperCase();

                    return (
                      <S.ReviewItem key={item.id || item.createdAt}>
                        <div className="avatar-circle">{initialChar}</div>
                        <div className="review-main">
                          <div className="review-meta">
                            <span className="author-name">{authorName}</span>
                            <span className="badge-bought">
                              <CheckCircleFilled /> Đã mua hàng
                            </span>
                            <span className="review-time">
                              {moment(item.createdAt).fromNow()}
                            </span>
                          </div>
                          <div className="star-row">
                            <Rate
                              disabled
                              value={item.rate || 5}
                              allowHalf
                              style={{ fontSize: 13, color: "#f59e0b" }}
                            />
                          </div>
                          <p className="review-text">{item.content}</p>
                        </div>
                      </S.ReviewItem>
                    );
                  })}
                </div>
              ) : (
                <div className="no-reviews">
                  Chưa có đánh giá nào. Hãy là khách hàng đầu tiên chia sẻ cảm nhận!
                </div>
              )}
            </S.DetailCard>
          </Col>

          {/* Right Sidebar: Tech Specs + Hotline */}
          <Col lg={{ span: 9, order: 2 }} xs={{ span: 24, order: 1 }}>
            <div style={{ position: "sticky", top: 90 }}>
              {/* Tech Specs Card */}
              <S.DetailCard>
                <S.DetailCardHeader>
                  <div className="header-icon-box green">
                    <MobileOutlined />
                  </div>
                  <h3>Thông Số Kỹ Thuật</h3>
                </S.DetailCardHeader>

                {techSpecs.length > 0 ? (
                  <S.SpecsTable>
                    {techSpecs.map((spec, idx) => (
                      <div className={`spec-row ${idx % 2 === 1 ? "striped" : ""}`} key={spec.label}>
                        <div className="spec-col-label">
                          {spec.icon}
                          <span>{spec.label}</span>
                        </div>
                        <div
                          className="spec-col-val"
                          dangerouslySetInnerHTML={{ __html: spec.value }}
                        />
                      </div>
                    ))}
                  </S.SpecsTable>
                ) : (
                  <div style={{ textAlign: "center", padding: "16px", color: "#94a3b8" }}>
                    Thông số kỹ thuật đang được cập nhật
                  </div>
                )}
              </S.DetailCard>

              {/* Customer Support Card */}
              <S.SupportCard>
                <div className="icon-wrapper">
                  <CustomerServiceOutlined />
                </div>
                <div className="support-body">
                  <h4>Tư Vấn Trực Tuyến 24/7</h4>
                  <p>
                    Hotline tư vấn miễn phí: <strong className="hotline-number">1800 6601</strong>
                  </p>
                  <span>(Hỗ trợ kỹ thuật & đặt hàng từ 8:00 - 22:00)</span>
                </div>
              </S.SupportCard>
            </div>
          </Col>
        </Row>
      </S.ProductDetailContainer>
    </div>
  );
};

export default ProductDetailPage;
