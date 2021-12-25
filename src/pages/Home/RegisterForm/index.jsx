import React from "react";
import * as S from "./styles";
import bg from '../../../assets/images/bg_registerform.jpg'

function RegisterForm() {
  return (
    <S.Section>
      <S.Register bg={bg}>
        <div className="register-content">
          <h2>ĐĂNG KÝ</h2>
          <p>Đăng ký nhận bản tin của Phone Store để cập nhật những sản phẩm mới, nhận thông tin ưu đãi 
            đặc biệt và thông tin giảm giá khác.</p>
          <div className="register-form">
            <form>
              <input placeholder="Nhập email của bạn" type="email" required />
              <button type="submit">Gửi</button>
            </form>
          </div>
        </div>
      </S.Register>
    </S.Section>
  );
}

export default RegisterForm;
