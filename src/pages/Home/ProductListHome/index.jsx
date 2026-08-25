import React, { useState, useEffect, useMemo } from "react";
import { useHistory, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Skeleton } from "antd";
import {
  ArrowRightOutlined,
  FireFilled,
  ThunderboltFilled,
  StarFilled,
  CheckCircleFilled,
  ShoppingFilled,
  RightOutlined,
  EyeOutlined,
  CrownFilled,
  SafetyOutlined,
} from "@ant-design/icons";

import { getProductListAction } from "../../../redux/slices/product.slice";
import { ROUTER } from "../../../constants/router";
import * as S from "./styles";

const CATEGORY_TABS = [
  { id: 0, label: "Tất cả thiết bị", icon: "✨" },
  { id: 1, label: "iPhone", icon: "📱" },
  { id: 2, label: "Mac & MacBook", icon: "💻" },
  { id: 3, label: "iPad", icon: "📟" },
  { id: 4, label: "Apple Watch", icon: "⌚" },
  { id: 5, label: "AirPods & Âm Thanh", icon: "🎧" },
];

const ProductListHome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);

  const { productList } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductListAction({ limit: 100, page: 1 }));
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!productList.data || !productList.data.length) return [];
    if (activeTab === 0) return productList.data.slice(0, 8);
    return productList.data.filter((p) => p.categoryId === activeTab).slice(0, 8);
  }, [productList.data, activeTab]);

  const flashSaleProducts = useMemo(() => {
    if (!productList.data || !productList.data.length) return [];
    return productList.data
      .filter((p) => p.salePercent && p.salePercent > 0)
      .slice(0, 4);
  }, [productList.data]);

  const bestsellerProducts = useMemo(() => {
    if (!productList.data || !productList.data.length) return [];
    return [...productList.data]
      .sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0))
      .slice(0, 4);
  }, [productList.data]);

  const renderProductCard = (item, type = "default", rank = null) => {
    const finalPrice =
      item.salePercent && item.salePercent > 0
        ? Math.round((item.price * (100 - item.salePercent)) / 100)
        : item.price;

    return (
      <Col lg={6} md={8} sm={12} xs={24} key={item.id}>
        <S.ProductCard
          $cardType={type}
          onClick={() =>
            history.push(
              generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id })
            )
          }
        >
          {/* Top Badges */}
          <div className="card-badge-container">
            {item.salePercent && item.salePercent > 0 ? (
              <span className="badge-pill sale">
                <ThunderboltFilled /> -{item.salePercent}%
              </span>
            ) : item.isNew ? (
              <span className="badge-pill new">
                <StarFilled /> MỚI
              </span>
            ) : type === "bestseller" ? (
              <span className="badge-pill hot">
                <FireFilled /> HOT
              </span>
            ) : null}

            {rank && <div className="rank-badge">#{rank}</div>}
          </div>

          {/* Image Stage */}
          <div className="image-stage">
            <img src={item.image} alt={item.name} loading="lazy" />
          </div>

          {/* Card Info */}
          <div className="card-body">
            {/* Category Subtitle & Rating */}
            <div className="card-eyebrow">
              <span className="category-name">
                {item.categoryId === 1
                  ? "iPhone"
                  : item.categoryId === 2
                  ? "MacBook"
                  : item.categoryId === 3
                  ? "iPad"
                  : item.categoryId === 4
                  ? "Apple Watch"
                  : item.categoryId === 5
                  ? "AirPods"
                  : "Apple chính hãng"}
              </span>
              <span className="rating-pill">
                <StarFilled /> 4.9
              </span>
            </div>

            {/* Product Name */}
            <h4 className="product-name" title={item.name}>
              {item.name}
            </h4>

            {/* Spec Chips */}
            <div className="spec-chips">
              {item.rom && <span className="spec-chip">{item.rom}</span>}
              {item.ram && <span className="spec-chip">RAM {item.ram}</span>}
              {item.pin && <span className="spec-chip">{item.pin}</span>}
            </div>

            {/* Price Row */}
            <div className="price-block">
              <div className="price-main">
                <span className="price-val">
                  {finalPrice?.toLocaleString("vi-VN")}
                </span>
                <span className="currency">₫</span>
              </div>
              {item.salePercent && item.salePercent > 0 ? (
                <span className="price-old">
                  {item.price?.toLocaleString("vi-VN")} ₫
                </span>
              ) : (
                <span className="installment-tag">Trả góp 0%</span>
              )}
            </div>

            {/* Action Bar */}
            <div className="action-bar">
              <span className="warranty-tag">
                <CheckCircleFilled /> VN/A 12 tháng
              </span>
              <button
                type="button"
                className="btn-detail"
                onClick={(e) => {
                  e.stopPropagation();
                  history.push(
                    generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id })
                  );
                }}
              >
                <span>Xem ngay</span>
                <RightOutlined />
              </button>
            </div>
          </div>
        </S.ProductCard>
      </Col>
    );
  };

  if (productList.loading && !productList.data.length) {
    return (
      <S.HomeProductSection>
        <S.SectionCard>
          <Skeleton active paragraph={{ rows: 8 }} />
        </S.SectionCard>
      </S.HomeProductSection>
    );
  }

  return (
    <S.HomeProductSection>
      {/* ================= 1. FLASH SALE SECTION ================= */}
      {flashSaleProducts.length > 0 && (
        <S.SectionCard className="flash-sale-card">
          <S.SectionHeader>
            <div className="header-left">
              <div className="badge-tag flash-badge">
                <ThunderboltFilled /> FLASH SALE GIÁ SỐC
              </div>
              <h3 className="section-title">
                Ưu Đãi Đặc Biệt Hôm Nay
              </h3>
              <p className="section-desc">
                Cơ hội sở hữu thiết bị Apple chính hãng với mức giá hấp dẫn nhất
              </p>
            </div>
            <button
              className="view-more-btn red"
              onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}
            >
              Xem tất cả <ArrowRightOutlined />
            </button>
          </S.SectionHeader>
          <Row gutter={[20, 20]} className="card-grid">
            {flashSaleProducts.map((p) => renderProductCard(p, "sale"))}
          </Row>
        </S.SectionCard>
      )}

      {/* ================= 2. BEST SELLERS SECTION ================= */}
      {bestsellerProducts.length > 0 && (
        <S.SectionCard className="bestseller-card">
          <S.SectionHeader>
            <div className="header-left">
              <div className="badge-tag best-badge">
                <CrownFilled /> TOP THỊNH HÀNH
              </div>
              <h3 className="section-title">
                Sản Phẩm Bán Chạy Nhất
              </h3>
              <p className="section-desc">
                Các siêu phẩm Apple được người dùng tin tưởng và mua nhiều nhất
              </p>
            </div>
            <button
              className="view-more-btn dark"
              onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}
            >
              Xem bảng xếp hạng <ArrowRightOutlined />
            </button>
          </S.SectionHeader>
          <Row gutter={[20, 20]} className="card-grid">
            {bestsellerProducts.map((p, idx) =>
              renderProductCard(p, "bestseller", idx + 1)
            )}
          </Row>
        </S.SectionCard>
      )}

      {/* ================= 3. DISCOVER BY CATEGORY WITH TABS ================= */}
      <S.SectionCard className="catalog-card">
        <S.SectionHeader>
          <div className="header-left">
            <div className="badge-tag blue-badge">
              <StarFilled /> HỆ SINH THÁI APPLE
            </div>
            <h3 className="section-title">
              Khám Phá Toàn Bộ Thiết Bị
            </h3>
            <p className="section-desc">
              Lựa chọn sản phẩm Apple chính hãng phù hợp nhất với nhu cầu của bạn
            </p>
          </div>
          <button
            className="view-more-btn blue"
            onClick={() =>
              history.push(
                activeTab === 0
                  ? ROUTER.USER.PRODUCT_LIST
                  : `/products?categoryId=${activeTab}`
              )
            }
          >
            Xem tất cả <ArrowRightOutlined />
          </button>
        </S.SectionHeader>

        {/* Category Pill Tabs */}
        <S.TabNav>
          {CATEGORY_TABS.map((tab) => (
            <S.TabButton
              key={tab.id}
              $active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-text">{tab.label}</span>
            </S.TabButton>
          ))}
        </S.TabNav>

        {/* Product Grid */}
        <Row gutter={[20, 20]} className="card-grid">
          {filteredProducts.map((p) => renderProductCard(p, "normal"))}
        </Row>
      </S.SectionCard>

      {/* ================= 4. PROMO TRUST BANNER ================= */}
      <S.PromoBanner>
        <div className="promo-item">
          <div className="promo-icon">🛡️</div>
          <div className="promo-text">
            <h5>Bảo Hành 12 Tháng Apple</h5>
            <p>Đổi mới 30 ngày nếu phát sinh lỗi phần cứng</p>
          </div>
        </div>
        <div className="promo-divider" />
        <div className="promo-item">
          <div className="promo-icon">⚡</div>
          <div className="promo-text">
            <h5>Giao Hàng Hỏa Tốc 2H</h5>
            <p>Nhận hàng siêu tốc tại các khu vực trung tâm</p>
          </div>
        </div>
        <div className="promo-divider" />
        <div className="promo-item">
          <div className="promo-icon">💳</div>
          <div className="promo-text">
            <h5>Hỗ Trợ Trả Góp 0%</h5>
            <p>Thủ tục xét duyệt đơn giản chỉ trong 5 phút</p>
          </div>
        </div>
      </S.PromoBanner>
    </S.HomeProductSection>
  );
};

export default ProductListHome;
