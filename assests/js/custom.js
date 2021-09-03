const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const toTop = document.querySelector(".to-top");

 window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100) {
     toTop.classList.add("active");
   } else {
   toTop.classList.remove("active");
   }
 });




$(document).ready(function(){ 
	new WOW().init();
	$('body').materialScrollTop();
	
	

	AOS.init();
	$('html').smoothScroll(500);
	
	
	
	
});
$('.portfolio-item').isotope({
	// options
	itemSelector: '.item',
	layoutMode: 'fitRows'
  });
  $('.portfolio-menu ul li').click(function(){
	$('.portfolio-menu ul li').removeClass('');
	$(this).addClass('');  

	  var selector = $(this).attr('data-filter');
	$('.portfolio-item').isotope({
		filter:selector
	});
	return false;
  });

  $(".products").owlCarousel({
	Type: 4,
	items: 1,
	autoplay: true,
	autoplayTimeout: 3000,
	loop: true,	
	nav:true,
	navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	autoplayHoverPause: true,
	smartSpeed: 1000,

});

  $(".carousel").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,	
		autoplayHoverPause: true,
		smartSpeed: 1000,

	});

  
