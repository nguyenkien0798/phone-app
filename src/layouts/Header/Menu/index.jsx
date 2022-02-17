import React from 'react'
import { Link } from 'react-router-dom'

import { 
  HomeOutlined,
  AppleOutlined, 
  CustomerServiceOutlined, 
  LaptopOutlined,
  DesktopOutlined, 
  MobileOutlined, 
  DollarOutlined, 
  RedoOutlined,
  FireOutlined, 
  SketchOutlined } from '@ant-design/icons'

import * as S from './styles'

const MenuTop = () => {
    const arrMenuSidebar = [
        {
            image: <MobileOutlined />,
            title: 'Điện thoại',
            endPoint: 'products'
        },
        {
            image: <AppleOutlined />,
            title: 'Apple',
            endPoint: 'products'
        },
        {
            image: <DesktopOutlined />,
            title: 'PC - Linh kiện',
            endPoint: 'products'
        },
        {
            image: <LaptopOutlined />,
            title: 'Laptop',
            endPoint: 'products'
        },
        {
            image: <HomeOutlined />,
            title: 'Hàng gia dụng',
            endPoint: 'products'
        },        
        {
            image: <CustomerServiceOutlined />,
            title: 'Phụ kiện',
            endPoint: 'products'
        },
        {
            image: <RedoOutlined />,
            title: 'Máy cũ giá rẻ',
            endPoint: 'products'
        },
        {
            image: <SketchOutlined />,
            title: 'Khuyến mãi',
            endPoint: 'products'
        },
        {
            image: <FireOutlined />,
            title: 'Sim & Thẻ',
            endPoint: 'products'
        },
        {
            image: <DollarOutlined />,
            title: 'Trả góp 0%',
            endPoint: 'products'
        }
    ]

    return (
        <S.MenuContainer>
            <S.MenuList>
            <ul>
                {
                    arrMenuSidebar.map(item => (
                        <Link key={item.title} to={`/${item.endPoint}`}>
                            <li>
                                <i>{item.image}</i>
                                <span>{item.title}</span>
                            </li>
                        </Link>
                    ))
                }

            </ul>
          </S.MenuList>
        </S.MenuContainer>
    )
}

export default MenuTop
