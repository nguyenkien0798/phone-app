import React from 'react'
import Slide from './Slide'
import ProductListHome from './ProductListHome'
import Brand from './Brand'
import RegisterForm from './RegisterForm'

import * as S from './styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <Slide />
      <Brand />
      <ProductListHome />
      <RegisterForm />
    </S.HomeContainer>
  )
}

export default Home
