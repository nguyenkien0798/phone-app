import React, { useState } from "react";
import { notification } from "antd";
import {
  PhoneFilled,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import TopWrapper from "../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import * as S from "./styles";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notification.success({
      message: "Gửi liên hệ thành công",
      description: "Volt Store sẽ phản hồi bạn trong thời gian sớm nhất.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <S.ContactContainer>
      <TopWrapper
        titlePage="Liên Hệ & Hỗ Trợ"
        subtitle="Tư vấn chính hãng Apple miễn phí — Hotline 1800 6601 — Hỗ trợ 8:00 – 22:00 hàng ngày"
        icon={<PhoneFilled />}
        breadcrumb={BREADCRUMB}
        height={260}
      />

      <S.Container>
        <S.Intro>
          <span className="eyebrow">Volt Store Support</span>
          <h2>Chúng tôi luôn sẵn sàng hỗ trợ bạn</h2>
          <p>
            Liên hệ để được tư vấn sản phẩm Apple chính hãng, kiểm tra bảo hành
            hoặc hỗ trợ đơn hàng nhanh chóng.
          </p>
        </S.Intro>

        <S.ContactGrid>
          <S.InfoColumn>
            <S.InfoCard $tone="linear-gradient(135deg, #ff6a55 0%, #d92d35 100%)">
              <div className="icon-box">
                <EnvironmentOutlined />
              </div>
              <div className="body">
                <h4>Địa chỉ</h4>
                <p>390 Phạm Xuân Ẩn, Phường Hòa Xuân, TP.Đà Nẵng</p>
              </div>
            </S.InfoCard>

            <S.InfoCard $tone="linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)">
              <div className="icon-box">
                <PhoneOutlined />
              </div>
              <div className="body">
                <h4>Hotline</h4>
                <a href="tel:18006601">1800 6601</a>
              </div>
            </S.InfoCard>

            <S.InfoCard $tone="linear-gradient(135deg, #34d399 0%, #059669 100%)">
              <div className="icon-box">
                <MailOutlined />
              </div>
              <div className="body">
                <h4>Email</h4>
                <a href="mailto:support@voltstore.vn">support@voltstore.vn</a>
              </div>
            </S.InfoCard>

            <S.HoursCard>
              <h4>
                <ClockCircleOutlined style={{ marginRight: 8 }} />
                Giờ làm việc
              </h4>
              <ul>
                <li>
                  <span>Thứ 2 – Thứ 6</span>
                  <strong>8:00 – 22:00</strong>
                </li>
                <li>
                  <span>Thứ 7 – Chủ nhật</span>
                  <strong>9:00 – 21:00</strong>
                </li>
                <li>
                  <span>Hỗ trợ online</span>
                  <strong>Cả tuần</strong>
                </li>
              </ul>
            </S.HoursCard>
          </S.InfoColumn>

          <S.FormCard onSubmit={handleSubmit}>
            <div className="form-head">
              <h3>Gửi tin nhắn cho chúng tôi</h3>
              <p>Điền form bên dưới, đội ngũ Volt Store sẽ liên hệ lại sớm.</p>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="contact-name">Họ và tên</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Nguyễn Văn A"
                  required
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="contact-message">Nội dung</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Bạn cần tư vấn sản phẩm hoặc hỗ trợ gì?"
                required
                className="form-control"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button className="btn-submit" type="submit">
              Gửi liên hệ <SendOutlined style={{ marginLeft: 6 }} />
            </button>
          </S.FormCard>
        </S.ContactGrid>
      </S.Container>
    </S.ContactContainer>
  );
};

export default Contact;
