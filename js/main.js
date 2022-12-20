$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ['<img src="img/arrow-left.svg">', '<img src="img/arrow-right.svg">'],
    dots: false,
    // autoplay: true,
    startPosition: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
