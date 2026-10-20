import React from 'react'

import Toolbar from '../Header/Toolbar/Toolbar'
import MenuTop from './Menu'

import * as S from './styles'


const Header = () => {
  return (
    <S.Header>
      <Toolbar />
      <MenuTop />
    </S.Header>
  )
}

export default Header
