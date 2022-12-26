$(function () {
  $('.services-carousel').owlCarousel({
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

  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<img src="img/arrow-left.svg">', '<img src="img/arrow-right.svg">'],
    dots: false,
    // autoplay: true,
    // startPosition: 1,
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

  $('ul.tabs__caption').on('click', 'li:not(.active)', function (e) {
      e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('ul.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
