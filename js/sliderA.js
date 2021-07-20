$('.sliderA').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('#arrow_prev'),
    nextArrow: $('#arrow_next'),
    responsive:[{
      breakpoint:768,
      settings: {
        slidesToShow:2,
        dots:false
      }
    },{
      breakpoint:520,
      settings: {
        slidesToShow:1,
        dots:false
      },
    }]
  });