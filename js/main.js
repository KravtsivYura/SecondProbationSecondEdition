;(function($){
	'use strict';

	$(document).ready(function(){
		$('.section-two-content__main-photo').on('mouseover', function(){
			$(this).children('.section-two-content__main-photo-text').css('display', 'none');
		});
		$('.section-two-content__main-photo').on('mouseleave', function(){
			$(this).children('.section-two-content__main-photo-text').css('display', 'block');
		});
		$('.section-three-slider-container').slick({
			infinite: true,
			speed: 500,
			fade: true,
			nextArrow: '.section-three-sliders-next',
			prevArrow: '.section-three-sliders-prev'
		});
		$('.section-five-slider-container').slick({
			infinite: true,
			speed: 500,
			fade: true,
			nextArrow: '.section-three-sliders-next2',
			prevArrow: '.section-three-sliders-prev2'
		});
	});
})(jQuery);
