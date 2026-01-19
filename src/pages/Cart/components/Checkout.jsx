import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  InputNumber,
  Button,
  Row,
  Col,
  Descriptions,
  Input,
  Image,
  Space,
  Checkbox,
  notification,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import {
  updateCartProductAction,
  removeCartProductAction,
  setSelectedCartsAction,
  checkDiscountAction,
} from "../../../redux/actions";

import * as S from "../styles";

const Checkout = ({ setCheckoutStep }) => {
  const [discountCode, setDiscountCode] = useState("");
  const dispatch = useDispatch();

  const { cartList, selectedCarts } = useSelector((state) => state.cartReducer);
  const { discountInfo } = useSelector((state) => state.discountReducer);

  let totalPrice = 0;

  const handleChangeQuantity = (id, quantity) => {
    dispatch(updateCartProductAction({ data: { id, quantity } }));
  };

  const handleSelectCart = (e, item) => {
    const { checked } = e.target;
    if (checked) {
      dispatch(setSelectedCartsAction([...selectedCarts, item]));
    } else {
      const newSelectedCarts = selectedCarts.filter(
        (selectedCart) => selectedCart.id !== item.id
      );
      dispatch(setSelectedCartsAction(newSelectedCarts));
    }
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    if (checked) {
      dispatch(setSelectedCartsAction([...cartList.data]));
    } else {
      dispatch(setSelectedCartsAction([]));
    }
  };

  const handleCheckDiscount = () => {
    dispatch(checkDiscountAction({ code: discountCode }));
  };

  const handleConfirmCart = () => {
    if (!selectedCarts.length) {
      notification.error({
        message: "Bạn chưa chọn sản phẩm để mua!",
      });
    } else {
      setCheckoutStep(1);
    }
  };

  const renderCartList = () => {
    if (!cartList.data.length) {
      return <Card size="small">Giỏ hàng trống</Card>;
    }
    return cartList.data.map((cartItem) => {
      const isChecked =
        selectedCarts.findIndex(
          (selectedCart) => selectedCart.id === cartItem.id
        ) !== -1;
      const unitPrice = cartItem.productOption
        ? (cartItem.productOption?.price || 0) + (cartItem.product?.price || 0)
        : (cartItem.product?.price || 0);
      const cartItemPrice = unitPrice * cartItem.quantity;
      totalPrice += isChecked ? cartItemPrice : 0;
      return (
        <Card key={cartItem.id} size="small" style={{ marginBottom: 8 }}>
          <Row align="middle">
            <Col span={1}>
              <Checkbox
                onChange={(e) => handleSelectCart(e, cartItem)}
                checked={isChecked}
              />
            </Col>
            <Col span={10}>
              <Space size={16}>
                <Image
                  src={cartItem.product?.image}
                  alt={cartItem.product?.name || 'Sản phẩm'}
                  width={100}
                  height={100}
                />
                <div>
                  <h3>{cartItem.product?.name || 'Sản phẩm không tồn tại'}</h3>
                  {cartItem.productOption && (
                    <h4>{cartItem.productOption.name}</h4>
                  )}
                </div>
              </Space>
            </Col>
            <Col span={4}>
              <span>{unitPrice?.toLocaleString() || 0}₫</span>
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                value={cartItem.quantity}
                onChange={(value) => handleChangeQuantity(cartItem.id, value)}
              />
            </Col>
            <Col span={4}>
              <span>{cartItemPrice?.toLocaleString() || 0}₫</span>
            </Col>
            <Col span={1}>
              <Button
                danger
                type="text"
                onClick={() =>
                  dispatch(removeCartProductAction({ id: cartItem.id }))
                }
                icon={<DeleteOutlined />}
              ></Button>
            </Col>
          </Row>
        </Card>
      );
    });
  };

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Card size="small" style={{ marginBottom: 16 }}>
          <Row align="middle">
            <Col span={1}>
              <Checkbox
                onChange={(e) => handleSelectAll(e)}
                indeterminate={
                  selectedCarts.length > 0 &&
                  selectedCarts.length !== cartList.data.length
                }
                checked={selectedCarts.length === cartList.data.length}
                disabled={!cartList.data.length}
              />
            </Col>
            <Col span={10}>
              <h5>Tên sản phẩm</h5>
            </Col>
            <Col span={4}>
              <h5>Đơn giá</h5>
            </Col>
            <Col span={4}>
              <h5>Số lượng</h5>
            </Col>
            <Col span={4}>
              <h5>Thành tiền</h5>
            </Col>
            <Col span={1}></Col>
          </Row>
        </Card>
        {renderCartList()}
      </Col>
      <Col span={8}>
        <S.CheckoutInfoWrapper>
          <Card size="small">
            <h3>Mã giảm giá</h3>
            <Input.Group compact>
              <Input
                style={{ width: "calc(100% - 100px)" }}
                placeholder="Mã giảm giá"
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <Button
                type="primary"
                style={{ width: 100 }}
                onClick={() => handleCheckDiscount()}
              >
                Xác nhận
              </Button>
            </Input.Group>
            {discountInfo.data.code && (
              <S.DiscountCard>
                <S.DiscountInfo>
                  <p>{discountInfo.data.name}</p>
                  <span>{discountInfo.data.code}</span>
                </S.DiscountInfo>
                <S.DiscountValue>
                  {discountInfo.data.discountType === "percent"
                    ? `${discountInfo.data.discountValue}%`
                    : `${discountInfo.data.discountValue.toLocaleString()}₫`}
                </S.DiscountValue>
              </S.DiscountCard>
            )}
          </Card>
          <Card size="small" style={{ margin: "16px 0" }}>
            <Descriptions size="small">
              <Descriptions.Item label="Tạp tính" span={3}>
                {totalPrice.toLocaleString()}₫
              </Descriptions.Item>
              <Descriptions.Item label="Giảm giá" span={3}>
                {discountInfo.data.code
                  ? `- ${(
                      totalPrice *
                      (discountInfo.data.discountValue / 100)
                    ).toLocaleString()}₫`
                  : "0₫"}
              </Descriptions.Item>
              <Descriptions.Item label="Tổng tiền" span={3}>
                {(
                  totalPrice -
                  (totalPrice * (discountInfo.data.discountValue / 100) || 0)
                ).toLocaleString()}
                ₫
              </Descriptions.Item>
            </Descriptions>
          </Card>
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={() => handleConfirmCart()}
          >
            Tiếp tục
          </Button>
        </S.CheckoutInfoWrapper>
      </Col>
    </Row>
  );
};

export default Checkout;
