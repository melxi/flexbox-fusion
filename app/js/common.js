$(document).ready(function() {
  console.log('hello');
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
})