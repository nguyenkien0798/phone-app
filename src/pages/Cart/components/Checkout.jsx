import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  InputNumber,
  Row,
  Col,
  Checkbox,
  notification,
} from "antd";
import {
  DeleteOutlined,
  TagFilled,
  RightOutlined,
  ShoppingOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons";

import {
  updateCartProductAction,
  removeCartProductAction,
  setSelectedCartsAction,
} from "../../../redux/slices/cart.slice";
import { checkDiscountAction } from "../../../redux/slices/discount.slice";
import { ROUTER } from "../../../constants/router";

import * as S from "../styles";

const Checkout = ({ setCheckoutStep }) => {
  const [discountCode, setDiscountCode] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const { cartList, selectedCarts } = useSelector((state) => state.cartReducer);
  const { discountInfo } = useSelector((state) => state.discountReducer);

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
    if (!discountCode.trim()) {
      notification.warning({ message: "Vui lòng nhập mã giảm giá" });
      return;
    }
    dispatch(checkDiscountAction({ code: discountCode }));
  };

  const handleConfirmCart = () => {
    if (!selectedCarts.length) {
      notification.error({
        message: "Vui lòng chọn ít nhất 1 sản phẩm để tiếp tục đặt hàng!",
      });
    } else {
      setCheckoutStep(1);
    }
  };

  // Calculate Subtotal for selected carts
  const subtotal = selectedCarts.reduce((total, cartItem) => {
    const unitPrice = cartItem.productOption
      ? (cartItem.productOption?.price || 0) + (cartItem.product?.price || 0)
      : (cartItem.product?.price || 0);
    return total + unitPrice * cartItem.quantity;
  }, 0);

  // Discount calculation
  let discountAmount = 0;
  if (discountInfo.data.code && subtotal > 0) {
    if (discountInfo.data.discountType === "percent") {
      discountAmount = (subtotal * discountInfo.data.discountValue) / 100;
    } else {
      discountAmount = discountInfo.data.discountValue || 0;
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  if (!cartList.data.length) {
    return (
      <S.EmptyCartBox>
        <ShoppingOutlined className="empty-icon" />
        <h3>Giỏ Hàng Của Bạn Đang Trống</h3>
        <p>Hãy khám phá các thiết bị Apple chính hãng mới nhất và thêm vào giỏ hàng nhé!</p>
        <button
          className="btn-shop-now"
          onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}
        >
          <span>Khám phá sản phẩm ngay</span>
          <RightOutlined />
        </button>
      </S.EmptyCartBox>
    );
  }

  return (
    <Row gutter={[24, 24]}>
      {/* Product List Table Column */}
      <Col lg={16} xs={24}>
        <S.StepCard>
          {/* Header row */}
          <S.CartHeaderRow>
            <div className="col-check">
              <Checkbox
                onChange={handleSelectAll}
                indeterminate={
                  selectedCarts.length > 0 &&
                  selectedCarts.length !== cartList.data.length
                }
                checked={
                  cartList.data.length > 0 &&
                  selectedCarts.length === cartList.data.length
                }
              />
            </div>
            <div className="col-prod">Sản phẩm Apple ({cartList.data.length})</div>
            <div className="col-price">Đơn giá</div>
            <div className="col-qty">Số lượng</div>
            <div className="col-total">Thành tiền</div>
            <div className="col-del"></div>
          </S.CartHeaderRow>

          {/* Cart Item Cards */}
          {cartList.data.map((cartItem) => {
            const isChecked = selectedCarts.some(
              (item) => item.id === cartItem.id
            );
            const unitPrice = cartItem.productOption
              ? (cartItem.productOption?.price || 0) +
                (cartItem.product?.price || 0)
              : cartItem.product?.price || 0;
            const itemTotal = unitPrice * cartItem.quantity;

            return (
              <S.CartItemCard key={cartItem.id} $checked={isChecked}>
                <div className="col-check">
                  <Checkbox
                    checked={isChecked}
                    onChange={(e) => handleSelectCart(e, cartItem)}
                  />
                </div>

                <div className="col-prod">
                  <div className="img-box">
                    <img
                      src={cartItem.product?.image}
                      alt={cartItem.product?.name || "Product"}
                    />
                  </div>
                  <div className="prod-details">
                    <h4>{cartItem.product?.name || "Thiết bị Apple"}</h4>
                    {cartItem.productOption && (
                      <span className="opt-tag">
                        {cartItem.productOption.name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-price">
                  {unitPrice.toLocaleString("vi-VN")} ₫
                </div>

                <div className="col-qty">
                  <InputNumber
                    min={1}
                    max={10}
                    value={cartItem.quantity}
                    onChange={(val) =>
                      handleChangeQuantity(cartItem.id, val || 1)
                    }
                  />
                </div>

                <div className="col-total">
                  {itemTotal.toLocaleString("vi-VN")} ₫
                </div>

                <div className="col-del">
                  <button
                    type="button"
                    className="btn-delete"
                    title="Xóa khỏi giỏ"
                    onClick={() =>
                      dispatch(removeCartProductAction({ id: cartItem.id }))
                    }
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              </S.CartItemCard>
            );
          })}
        </S.StepCard>
      </Col>

      {/* Summary & Voucher Column */}
      <Col lg={8} xs={24}>
        <S.SummaryStickyCard>
          {/* Voucher Box */}
          <S.VoucherCard>
            <div className="voucher-title">
              <TagFilled style={{ color: "#e11d48" }} /> Mã Giảm Giá / Voucher
            </div>
            <div className="voucher-input-group">
              <input
                type="text"
                placeholder="Nhập mã khuyến mãi..."
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button type="button" onClick={handleCheckDiscount}>
                Áp dụng
              </button>
            </div>
            {discountInfo.data.code && (
              <div className="applied-voucher">
                <div className="code-info">
                  <strong>{discountInfo.data.name || discountInfo.data.code}</strong>
                  <span>Mã: {discountInfo.data.code}</span>
                </div>
                <div className="discount-amt">
                  {discountInfo.data.discountType === "percent"
                    ? `-${discountInfo.data.discountValue}%`
                    : `-${discountInfo.data.discountValue.toLocaleString()}₫`}
                </div>
              </div>
            )}
          </S.VoucherCard>

          {/* Bill Summary */}
          <S.BillSummaryCard>
            <div className="bill-title">Tóm Tắt Đơn Hàng</div>
            <div className="bill-row">
              <span>Đã chọn</span>
              <span className="val">{selectedCarts.length} sản phẩm</span>
            </div>
            <div className="bill-row">
              <span>Tạm tính</span>
              <span className="val">{subtotal.toLocaleString("vi-VN")} ₫</span>
            </div>
            <div className="bill-row discount">
              <span>Giảm giá</span>
              <span className="val">
                {discountAmount > 0
                  ? `- ${discountAmount.toLocaleString("vi-VN")} ₫`
                  : "0 ₫"}
              </span>
            </div>
            <div className="bill-row">
              <span>Phí vận chuyển</span>
              <span className="val" style={{ color: "#16a34a" }}>
                Miễn phí (Toàn quốc)
              </span>
            </div>
            <div className="bill-row total-row">
              <span>Tổng thanh toán</span>
              <span className="total-val">
                {finalTotal.toLocaleString("vi-VN")} ₫
              </span>
            </div>

            <button
              type="button"
              className="btn-next-step"
              onClick={handleConfirmCart}
            >
              <span>Tiến hành đặt hàng</span>
              <RightOutlined />
            </button>
          </S.BillSummaryCard>
        </S.SummaryStickyCard>
      </Col>
    </Row>
  );
};

export default Checkout;
