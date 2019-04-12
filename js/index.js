// Sticky Header
$(window).scroll(function() {

  if ($(window).scrollTop() > 100) {
      $('.main_h').addClass('sticky');
  } else {
      $('.main_h').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
  if ($('.main_h').hasClass('open-nav')) {
      $('.main_h').removeClass('open-nav');
  } else {
      $('.main_h').addClass('open-nav');
  }
});

$('.main_h li a').click(function() {
  if ($('.main_h').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.main_h').removeClass('open-nav');
  }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
      scrollTop: target
  }, 500);
  event.preventDefault();
});





  $("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} ,800/* speed */ );
});



$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1000, 3],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [768, 2],
      itemsMobile: [650, 1],
      pagination: true,
      autoPlay: true
    });
  });





  AOS.init({
    duration:1500,
  });



