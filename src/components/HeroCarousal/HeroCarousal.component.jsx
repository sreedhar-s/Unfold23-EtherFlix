import React, {useEffect, useState} from 'react';
import HeroSlider from "react-slick";
import axios from "axios";

// compoents
import { NextArrow, PrevArrow} from './Arrows.componet';

const HeroCarousel = () => {

  const images = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg"
  ]

  const settingsLG = {
    dots:true,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-58 md:h-72 py-3">
              <img
                src={image}
                alt="testing"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-1 py-2 m-3">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;

