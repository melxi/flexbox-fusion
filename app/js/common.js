$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    pagination: {
    	el: '.swiper-pagination',
    	clickable: true
    },
    effect: 'fade',
    loop: true
  })

  var mySwiper = new Swiper ('.swiper-container1', {
    slidesPerView: 1,
    pagination: {
    	el: '.swiper-pagination1',
    	clickable: true
    },
    loop: true
  })
});
