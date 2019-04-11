
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 800)
}


$('.toggle').on('click', function() {
    $('.menu').toggleClass('active');
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



