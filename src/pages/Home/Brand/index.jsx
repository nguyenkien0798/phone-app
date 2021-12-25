import React, { useEffect } from "react";
import { useHistory } from "react-router";

import apple from '../../../assets/images/brand/apple.png'
import samsung from '../../../assets/images/brand/samsung.png'
import xiaomi from '../../../assets/images/brand/xiaomi.png'


import * as S from "./styles";

function CategoryHome() {
  const history = useHistory();

  const categoryList = [
    {
      image: apple,
      tag: "Bộ sưu tập",
      category: "Apple",
      path: "/products",
    },
    {
      image: samsung,
      tag: "Bộ sưu tập",
      category: "Samsung",
      path: "/products",
    },
    {
      image: xiaomi,
      tag: "Bộ sưu tập",
      category: "Xiaomi",
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
          <img src={category.image} alt="" />
          <div className="category-content">
            <span>{category.tag}</span>
            <h2>{category.category}</h2>
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
