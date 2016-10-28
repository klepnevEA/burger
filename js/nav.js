

 var nav = (function() {

 		var initial = function(){
 				_setUpListeners();
 		};

 		var _setUpListeners = function() {
 			document.querySelector('.wrapper').addEventListener('wheel', _swipe);
 			
 		};

 		var sections = $('.section'),
 		display = $('.main'),
 		screen = 0,
 		inScroll = false;


 		function _scrollToSection(sectionEq) {
 				var position;
 				
 				position = (sections.eq(sectionEq).index() * -100 + '%');

 				sections.eq(sectionEq)
 					.addClass('active')
 					.siblings()
 					.removeClass('active');

 				display.css({
 					'transform' : 'translate3d(0, ' + position + ', 0)'
 				});

 				display.on('transitionend', function(){
 					setTimeout(function(){
 						inScroll = false;	
 					},200);

 					$('.fixed-nav__item')
 						.eq(sectionEq)
 						.addClass('active')
 						.siblings()
 						.removeClass('active');
 					
 				});

				
 		};

 		$('.arrow-scroll').on('click', function() {
 			_scrollToSection(1);
 		});

 		$('.nav-scroll').on('click', function(e) {
			e.preventDefault();
			var href = parseInt($(this).attr('href'));
 			_scrollToSection(href);
 		});


 		function _swipe(e) {
 			e.preventDefault();
 			console.log(inScroll);
			var activeSection = sections.filter('.active');	

			if(!inScroll) {
				
 				console.log(inScroll);				
				if(e.deltaY > 0 && activeSection.next().length) { //скроллим вниз
					screen = activeSection.next().index();
					inScroll = true;				
				} else if (e.deltaY < 0 && activeSection.prev().length){ //скроллим вверх
					screen = activeSection.prev().index();
					inScroll = true;	
				}

				_scrollToSection(screen);
				
			}
 		};

 	return {
 		initNav: initial
 	}
 })();

 nav.initNav();