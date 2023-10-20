import React, {useEffect, useState} from 'react';
import HeroSlider from "react-slick";
import axios from "axios";

// compoents
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    //async
    const requestNowPlayingImages = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    requestNowPlayingImages();
  }, []);

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
    prevArrow: <PrevArrow />,
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
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
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
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
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

