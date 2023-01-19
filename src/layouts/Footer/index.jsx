import * as Icons from "@ant-design/icons";
import * as S from "./styles";

function Footer() {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterItem>
          <S.FooterTitle>GIỚI THIỆU</S.FooterTitle>
          <p className="footer-desc">
            Phone Store trang mua sắm trực tuyến của các thương hiệu điện thoại, giúp bạn tiếp cận những công nghệ
             mới nhất.
          </p>          
          <div className="footer-social">
            <a href="/">
              <Icons.FacebookFilled />
            </a>
            <a href="/">
              <Icons.GoogleOutlined />
            </a>
            <a href="/">
              <Icons.GithubOutlined />
            </a>
            <a href="/">
              <Icons.YoutubeFilled />
            </a>
            <a href="/">
              <Icons.TwitterOutlined />
            </a>
          </div>
        </S.FooterItem>
        <S.FooterItem>
          <S.FooterTitle>Pháp lý & câu hỏi</S.FooterTitle>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/" className="footer-line">
                tìm kiếm
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-line">
                giới thiệu
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-line">
                chính sách đổi trả
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-line">
                chính sách bảo mật
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-line">
                điều khoản dịch vụ
              </a>
            </li>
          </ul>
        </S.FooterItem>
        <S.FooterItem>
          <S.FooterTitle>THÔNG TIN LIÊN HỆ</S.FooterTitle>
          <ul className="footer-list">
            <li className="footer-item">
              <span className="footer-line">Địa chỉ: </span>
              72 Nguyễn Văn Thoại, Ngũ Hành Sơn, Đà Nẵng
            </li>
            <li className="footer-item">
              <span className="footer-line">Điện thoại:</span> 1900.636.099
            </li>
            <li className="footer-item">
              <span className="footer-line">Fax:</span> 1900.636.099
            </li>
            <li className="footer-item">
              <span className="footer-line">Hộp thư:</span>{" "}
              kiennguyen0798@gmail.com
            </li>
          </ul>
        </S.FooterItem>
        <S.FooterItem>
          <S.FooterTitle>KÊNH YOUTUBE</S.FooterTitle>
          <div className="footer-video">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/FT3ODSg1GFE"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </S.FooterItem>
      </S.FooterContainer>
      <S.CopyRight>
        <span>Copyright © 2021 Phone Store. </span>
        <a href="/">
          Code by Nguyễn Đình Kiên
        </a>
      </S.CopyRight>
    </S.Footer>
  );
}

export default Footer;
