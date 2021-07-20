$('.sliderB').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#arrow_prev3'),
    nextArrow: $('#arrow_next3'),
    responsive:[{
      breakpoint:520,
      settings: {
        slidesToShow:3,
        dots:false
      },
    }]
  });