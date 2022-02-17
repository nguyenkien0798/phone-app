import React from 'react'
import * as S from './styles'

import bg_sale_tet from '../../../assets/images/bg_sale_tet.png'
import bg_sale from '../../../assets/images/bg_sale.png'
import banner_samsung from '../../../assets/images/slides/banner_samsung.jpg'
import banner_xiaomi from '../../../assets/images/slides/banner_xiaomi.png'
import banner_laptop from '../../../assets/images/slides/banner_laptop.jpg'
import banner_phukien from '../../../assets/images/slides/banner_phukien.jpg'

import Carousel from 'react-bootstrap/Carousel'

const Banner = (props) => {
  return (
    <S.MainBanner>
      <Carousel fade interval={3000}>
      <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={bg_sale_tet}
            alt="Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={bg_sale}
            alt="Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src="https://lh3.googleusercontent.com/dE3XTUup8KVdpJYK7sSLH1MNk1DslyeqmU0d5Kq2cZWRXyUk3j1NgMq-z568-6wqWCt03QaA3wiDQM99JWWQR-FbaG0Q6ZBE=w1920-rw"
            alt="Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={banner_samsung}
            alt="Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={banner_laptop}
            alt="Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src={banner_phukien}
            alt="Slide"
          />
        </Carousel.Item>
      </Carousel>
    </S.MainBanner>
  )
}

export default Banner







