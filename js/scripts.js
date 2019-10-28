$().ready(function(){
  $('.slick__block').slick({
    prevArrow: $('.slick__prewarrow'),
    nextArrow: $('.slick__nextarrow'),
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 3,
    dots: true
  });
});