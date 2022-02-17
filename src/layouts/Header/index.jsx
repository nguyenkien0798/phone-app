import React from 'react'

import Toolbar from '../Header/Toolbar/Toolbar'
import Menu from './Menu'

import * as S from './styles'


const Header = () => {
  return (
    <S.Header>
      <Toolbar />
      <Menu />
    </S.Header>
  )
}

export default Header
