import React from 'react'
import { Link } from 'react-router-dom'

import { 
  AppleOutlined, 
  LaptopOutlined,
  MobileOutlined, 
  DollarOutlined, 
  RedoOutlined,
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
  TabletOutlined,
  ClockCircleOutlined,
  ThunderboltOutlined
} from '@ant-design/icons'

import * as S from './styles'

const MenuTop = () => {
    const arrMenuSidebar = [
        {
            image: <MobileOutlined />,
            title: 'iPhone',
            endPoint: 'products?categoryId=1'
        },
        {
            image: <LaptopOutlined />,
            title: 'MacBook & Mac',
            endPoint: 'products?categoryId=2'
        },
        {
            image: <TabletOutlined />,
            title: 'iPad',
            endPoint: 'products?categoryId=3'
        },
        {
            image: <ClockCircleOutlined />,
            title: 'Apple Watch',
            endPoint: 'products?categoryId=4'
        },
        {
            image: <CustomerServiceOutlined />,
            title: 'AirPods & Âm Thanh',
            endPoint: 'products?categoryId=5'
        },        
        {
            image: <AppleOutlined />,
            title: 'Phụ Kiện Apple',
            endPoint: 'products?categoryId=6'
        },
        {
            image: <RedoOutlined />,
            title: 'Apple Like New',
            endPoint: 'products?q=iPhone'
        },
        {
            image: <SafetyCertificateOutlined />,
            title: 'Apple Care+',
            endPoint: 'products'
        },
        {
            image: <ThunderboltOutlined />,
            title: 'Thu Cũ Đổi Mới',
            endPoint: 'products'
        },
        {
            image: <DollarOutlined />,
            title: 'Trả Góp 0%',
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
