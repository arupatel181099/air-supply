$('.main-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

// featured services section
$('.service-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  cssEase: 'linear',
  autoplay: true,
  arrows: true,
  dots: false,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// customer-reviews section
$('.review-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  cssEase: 'linear',
  autoplay: true,
  dots: true,
  arrows: false,
});

// sc-client section
$('.client-slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 500,
  cssEase: 'linear',
  autoplay: true,
  arrows: false,
});

//
// $('.features').click(function () {
//   if ($(this).next('.sub-menu').is(':visible')) {
//     $(this).next('.sub-menu').slideUp();
//     $(this).removeClass('menu-opened');
//   } else {
//     $('.features .sub-menu').slideUp();
//     $(this).next('.sub-menu').slideDown();
//     $('.features').removeClass('open');
//     $(this).addClass('menu-opened');
//   }
// });

// $(function () {
//   $('#MainMenu > li').click(function (e) {
//     e.stopPropagation();
//     var $el = $('ul', this);
//     $('#MainMenu > li > ul').not($el).slideUp();
//     $el.stop(true, true).slideToggle(400);
//   });
//   $('#MainMenu > li > ul > li').click(function (e) {
//     e.stopImmediatePropagation();
//   });
// });

// dropdown menu
// $(document).ready(function () {
//   //variable where currentAnchor is stored
//   var currentSection = 0;
//   // hides the submenu as soon as the DOM is ready
//   $('.sub-menu').hide();
//   // toggles the submenu on clicking the noted link
//   $('#MainMenu li a').click(function () {
//     // remove active class
//     $('#MainMenu li a').removeClass('active');
//     // add active class
//     $(this).addClass('active');

//     var href = $(this).attr('href');
//     //hide all submenus
//     $('#hidden>ul').hide();

//     //show one particular menu
//     $(href).show();

//     //logic for hiding and showing submenu
//     if (currentSection == 0) {
//       $('.sub-menu').slideToggle(200);
//       currentSection = href;
//     } else if (currentSection == href) {
//       $('.sub-menu').slideToggle(200);
//       currentSection = 0;
//     } else {
//       currentSection = href;
//     }
//     return false;
//   });
// });

//Get the button
var mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// navbar
var yourNavigation = $('.air-bottom-header');
stickyDiv = 'sticky';
yourHeader = $('.air-middle-header').height();

$(window).scroll(function () {
  if ($(this).scrollTop() > yourHeader) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

// slider text effect
