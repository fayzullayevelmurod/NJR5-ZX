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
    loop: true,
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
    loop: true,
    breakpoints: {
      800: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }
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

  $('.modal__close-two').click(function () {
    $('.parent-moda-two').removeClass('show');

  })
  $('.modal').click(function (e) {
    if (e.target === this) {
      $('.parent-modal').removeClass('show');
      $('.parent-moda-two').removeClass('show');
    }
  });

  // menu
  $('.open-menu').click(function () {
    $('.nav').addClass('active')
  })
  $('.close-btn').click(function () {
    $('.nav').removeClass('active')
  })

  // form
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  $("#submit").click(function (e) {
    e.preventDefault();

    var formFields = ['name', 'phone', 'email', 'adress'];
    var clickTime = new Date().getTime();
    var allFieldsFilled = true;

    for (var i = 0; i < formFields.length; i++) {
      var field = $("#" + formFields[i]);
      var value = field.val();

      if (value.length == "") {
        field.addClass('danger');
        allFieldsFilled = false;
      } else {
        field.removeClass('danger');
      }
    }

    // Email uchun validatsiya
    var emailField = $("#email");
    var emailValue = emailField.val();
    if (!validateEmail(emailValue)) {
      emailField.addClass('danger');
      allFieldsFilled = false;
    } else {
      emailField.removeClass('danger');
    }

    if (allFieldsFilled) {
      var currentTime = new Date().getTime();
      if (currentTime - clickTime < 1000) {
        $('.parent-modal').removeClass('show');
        $('.parent-moda-two').addClass('show');
        $('input').val('');
        $('textarea').val('');
      }
    }
  });
});