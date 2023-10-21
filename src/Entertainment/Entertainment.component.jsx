import React from "react";
import Slider from "react-slick";

//images
import Entertainmentcard1 from "../assets/Entertainmentcard1.jpeg";
import Entertainmentcard2 from "../assets/Entertainmentcard2.jpeg";
import Entertainmentcard3 from "../assets/Entertainmentcard3.jpeg";
import Entertainmentcard4 from "../assets/Entertainmentcard4.jpeg";


const EntertainmentCard = (props) => {
    return (
        <>
          <div className="w-full h-38 px-2 mb-2">
              <img className="w-full h-full rounded-xl" src={props.src} alt="Entertainment" />
          </div>
        </>
    );
};

const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
        Entertainmentcard1,
        Entertainmentcard2,
        Entertainmentcard3,
        Entertainmentcard4
    ];

    const settings = {
        Infinity:false,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:4,
        responsive: [
            {
                breakpoints:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:2,
                    Infinity:true,
                },    
            },
            {
                breakpoints:768,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    InitialSlide:1,
                },    
            },
            {
                breakpoints:480,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                },    
            }
        ],    
    }

    return (
      <>
        <Slider {...settings}>
            {EntertainmentImage.map((image) => (
              <EntertainmentCard src={image} />
            ))}
        </Slider>
      </>
    );
};

export default EntertainmentCardSlider;