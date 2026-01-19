import React from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import * as S from './styles'

import bg_sale_tet from '../../../assets/images/bg_sale_tet.png'
import bg_sale from '../../../assets/images/bg_sale.png'
import banner_samsung from '../../../assets/images/slides/banner_samsung.jpg'
import banner_xiaomi from '../../../assets/images/slides/banner_xiaomi.png'
import banner_laptop from '../../../assets/images/slides/banner_laptop.jpg'
import banner_phukien from '../../../assets/images/slides/banner_phukien.jpg'

const PrevArrow = ({ onClick }) => (
  <div className="carousel-arrow carousel-prev" onClick={onClick}>
    <LeftOutlined />
  </div>
)

const NextArrow = ({ onClick }) => (
  <div className="carousel-arrow carousel-next" onClick={onClick}>
    <RightOutlined />
  </div>
)

const Banner = (props) => {
  return (
    <S.MainBanner>
      <Carousel 
        autoplay 
        autoplaySpeed={3000} 
        effect="fade"
        arrows
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        <div>
          <img
            className="img-banner"
            src={bg_sale_tet}
            alt="Slide"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
        <div>
          <img
            className="img-banner"
            src={bg_sale}
            alt="Slide"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
        <div>
          <img
            className="img-banner"
            src="https://lh3.googleusercontent.com/dE3XTUup8KVdpJYK7sSLH1MNk1DslyeqmU0d5Kq2cZWRXyUk3j1NgMq-z568-6wqWCt03QaA3wiDQM99JWWQR-FbaG0Q6ZBE=w1920-rw"
            alt="Slide"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
        <div>
          <img
            className="img-banner"
            src={banner_samsung}
            alt="Slide"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
        <div>
          <img
            className="img-banner"
            src={banner_laptop}
            alt="Slide"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
        <div>
          <img
            className="img-banner"
            src={banner_phukien}
            alt="Slide"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </Carousel>
    </S.MainBanner>
  )
}

export default Banner







