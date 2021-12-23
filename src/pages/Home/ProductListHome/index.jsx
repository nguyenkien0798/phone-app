import React, { useEffect, useState, useMemo } from "react";
import { useHistory, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Row,
  Col
} from "antd";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";

import { PAGE_SIZE } from "../../../constants/pagination";
import { ROUTER } from "../../../constants/router"

import * as S from "./styles";

const ProductListHome = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductListAction({ limit: PAGE_SIZE.USER_PRDUCT_HOME, page: 1 }));
    dispatch(getCategoryListAction());
  }, []);

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
          <img src={item.image} className="image" alt="Điện thoại" />
          <div className="card-content">
            <div className="name">{item.name}</div>
            <div className="price">{item.price.toLocaleString()}</div>
          </div>
        </S.ProductItem>
      </Col>
    ));
  }, [history, productList.data]);

  return (
    <S.ProductContainer>
      <S.ProductTitle>        
        <h3>Sản phẩm của shop</h3>        
      </S.ProductTitle>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        {renderProductList}
      </Row>
      {productList.meta.total !== productList.data.length && (
        <Row justify="center" style={{ marginTop: 16 }}>
          <Button style={{marginBottom: 16}} onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}>Hiển thị thêm</Button>
        </Row>
      )}
    </S.ProductContainer>
  )
}

export default ProductListHome
