import React from 'react'
import Slider  from 'react-slick'

import slide1 from '../../../assets/images/slides/slide1.png'
import slide2 from '../../../assets/images/slides/slide2.jpg'
import slide3 from '../../../assets/images/slides/slide3.jpg'
import slide4 from '../../../assets/images/slides/slide4.jpg'
import slide5 from '../../../assets/images/slides/slide5.jpg'
import slide6 from '../../../assets/images/slides/slide6.jpg'

import * as S from './styles'

function Slide() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <S.Slide>
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="SLIDER" />
        </div>
        <div>
          <img src={slide2} alt="SLIDER" />
        </div>
        <div>
          <img src={slide3} alt="SLIDER" />
        </div>
        <div>
          <img src={slide4} alt="SLIDER" />
        </div>
        <div>
          <img src={slide5} alt="SLIDER" />
        </div>
        <div>
          <img src={slide6} alt="SLIDER" />
        </div>
      </Slider>
    </S.Slide>
  );
}

export default Slide
