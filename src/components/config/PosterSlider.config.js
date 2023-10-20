const PosterCarouselSettings = {
  infinity: false,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 4,
  InitialSlide: 0,
  responsive: [
    {
      breakpoints: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoints: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        InitialSlide: 2,
      },
    },
    {
      breakpoints: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default PosterCarouselSettings;
