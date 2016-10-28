  var accordeonMenu = (function() {


 		var initial = function(){
 				_setUpListeners();
 		};

 		var _setUpListeners = function() {
 			$('.menu-acco__trigger-text').on('click', _openAccordeon);
 		};

 		var _openAccordeon = function(e) {
 			e.preventDefault();
 			var $this = $(this),
	 				elem = $this.closest('.menu-acco__item');

	 				if(!elem.hasClass('active')) {
						elem.addClass('active')
								.siblings()
								.removeClass('active');
	 				} else {
	 					elem.removeClass('active');
	 				}
 		};


 	return {
 		initAccordeonMenu: initial
 	}
 })();

 accordeonMenu.initAccordeonMenu();