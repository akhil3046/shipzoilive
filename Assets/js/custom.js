$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $("#quick-link-btn").click(function () {
    $(".quick-links").toggleClass("active");
  });
});

//Get the button:
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#myBtn").fadeIn(200);
  } else {
    $("#myBtn").fadeOut(200);
  }
});
$("#myBtn").click(function (event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 500);
});

// Menu js Start

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("head-menu").style.top = "0";
  } else {
    document.getElementById("head-menu").style.top = "-100px";
  }
  prevScrollpos = currentScrollpos;
};

// Partner slider

$("#testimonialslider").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  nav: false,
  dots: false,
  autoplaySpeed: 1000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

// banner slider

$("#bannerslider").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  nav: false,
  dots: false,
  autoplaySpeed: 1000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Nav-Tabs Js

$("ul.tabs li").click(function () {
  var tab_id = $(this).attr("href");

  $("ul.tabs li").removeClass("current");
  $(".tab-content").removeClass("current");

  $(this).addClass("current");
  $("#" + tab_id).addClass("current");
});
