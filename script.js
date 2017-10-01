

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $('.nav-web').addClass('scroll');
  } else {
    $('.nav-web').removeClass('scroll');
  };
  var y = $('.hero').height() + $('.about').height() + $('.services').height() + $('.news').outerHeight();

  if ($(window).scrollTop() > y) {
    $('.contact-short').addClass('scroll');
  } else {
    $('.contact-short').removeClass('scroll');
  };
});

$(".contact-short").click(function() {
  $('html,body').animate({
      scrollTop: $(".contact").offset().top
    },
    'slow');
});


// click to scroll
var section = "";
$(".nav-item").click(function() {
  section = $(this).attr('id');
  $('html,body').animate({
      scrollTop: $("."+ section).offset().top
    },
    'slow');
});
