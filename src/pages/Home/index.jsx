import React from 'react'
import Slide from './Slide'
import ProductListHome from './ProductListHome'
import Brand from './Brand'
import RegisterForm from './RegisterForm'
import GalleryHome from './Gallery'

import * as S from './styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <Slide />
      <ProductListHome />
      <RegisterForm />
      <Brand />
      <GalleryHome />
    </S.HomeContainer>
  )
}

export default Home
