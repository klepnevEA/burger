

 var popup = (function() {

 		var initial = function(){
 				_setUpListeners();

 		};

 		var _setUpListeners = function() {
 			$('.review__view').on('click', _popup);
 			$('.popup__close').on('click', _close);
 		};


 		function _popup(e) {
 			e.preventDefault();
 			var href = $(this).attr('href');
 			$(href).addClass('active');
 			console.log(href);
 		};

 		function _close(e) {
 			e.preventDefault();
 			$(this).closest('.full-review').removeClass('active');
 		}

 	return {
 		initPopup: initial
 	}
 })();

 popup.initPopup();