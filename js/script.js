$(document).ready(function () {
  var swiper = new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
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
    document.body.style.overflow = 'hidden';
  })
  $('.modal-close').click(function () {
    $('.parent-modal').removeClass('show');
    document.body.style.overflow = 'auto';
  })
  $('.send-data').click(function () {
    $('.parent-modal').removeClass('show');
    $('.parent-moda-two').addClass('show');
    document.body.style.overflow = 'hidden';
  })
  $('.modal__close-two').click(function () {
    $('.parent-moda-two').removeClass('show');
    document.body.style.overflow = 'auto';
  })
});