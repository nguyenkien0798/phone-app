import React from 'react'
import Slide from './Slide'
import ProductListHome from './ProductListHome'
import Brand from './Brand'

import * as S from './styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <Slide />
      <ProductListHome />
      <Brand />
    </S.HomeContainer>
  )
}

export default Home
