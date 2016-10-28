

 var slider = (function() {

 		var initial = function(){
 				_setUpListeners();
 		};

 		var _setUpListeners = function() {
 			$('.burger-slider__btn').on('click', _openSlider);
 		};

		var moveSlide = function(container, slideNum) {
			var 
				items = container.find('.burgers-slider__item'),
				activeItem = items.filter('.active'),
				regItem = items.eq(slideNum),
				regIndex = regItem.index(),
				list = container.find('.burgers-slider'),
				duration = 500;


			if(regItem.length)	{
				list.stop(true, true).animate({
					'left': -regIndex * 100 + '%'
				}, duration, function(){
					activeItem.removeClass('active');
					regItem.addClass('active');
					
				});
			};
		} 		

 		var _openSlider = function(e) {
 			e.preventDefault();
				var $this = $(this),
				container = $this.closest('.burger-slider'),
				items = container.find('.burgers-slider__item'),
				activeItem = items.filter('.active'),
				nextItem = activeItem.next(),
				prevItem = activeItem.prev();

console.log(container);
				if($this.hasClass('burger-slider__btn_next')) {
				
					if(nextItem.length) {
						moveSlide(container, nextItem.index());	
;	
					} else {
						moveSlide(container, 0);						
					}
				} else {
					if(prevItem.length) {
						moveSlide(container, prevItem.index());	
					} else {
						moveSlide(container, items.length - 1);						
					}
				}
 		};


 	return {
 		init: initial
 	}
 })();

 slider.init();