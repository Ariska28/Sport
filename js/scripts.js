$().ready(function(){
  $('.slick__block').slick({
    prevArrow: $('.slick__prewarrow'),
    nextArrow: $('.slick__nextarrow'),
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1500, 
        settings: {
          slidesToShow: 2,
          dots: true,
          centerPadding: '0px',
          infinite:true,
          centerMode: true,
        }
      },
      {
        breakpoint: 1000, 
        settings: {
          slidesToShow: 1,
          dots: true,
          centerPadding: '0px',
          centerMode: true,
          infinite:true,
        }
      }
    ]
  });
});

