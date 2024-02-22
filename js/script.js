$(document).ready(function () {
  var swiper = new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".solutions-swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // accordion
  $(".accordion-header").click(function () {
    $(this).toggleClass("active").next(".accordion-content").slideToggle().parent().siblings().find(".accordion-content").slideUp().prev().removeClass("active");
  });

  // modal
  $('.open-modal').click(function () {
    $('.parent-modal').addClass('show');

  })
  $('.modal-close').click(function () {
    $('.parent-modal').removeClass('show');

  })
  $('.send-data').click(function () {
    $('.parent-modal').removeClass('show');
    $('.parent-moda-two').addClass('show');

  })
  $('.modal__close-two').click(function () {
    $('.parent-moda-two').removeClass('show');

  })

  $('.open-menu').click(function () {
    $('.nav').addClass('active')
  })
  $('.close-btn').click(function () {
    $('.nav').removeClass('active')
  })

});