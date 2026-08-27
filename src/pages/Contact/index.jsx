import React from "react";
import {
  PhoneFilled,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import TopWrapper from "../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import * as S from "./styles";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <S.ContactContainer>
      <TopWrapper
        titlePage="Liên Hệ & Hỗ Trợ"
        subtitle="Tư vấn chính hãng Apple miễn phí — Hotline 1800 6601 — Hỗ trợ 8:00 – 22:00 hàng ngày"
        icon={<PhoneFilled />}
        breadcrumb={BREADCRUMB}
      />
      <S.Container>
        <S.ContactContent>
          <h2 className="section-heading">CONTACT</h2>
          <p className="section-sub-heading">Fan? Drop a note!</p>

          <S.ContactGrid>
            <S.ContactInfo>
              <p>
                <EnvironmentOutlined /> Hồ Chí Minh, Việt Nam
              </p>
              <p>
                <PhoneOutlined /> Hotline: 1800 6601
              </p>
              <p>
                <MailOutlined /> Email: support@voltstore.vn
              </p>
            </S.ContactInfo>

            <S.ContactForm onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="form-control"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                required
                className="form-control"
              />
              <button className="btn-submit" type="submit">
                SEND
              </button>
            </S.ContactForm>
          </S.ContactGrid>
        </S.ContactContent>
      </S.Container>
    </S.ContactContainer>
  );
};

export default Contact;
