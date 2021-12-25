import React, { useEffect } from "react";

import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpg";

import * as S from "./styles";

function GalleryHome() {
  const galleryList = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];
  useEffect(() => {
    //preload image
    galleryList.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  function renderGallery() {
    return galleryList.map((image, index) => (
      <S.GalleryItem key={index}>
        <figure>
          <img src={image} alt="" />
        </figure>
      </S.GalleryItem>
    ));
  }

  return (
    <>
      <S.GalleryTitle>        
        <h3>Khách hàng và Phone Store</h3>        
      </S.GalleryTitle>
      <S.GalleryList>      
        {renderGallery()}
      </S.GalleryList>
    </>
  );
}

export default GalleryHome;
