import React, { useEffect, useState, useMemo } from "react";
import { useHistory, generatePath, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Slider,
  Select,
  Tag,
  Empty,
  Skeleton,
} from "antd";
import {
  SearchOutlined,
  CloseCircleFilled,
  StarFilled,
  ThunderboltFilled,
  FireFilled,
  RightOutlined,
  CheckCircleFilled,
  FilterOutlined,
  ReloadOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import TopWrapper from "../../components/TopWrapper";
import { PAGE_SIZE } from "../../constants/pagination";
import { ROUTER } from "../../constants/router";
import { BREADCRUMB, DEFAULT_PRICE_FILTER } from "./constants";

import { getProductListAction } from "../../redux/slices/product.slice";
import { getCategoryListAction } from "../../redux/slices/category.slice";

import * as S from "./styles";

const CATEGORY_ICONS = {
  1: "📱", // iPhone
  2: "💻", // Mac
  3: "📟", // iPad
  4: "⌚", // Watch
  5: "🎧", // AirPods
  6: "🔌", // Phụ kiện
};

const QUICK_PRICE_RANGES = [
  { label: "Tất cả mức giá", range: [0, 60000000] },
  { label: "Dưới 10 triệu", range: [0, 10000000] },
  { label: "10tr - 20 triệu", range: [10000000, 20000000] },
  { label: "20tr - 35 triệu", range: [20000000, 35000000] },
  { label: "Trên 35 triệu", range: [35000000, 60000000] },
];

const ProductListPage = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState(DEFAULT_PRICE_FILTER);
  const [keywordFilter, setKeywordFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");

  const history = useHistory();
  const location = useLocation();

  const { productList } = useSelector((state) => state.productReducer);
  const { categoryList } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get("q") || "";
    const categoryId = params.get("categoryId");
    setKeywordFilter(keyword);

    const initialCategoryFilter = categoryId
      ? [{ id: parseInt(categoryId, 10) }]
      : [];
    setCategoryFilter(initialCategoryFilter);

    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        keyword,
        categoryFilter: initialCategoryFilter,
      })
    );
    dispatch(getCategoryListAction());
  }, [location.search, dispatch]);

  const handleToggleCategory = (categoryItem) => {
    const isSelected = categoryFilter.some((item) => item.id === categoryItem.id);
    let newCategoryFilter;
    if (isSelected) {
      newCategoryFilter = categoryFilter.filter((item) => item.id !== categoryItem.id);
    } else {
      newCategoryFilter = [...categoryFilter, categoryItem];
    }
    setCategoryFilter(newCategoryFilter);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter: newCategoryFilter,
        priceFilter,
        keyword: keywordFilter,
        sortFilter,
      })
    );
  };

  const handleClearCategoryFilter = (categoryFilterItem) => {
    const newCategoryFilter = categoryFilter.filter(
      (filterItem) => filterItem.id !== categoryFilterItem.id
    );
    setCategoryFilter(newCategoryFilter);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter: newCategoryFilter,
        priceFilter,
        keyword: keywordFilter,
        sortFilter,
      })
    );
  };

  const handleChangePriceFilter = (value) => {
    setPriceFilter(value);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter,
        priceFilter: value,
        keyword: keywordFilter,
        sortFilter,
      })
    );
  };

  const handleClearPriceFilter = () => {
    setPriceFilter(DEFAULT_PRICE_FILTER);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter,
        priceFilter: DEFAULT_PRICE_FILTER,
        keyword: keywordFilter,
        sortFilter,
      })
    );
  };

  const handleSearchKeyword = (e) => {
    setKeywordFilter(e.target.value);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter,
        priceFilter,
        keyword: e.target.value,
        sortFilter,
      })
    );
  };

  const handleClearKeyword = () => {
    setKeywordFilter("");
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter,
        priceFilter,
        keyword: "",
        sortFilter,
      })
    );
  };

  const handleChangeSort = (value) => {
    setSortFilter(value);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter,
        priceFilter,
        keyword: keywordFilter,
        sortFilter: value,
      })
    );
  };

  const handleClearSort = () => {
    setSortFilter("");
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter,
        priceFilter,
        keyword: "",
        sortFilter: "",
      })
    );
  };

  const handleResetAllFilters = () => {
    setCategoryFilter([]);
    setPriceFilter(DEFAULT_PRICE_FILTER);
    setKeywordFilter("");
    setSortFilter("");
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter: [],
        priceFilter: DEFAULT_PRICE_FILTER,
        keyword: "",
        sortFilter: "",
      })
    );
  };

  const handleLoadMore = () => {
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: productList.meta.page + 1,
        categoryFilter,
        priceFilter,
        keyword: keywordFilter,
        sortFilter,
        more: true,
      })
    );
  };

  const hasActiveFilters =
    categoryFilter.length > 0 ||
    keywordFilter ||
    priceFilter[0] !== DEFAULT_PRICE_FILTER[0] ||
    priceFilter[1] !== DEFAULT_PRICE_FILTER[1] ||
    sortFilter;

  const renderCategoryFilterTags = useMemo(() => {
    return categoryFilter.map((categoryFilterItem) => {
      const matched = categoryList.data?.find(
        (c) => c.id === categoryFilterItem.id
      );
      const displayName =
        categoryFilterItem.name ||
        matched?.name ||
        `Danh mục ${categoryFilterItem.id}`;
      return (
        <Tag
          key={categoryFilterItem.id}
          closable
          onClose={() => handleClearCategoryFilter(categoryFilterItem)}
        >
          {displayName}
        </Tag>
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter, categoryList.data]);

  const renderProductList = useMemo(() => {
    if (!productList.data || !productList.data.length) return null;

    return productList.data.map((item) => {
      const finalPrice =
        item.salePercent && item.salePercent > 0
          ? Math.round((item.price * (100 - item.salePercent)) / 100)
          : item.price;

      return (
        <Col lg={8} md={12} sm={12} xs={24} key={item.id}>
          <S.ProductCard
            onClick={() =>
              history.push(
                generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id })
              )
            }
          >
            {/* Badges */}
            <div className="card-badge-container">
              {item.salePercent && item.salePercent > 0 ? (
                <span className="badge-pill sale">
                  <ThunderboltFilled /> -{item.salePercent}%
                </span>
              ) : item.isNew ? (
                <span className="badge-pill new">
                  <StarFilled /> MỚI
                </span>
              ) : item.soldCount > 100 ? (
                <span className="badge-pill hot">
                  <FireFilled /> BÁN CHẠY
                </span>
              ) : null}
            </div>

            {/* Image Stage */}
            <div className="image-stage">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>

            {/* Body */}
            <div className="card-body">
              <div className="card-eyebrow">
                <span className="cat-name">
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
                    : "Apple"}
                </span>
                <span className="rating-tag">
                  <StarFilled /> 4.9
                </span>
              </div>

              <h4 className="product-title" title={item.name}>
                {item.name}
              </h4>

              {/* Spec Chips */}
              <div className="spec-chips">
                {item.rom && <span className="chip">{item.rom}</span>}
                {item.ram && <span className="chip">RAM {item.ram}</span>}
                {item.pin && <span className="chip">{item.pin}</span>}
              </div>

              {/* Price */}
              <div className="price-box">
                <div className="price-current">
                  <span>{finalPrice?.toLocaleString("vi-VN")}</span>
                  <span className="currency">₫</span>
                </div>
                {item.salePercent && item.salePercent > 0 ? (
                  <span className="price-original">
                    {item.price?.toLocaleString("vi-VN")} ₫
                  </span>
                ) : (
                  <span className="installment-badge">Trả góp 0%</span>
                )}
              </div>

              {/* Bottom Action */}
              <div className="card-footer">
                <span className="trust-badge">
                  <CheckCircleFilled /> VN/A 12T
                </span>
                <button
                  type="button"
                  className="btn-view"
                  onClick={(e) => {
                    e.stopPropagation();
                    history.push(
                      generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id })
                    );
                  }}
                >
                  <span>Chi tiết</span>
                  <RightOutlined />
                </button>
              </div>
            </div>
          </S.ProductCard>
        </Col>
      );
    });
  }, [history, productList.data]);

  return (
    <>
      <TopWrapper titlePage="Hệ Sinh Thái Thiết Bị Apple" breadcrumb={BREADCRUMB} />

      <S.ProductPageWrapper>
        {/* ================= HERO INTRO BAR ================= */}
        <S.HeroHeader>
          <div className="hero-left">
            <span className="hero-eyebrow">
              <AppstoreOutlined /> APPLE AUTHORISED RESELLER
            </span>
            <h2>Danh Sách Thiết Bị Apple Chính Hãng</h2>
            <p>
              Khám phá toàn bộ dòng sản phẩm iPhone, Mac, iPad, Apple Watch và phụ
              kiện cao cấp phân phối chính hãng VN/A.
            </p>
          </div>
          <div className="hero-stats">
            <div className="stat-box">
              <span className="stat-val">{productList.meta?.total || productList.data?.length || 21}+</span>
              <span className="stat-lbl">Sản phẩm</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">100%</span>
              <span className="stat-lbl">Chính hãng</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">0%</span>
              <span className="stat-lbl">Trả góp</span>
            </div>
          </div>
        </S.HeroHeader>

        <Row gutter={[24, 24]}>
          {/* ================= SIDEBAR FILTERS ================= */}
          <Col lg={6} md={8} xs={24}>
            <S.SidebarFilter>
              {/* Header Filter Box */}
              <div className="filter-box-header">
                <div className="box-title">
                  <FilterOutlined /> Bộ Lọc Sản Phẩm
                </div>
                {hasActiveFilters && (
                  <button className="btn-reset" onClick={handleResetAllFilters}>
                    <ReloadOutlined /> Đặt lại
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <S.FilterGroup>
                <div className="group-title">Dòng sản phẩm</div>
                <div className="category-btn-list">
                  {categoryList.data?.map((cat) => {
                    const isSelected = categoryFilter.some(
                      (item) => item.id === cat.id
                    );
                    return (
                      <S.CategoryPill
                        key={cat.id}
                        $active={isSelected}
                        onClick={() => handleToggleCategory(cat)}
                      >
                        <span className="cat-icon">{CATEGORY_ICONS[cat.id] || ""}</span>
                        <span className="cat-name">{cat.name}</span>
                        {isSelected && <span className="check-mark">✓</span>}
                      </S.CategoryPill>
                    );
                  })}
                </div>
              </S.FilterGroup>

              {/* Quick Price Ranges */}
              <S.FilterGroup>
                <div className="group-title">Mức giá phổ biến</div>
                <div className="quick-prices">
                  {QUICK_PRICE_RANGES.map((item, idx) => {
                    const isSelected =
                      priceFilter[0] === item.range[0] &&
                      priceFilter[1] === item.range[1];
                    return (
                      <S.QuickPriceTag
                        key={idx}
                        $active={isSelected}
                        onClick={() => handleChangePriceFilter(item.range)}
                      >
                        {item.label}
                      </S.QuickPriceTag>
                    );
                  })}
                </div>
              </S.FilterGroup>

              {/* Price Slider */}
              <S.FilterGroup>
                <div className="group-title">Tùy chỉnh khoảng giá</div>
                <div className="slider-container">
                  <Slider
                    range
                    min={DEFAULT_PRICE_FILTER[0]}
                    max={DEFAULT_PRICE_FILTER[1]}
                    step={1000000}
                    value={priceFilter}
                    tipFormatter={(val) => `${(val / 1000000).toFixed(0)}tr`}
                    onChange={(val) => handleChangePriceFilter(val)}
                  />
                  <div className="price-range-labels">
                    <span className="val-box">
                      {priceFilter[0].toLocaleString("vi-VN")} ₫
                    </span>
                    <span className="divider">—</span>
                    <span className="val-box">
                      {priceFilter[1].toLocaleString("vi-VN")} ₫
                    </span>
                  </div>
                </div>
              </S.FilterGroup>
            </S.SidebarFilter>
          </Col>

          {/* ================= MAIN PRODUCT GRID ================= */}
          <Col lg={18} md={16} xs={24}>
            {/* Search & Sort Bar */}
            <S.ToolbarCard>
              <div className="search-input-wrapper">
                <SearchOutlined className="search-icon" />
                <input
                  type="text"
                  placeholder="Tìm kiếm iPhone, Mac, iPad, AirPods..."
                  value={keywordFilter}
                  onChange={handleSearchKeyword}
                />
                {keywordFilter && (
                  <CloseCircleFilled
                    className="clear-icon"
                    onClick={handleClearKeyword}
                  />
                )}
              </div>

              <div className="sort-wrapper">
                <span className="sort-label">Sắp xếp:</span>
                <Select
                  value={sortFilter || undefined}
                  placeholder="Mặc định"
                  allowClear
                  onChange={handleChangeSort}
                  onClear={handleClearSort}
                  className="sort-select"
                >
                  <Select.Option value="asc">Giá: Thấp đến Cao</Select.Option>
                  <Select.Option value="desc">Giá: Cao đến Thấp</Select.Option>
                </Select>
              </div>
            </S.ToolbarCard>

            {/* Active Filter Tags */}
            {hasActiveFilters && (
              <S.ActiveFilterTags>
                <span className="active-label">Đang lọc theo:</span>
                {categoryFilter.length > 0 && renderCategoryFilterTags}
                {keywordFilter && (
                  <Tag closable onClose={handleClearKeyword}>
                    Từ khóa: <strong>{keywordFilter}</strong>
                  </Tag>
                )}
                {(priceFilter[0] !== DEFAULT_PRICE_FILTER[0] ||
                  priceFilter[1] !== DEFAULT_PRICE_FILTER[1]) && (
                  <Tag closable onClose={handleClearPriceFilter}>
                    Giá: {priceFilter[0].toLocaleString("vi-VN")}₫ - {priceFilter[1].toLocaleString("vi-VN")}₫
                  </Tag>
                )}
                {sortFilter && (
                  <Tag closable onClose={handleClearSort}>
                    Sắp xếp: {sortFilter === "asc" ? "Giá tăng dần" : "Giá giảm dần"}
                  </Tag>
                )}
                <button className="btn-clear-all" onClick={handleResetAllFilters}>
                  Xóa tất cả
                </button>
              </S.ActiveFilterTags>
            )}

            {/* Product Cards Grid */}
            {productList.loading && !productList.data.length ? (
              <Row gutter={[20, 20]}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Col lg={8} md={12} sm={12} xs={24} key={i}>
                    <S.SkeletonCard>
                      <Skeleton active paragraph={{ rows: 6 }} />
                    </S.SkeletonCard>
                  </Col>
                ))}
              </Row>
            ) : productList.data.length > 0 ? (
              <>
                <Row gutter={[20, 20]}>{renderProductList}</Row>

                {/* Load More Button */}
                {productList.meta.total !== productList.data.length && (
                  <S.LoadMoreWrapper>
                    <button className="btn-load-more" onClick={handleLoadMore}>
                      <span>Xem thêm thiết bị Apple</span>
                      <RightOutlined />
                    </button>
                  </S.LoadMoreWrapper>
                )}
              </>
            ) : (
              <S.EmptyWrapper>
                <Empty
                  description={
                    <div>
                      <h4>Không tìm thấy sản phẩm phù hợp</h4>
                      <p>Hãy thử thay đổi bộ lọc hoặc tìm kiếm từ khóa khác</p>
                    </div>
                  }
                >
                  <button className="btn-reset-empty" onClick={handleResetAllFilters}>
                    <ReloadOutlined /> Xóa toàn bộ bộ lọc
                  </button>
                </Empty>
              </S.EmptyWrapper>
            )}
          </Col>
        </Row>
      </S.ProductPageWrapper>
    </>
  );
};

export default ProductListPage;
