import React, { useEffect } from "react";
import { useHistory } from "react-router";

import logo_apple from '../../../assets/images/brand/logo_apple.png'
import logo_samsung from '../../../assets/images/brand/logo_samsung.png'
import logo_xiaomi from '../../../assets/images/brand/logo_xiaomi.png'
import logo_laptop from '../../../assets/images/brand/logo_laptop.png'
import logo_dienthoai from '../../../assets/images/brand/logo_dienthoai.png'
import logo_giadung from '../../../assets/images/brand/logo_giadung.png'
import logo_maycu from '../../../assets/images/brand/logo_maycu.png'
import logo_tablet from '../../../assets/images/brand/logo_tablet.png'
import logo_smartwatch from '../../../assets/images/brand/logo_smartwatch.png'
import logo_donghothoitrang from '../../../assets/images/brand/logo_donghothoitrang.png'
import logo_pc from '../../../assets/images/brand/logo_pc.png'
import logo_mayin from '../../../assets/images/brand/logo_mayin.png'

import * as S from "./styles";

function CategoryHome() {
  const history = useHistory();

  const categoryList = [
    {
      image: logo_dienthoai,
      title: "Điện thoại",
      path: "/products",
    },
    {
      image: logo_laptop,
      title: "Laptop",
      path: "/products",
    },
    {
      image: logo_apple,
      title: "Apple",
      path: "/products",
    },
    {
      image: logo_samsung,
      title: "Samsung",
      path: "/products",
    },
    {
      image: logo_giadung,
      title: "Hàng gia dụng",
      path: "/products",
    },
    {
      image: logo_xiaomi,
      title: "Xiaomi",
      path: "/products",
    },
    {
      image: logo_maycu,
      title: "Máy cũ",
      path: "/products",
    },
    {
      image: logo_tablet,
      title: "Máy tính bảng",
      path: "/products",
    },
    {
      image: logo_smartwatch,
      title: "Đồng hồ thông minh",
      path: "/products",
    },
    {
      image: logo_donghothoitrang,
      title: "Đồng hồ thời trang",
      path: "/products",
    },
    {
      image: logo_pc,
      title: "Máy tính để bàn",
      path: "/products",
    },
    {
      image: logo_mayin,
      title: "Máy in",
      path: "/products",
    },
  ];

  useEffect(() => {
    //preload image
    categoryList.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);


  function renderCategory() {
    return categoryList.map((category, index) => {
      return (
        <S.CategoryItem
          key={index}
          onClick={() => history.push(category.path)}
        >
          <div className="category-content">
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="category-title">{category.title}</div>
          </div>
        </S.CategoryItem>
      );
    });
  }
  return (
    <S.Category>
      <S.CategoryList>{renderCategory()}</S.CategoryList>
    </S.Category>
  );
}

export default CategoryHome;
