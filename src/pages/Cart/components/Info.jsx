import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, Button, Row, Col, Input, Select } from "antd";

import {
  setOrderInfoAction,
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
} from "../../../redux/actions";

const Info = ({ setCheckoutStep }) => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [wardOptions, setWardOptions] = useState([]);

  const [infoForm] = Form.useForm();

  const dispatch = useDispatch();

  const { cityList, districtList, wardList } = useSelector(
    (state) => state.commonReducer
  );
  const { selectedCarts } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(getCityListAction());
    dispatch(getDistrictListAction());
    dispatch(getWardListAction());
  }, []);

  const handleConfirmInfo = (values) => {
    const city = cityList.data.find((city) => city.code === values.city);
    const district = districtOptions.find(
      (district) => district.code === values.district
    );
    const ward = wardOptions.find((ward) => ward.code === values.ward);
    const newValues = {
      ...values,
      city: city.name,
      district: district.name,
      ward: ward.name,
    };
    console.log(
      "🚀 ~ file: Info.jsx ~ line 38 ~ handleConfirmInfo ~ newValues",
      newValues
    );

    dispatch(setOrderInfoAction(newValues));
    setCheckoutStep(2);
  };

  const renderSelectedCarts = () => {
    return selectedCarts.map((cartItem) => {
      return (
        <Row key={cartItem.id} justify="space-between">
          <p key={cartItem.id}>
            {cartItem.product?.name} x{cartItem.quantity}
          </p>
          <p>
            {(cartItem.product?.price * cartItem.quantity).toLocaleString()}₫
          </p>
        </Row>
      );
    });
  };

  const renderCityOption = () => {
    return cityList.data.map((city) => {
      return (
        <Select.Option key={city.id} value={city.code}>
          {city.name}
        </Select.Option>
      );
    });
  };

  const renderDistrictOption = () => {
    return districtOptions.map((district) => {
      return (
        <Select.Option key={district.id} value={district.code}>
          {district.name}
        </Select.Option>
      );
    });
  };

  const renderWardOption = () => {
    return wardOptions.map((ward) => {
      return (
        <Select.Option key={ward.id} value={ward.code}>
          {ward.name}
        </Select.Option>
      );
    });
  };

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Card size="small">
          <Form
            form={infoForm}
            name="infoForm"
            layout="vertical"
            onFinish={(values) => handleConfirmInfo(values)}
          >
            <Form.Item
              label="Họ và tên"
              name="fullName"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={8}>
                <Form.Item
                  label="Tỉnh/Thành"
                  name="city"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select
                    onChange={(value) => {
                      console.log(
                        "🚀 ~ file: Info.jsx ~ line 133 ~ Info ~ value",
                        value
                      );
                      const newDistrictList = districtList.data.filter(
                        (district) => district.parentcode === value
                      );
                      setDistrictOptions(newDistrictList);
                    }}
                  >
                    {renderCityOption()}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Quận/Huyện"
                  name="district"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select
                    onChange={(value) => {
                      const newWardList = wardList.data.filter(
                        (ward) => ward.parentcode === value
                      );
                      setWardOptions(newWardList);
                    }}
                  >
                    {renderDistrictOption()}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Phường/Xã"
                  name="ward"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select>{renderWardOption()}</Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Ghi chú" name="note">
              <Input.TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col span={8}>
        <Card size="small" style={{ marginBottom: 16 }}>
          {renderSelectedCarts()}
          <hr />
          <Row justify="space-between">
            <p>Tạm tính</p>
            <p>
              {selectedCarts
                .reduce((total, item) => {
                  return total + item.product?.price * item.quantity;
                }, 0)
                .toLocaleString()}
              ₫
            </p>
          </Row>
          <Row justify="space-between">
            <p>Giảm giá</p>
            <p>0₫</p>
          </Row>
          <Row justify="space-between">
            <p>Tổng tiền</p>
            <p>
              {selectedCarts
                .reduce((total, item) => {
                  return total + item.product?.price * item.quantity;
                }, 0)
                .toLocaleString()}
              ₫
            </p>
          </Row>
        </Card>
        <Button
          onClick={() => setCheckoutStep(0)}
          style={{ width: "100%", marginBottom: 8 }}
        >
          Trở lại
        </Button>
        <Button
          type="primary"
          style={{ width: "100%" }}
          onClick={() => infoForm.submit()}
        >
          Tiếp tục
        </Button>
      </Col>
    </Row>
  );
};

export default Info;
