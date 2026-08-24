import React, { useEffect, useMemo } from "react";
import { useHistory, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Skeleton } from "antd";
import {
  ArrowRightOutlined,
  FireFilled,
  ThunderboltFilled,
  ShoppingCartOutlined,
  StarFilled,
  CheckCircleFilled,
} from "@ant-design/icons";

import { getProductListAction } from "../../../redux/slices/product.slice";
import { ROUTER } from "../../../constants/router";
import * as S from "./styles";

const ProductListHome = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductListAction({ limit: 100, page: 1 }));
  }, [dispatch]);

  const productGroups = [
    {
      key: "iphone",
      categoryId: 1,
      label: "IPHONE CHÍNH HÃNG",
      title: "Điện Thoại iPhone",
      description: "Thiết kế thời thượng, chip A-Series & Apple Intelligence đỉnh cao",
      link: "/products?categoryId=1",
    },
    {
      key: "mac",
      categoryId: 2,
      label: "MACBOOK & MAC",
      title: "Dòng Mac Chuyên Nghiệp",
      description: "Sức mạnh bứt phá cùng Apple Silicon M-Series cho công việc",
      link: "/products?categoryId=2",
    },
    {
      key: "ipad",
      categoryId: 3,
      label: "IPAD & TABLET",
      title: "Máy Tính Bảng iPad",
      description: "Màn hình Retina sắc nét, linh hoạt cho sáng tạo và học tập",
      link: "/products?categoryId=3",
    },
    {
      key: "watch",
      categoryId: 4,
      label: "APPLE WATCH",
      title: "Đồng Hồ Thông Minh Apple Watch",
      description: "Trợ lý sức khỏe toàn diện và theo dõi vận động thông minh",
      link: "/products?categoryId=4",
    },
    {
      key: "airpods",
      categoryId: 5,
      label: "AIRPODS & ÂM THANH",
      title: "Tai Nghe Apple AirPods",
      description: "Âm thanh không gian đỉnh cao và chống ồn chủ động vượt trội",
      link: "/products?categoryId=5",
    },
  ];

  const renderCards = (items, type = "featured") =>
    items.map((item, index) => {
      const finalPrice =
        type === "sale" && item.salePercent
          ? Math.round((item.price * (100 - item.salePercent)) / 100)
          : item.price;

      return (
        <Col lg={6} md={8} sm={12} xs={24} key={item.id}>
          <S.ProductItem
            className={type}
            onClick={() =>
              history.push(
                generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id })
              )
            }
          >
            {item.isNew && (
              <div className="tag-badge new">
                <StarFilled /> MỚI
              </div>
            )}
            {type === "sale" && (
              <div className="tag-badge sale">
                <ThunderboltFilled /> -{item.salePercent || 15}%
              </div>
            )}
            {type === "bestseller" && (
              <div className="tag-badge bestseller">
                <FireFilled /> BÁN CHẠY
              </div>
            )}

            {type === "bestseller" && <div className="rank-pill">#{index + 1}</div>}

            <div className="image-wrap">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="card-content">
              <div className="name" title={item.name}>
                {item.name}
              </div>

              <div className="price-row">
                <div className="current-price">
                  {finalPrice?.toLocaleString("vi-VN")} <span>₫</span>
                </div>
                {type === "sale" && item.salePercent && (
                  <div className="old-price">
                    {item.price?.toLocaleString("vi-VN")} ₫
                  </div>
                )}
              </div>

              <div className="meta-line">
                <span className="trust-text">
                  <CheckCircleFilled /> Chính hãng 12T
                </span>
                {item.soldCount ? (
                  <span className="sold-text">Đã bán {item.soldCount}</span>
                ) : null}
              </div>

              <button
                type="button"
                className="buy-button"
                onClick={(e) => {
                  e.stopPropagation();
                  history.push(
                    generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id })
                  );
                }}
              >
                <ShoppingCartOutlined /> Xem chi tiết
              </button>
            </div>
          </S.ProductItem>
        </Col>
      );
    });

  const renderProductList = useMemo(() => {
    return {
      featured: renderCards(productList.data.slice(0, 4)),
      bestsellers: renderCards(
        [...productList.data]
          .sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0))
          .slice(0, 4),
        "bestseller"
      ),
      sale: renderCards(
        productList.data.filter((item) => item.salePercent).slice(0, 4),
        "sale"
      ),
    };
  }, [productList.data, history]);

  if (productList.loading && !productList.data.length) {
    return (
      <S.ProductContainer>
        <S.ProductSection>
          <Skeleton active paragraph={{ rows: 6 }} />
        </S.ProductSection>
      </S.ProductContainer>
    );
  }

  return (
    <S.ProductContainer>
      {/* SECTION 1: FLASH SALE */}
      <S.ProductSection className="sale-section">
        <S.ProductTitle>
          <div className="title-left">
            <span className="eyebrow">
              <ThunderboltFilled /> FLASH SALE GIÁ SỐC
            </span>
            <h3>
              <ThunderboltFilled style={{ color: "#e11d48" }} /> Ưu Đãi Đang Diễn Ra
            </h3>
            <p>Số lượng có hạn, nhanh tay săn ngay ưu đãi tốt nhất hôm nay</p>
          </div>
          <button
            className="view-all-btn"
            onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}
          >
            Xem tất cả <ArrowRightOutlined />
          </button>
        </S.ProductTitle>
        <Row className="product-grid" gutter={[16, 16]}>
          {renderProductList.sale}
        </Row>
      </S.ProductSection>

      {/* SECTION 2: BEST SELLERS */}
      <S.ProductSection className="bestseller-section">
        <S.ProductTitle>
          <div className="title-left">
            <span className="eyebrow gold">
              <FireFilled /> TOP THỊNH HÀNH
            </span>
            <h3>
              <FireFilled style={{ color: "#ea580c" }} /> Sản Phẩm Bán Chạy Nhất
            </h3>
            <p>Những thiết bị được đông đảo khách hàng tin dùng và chọn mua</p>
          </div>
          <button
            className="view-all-btn"
            onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}
          >
            Xem tất cả <ArrowRightOutlined />
          </button>
        </S.ProductTitle>
        <Row className="product-grid" gutter={[16, 16]}>
          {renderProductList.bestsellers}
        </Row>
      </S.ProductSection>

      {/* SECTION 3: FEATURED PHONES */}
      <S.ProductSection>
        <S.ProductTitle>
          <div className="title-left">
            <span className="eyebrow blue">NỔI BẬT NHẤT</span>
            <h3>Điện Thoại Được Quan Tâm</h3>
            <p>Bộ sưu tập smartphone thế hệ mới đáng sở hữu nhất</p>
          </div>
          <button
            className="view-all-btn"
            onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}
          >
            Xem tất cả <ArrowRightOutlined />
          </button>
        </S.ProductTitle>
        <Row className="product-grid" gutter={[16, 16]}>
          {renderProductList.featured}
        </Row>
      </S.ProductSection>

      {/* SECTION 4: CATALOG CATEGORY GROUPS */}
      {productGroups.map((group) => {
        const products = productList.data
          .filter((item) => item.categoryId === group.categoryId)
          .slice(0, 4);
        if (!products.length) return null;
        return (
          <S.ProductSection key={group.key}>
            <S.ProductTitle>
              <div className="title-left">
                <span className="eyebrow blue">{group.label}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <button
                className="view-all-btn"
                onClick={() => history.push(group.link || ROUTER.USER.PRODUCT_LIST)}
              >
                Xem tất cả <ArrowRightOutlined />
              </button>
            </S.ProductTitle>
            <Row className="product-grid" gutter={[16, 16]}>
              {renderCards(products)}
            </Row>
          </S.ProductSection>
        );
      })}
    </S.ProductContainer>
  );
};

export default ProductListHome;
