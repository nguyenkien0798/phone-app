import React, { useEffect, useState, useMemo } from "react";
import { useHistory, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Row,
  Col,
  Checkbox,
  Input,
  Space,
  Tag,
  Slider,
  Select,
} from "antd";

import TopWrapper from "../../components/TopWrapper";

import { PAGE_SIZE } from "../../constants/pagination";
import { ROUTER } from "../../constants/router";
import { BREADCRUMB, DEFAULT_PRICE_FILTER } from "./constants";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../redux/actions";

import * as S from "./styles";

const ProductListPage = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState(DEFAULT_PRICE_FILTER);
  const [keywordFilter, setKeywordFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");

  const history = useHistory();

  const { productList } = useSelector((state) => state.productReducer);
  const { categoryList } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListAction({ limit: PAGE_SIZE.USER_PRODUCT, page: 1 }));
    dispatch(getCategoryListAction());
  }, []);

  const handleSelectCategoryFilter = (e) => {
    const { value, checked } = e.target;
    const newCategoryFilter = checked
      ? [...categoryFilter, value]
      : categoryFilter.filter((filterItem) => filterItem.id !== value.id);
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
    setPriceFilter([0, 60000000]);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter,
        priceFilter: [0, 60000000],
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

  const handleLoadMore = (e) => {
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

  const renderCategoryList = useMemo(() => {
    return categoryList.data.map((categoryItem, categoryIndex) => {
      const checked =
        categoryFilter.findIndex(
          (filterItem) => filterItem.id === categoryItem.id
        ) !== -1;
      return (
        <S.FilterItem key={categoryItem.id}>
          <Checkbox
            value={categoryItem}
            checked={checked}
            onChange={(e) => handleSelectCategoryFilter(e)}
          >
            {categoryItem.name}
          </Checkbox>
        </S.FilterItem>
      );
    });
  }, [categoryList.data, categoryFilter]);

  const renderCategoryFilterTags = useMemo(() => {
    return categoryFilter.map((categoryFilterItem, categoryFilterIndex) => (
      <Tag
        key={categoryFilterItem.id}
        closable
        onClose={() => handleClearCategoryFilter(categoryFilterItem)}
      >
        {categoryFilterItem.name}
      </Tag>
    ));
  }, [categoryFilter]);

  const renderProductList = useMemo(() => {
    return productList.data.map((item, index) => (
      <Col lg={6} md={8} sm={8} xs={12} key={item.id}>
        <S.ProductItem
          onClick={() =>
            history.push(
              generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id })
            )
          }
        >
          {item.isNew && <div className="new">NEW</div>}
          <img src={item.image} className="image" alt="" />
          <div className="card-content">
            <div className="name">{item.name}</div>
            <div className="price">{item.price.toLocaleString()}</div>
          </div>
        </S.ProductItem>
      </Col>
    ));
  }, [history, productList.data]);

  return (
    <>
      <TopWrapper titlePage="Danh sách sản phẩm" breadcrumb={BREADCRUMB} />
      <S.ProductListContainer>
        <Row gutter={16}>
          <Col md={6} xs={24}>
            <S.FilterContainer>
              <S.FilterTitle>Hãng điện thoại</S.FilterTitle>
              {renderCategoryList}
            </S.FilterContainer>
            <S.FilterContainer>
              <S.FilterTitle>Lọc theo giá</S.FilterTitle>
              <div style={{ padding: "0 8px" }}>
                <Slider
                  range
                  min={DEFAULT_PRICE_FILTER[0]}
                  max={DEFAULT_PRICE_FILTER[1]}
                  step={1000000}
                  value={priceFilter}
                  tipFormatter={(value) => value.toLocaleString()}
                  onChange={(value) => handleChangePriceFilter(value)}
                />
              </div>
            </S.FilterContainer>
          </Col>
          <Col md={18} xs={24}>
            <Row gutter={16}>
              <Col span={18}>
                <Input
                  placeholder="Tìm kiếm"
                  value={keywordFilter}
                  onChange={(e) => handleSearchKeyword(e)}
                />
              </Col>
              <Col span={6}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Sắp xếp theo"
                  allowClear
                  onChange={(value) => handleChangeSort(value)}
                >
                  <Select.Option value="asc">Giá thấp đến cao</Select.Option>
                  <Select.Option value="desc">Giá cao đến thấp</Select.Option>
                </Select>
              </Col>
            </Row>
            {(categoryFilter.length > 0 ||
              keywordFilter ||
              priceFilter[0] !== DEFAULT_PRICE_FILTER[0] ||
              priceFilter[1] !== DEFAULT_PRICE_FILTER[1] ||
              sortFilter) && (
              <Space style={{ marginTop: 16 }}>
                {categoryFilter.length > 0 && renderCategoryFilterTags}
                {keywordFilter && (
                  <Tag closable onClose={() => handleClearKeyword()}>
                    Từ khóa: {keywordFilter}
                  </Tag>
                )}
                {(priceFilter[0] !== DEFAULT_PRICE_FILTER[0] ||
                  priceFilter[1] !== DEFAULT_PRICE_FILTER[1]) && (
                  <Tag closable onClose={() => handleClearPriceFilter()}>
                    {`Giá từ: ${priceFilter[0].toLocaleString()} - ${priceFilter[1].toLocaleString()}`}
                  </Tag>
                )}
                {sortFilter && (
                  <Tag closable onClose={() => handleClearSort()}>
                    {`Sắp xếp theo ${
                      sortFilter === "asc" ? "tăng dần" : "giảm dần"
                    }`}
                  </Tag>
                )}
              </Space>
            )}
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              {renderProductList}
            </Row>
            {productList.meta.total !== productList.data.length && (
              <Row justify="center" style={{ marginTop: 16 }}>
                <Button onClick={() => handleLoadMore()}>Hiển thị thêm</Button>
              </Row>
            )}
          </Col>
        </Row>
      </S.ProductListContainer>
    </>
  );
};

export default ProductListPage;
