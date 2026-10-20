import React, { useState } from "react";
import { notification } from "antd";
import { SendOutlined, MailOutlined } from "@ant-design/icons";
import { createNewsletterApi } from "../../../services/contact.service";
import * as S from "./styles";

function RegisterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await createNewsletterApi({ email: email.trim().toLowerCase() });
      notification.success({
        message: "Đăng ký thành công!",
        description: `Cảm ơn bạn. Chúng tôi sẽ gửi các ưu đãi mới nhất tới ${email}`,
      });
      setEmail("");
    } catch (error) {
      notification.error({ message: "Đăng ký nhận tin không thành công" });
    }
  };

  return (
    <S.Section>
      <S.Register>
        <div className="register-content">
          <span className="badge">
            <MailOutlined /> Đăng Ký Nhận Bản Tin
          </span>
          <h2>Nhận Ưu Đãi Độc Quyền Đến 30%</h2>
          <p>
            Đăng ký để không bỏ lỡ các đợt Flash Sale siêu khủng, ra mắt sản phẩm mới
            và voucher mua hàng dành riêng cho thành viên thân thiết.
          </p>
          <div className="register-form">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Nhập địa chỉ email của bạn..."
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">
                Đăng ký <SendOutlined />
              </button>
            </form>
          </div>
        </div>
      </S.Register>
    </S.Section>
  );
}

export default RegisterForm;
