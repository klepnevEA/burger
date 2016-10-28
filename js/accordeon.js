 // $(document).ready(function () {


 // 			$('.team-acco__trigger').on('click', function(e){
 // 				e.preventDefault();
 // 				var that = $(this),
 // 				elem = that.closest('.team-acco__item'),
 // 				elemContainer = elem.find('.team-acco__content'), 				
 // 				elemContainerWrap = elemContainer.find('.team-acco__wrap'),
 // 				elemContainerWrapHeight = elemContainerWrap.outerHeight();

 // 				if(!that.hasClass('active')) {
 // 					$('.team-acco__content').css({
 // 						'height': 0,
 // 						'opacity':0}); 
 // 					$('.team-acco__trigger').removeClass('active'); 					
 // 					$(elemContainer).css({
 // 						'height': elemContainerWrapHeight,
 // 						'opacity':1
 // 					}); 

 // 					that.addClass('active');					
 // 				} else {
 // 					$(elemContainer).css({
 // 						'height': 0,
 // 						'opacity':0
 // 				}); 
 // 					that.removeClass('active'); 
 // 				}


 // 			})
 			
 // })

 var accordeon = (function() {

 		var initial = function(){
 				_setUpListeners();
 		};

 		var _setUpListeners = function() {
 			$('.team-acco__trigger').on('click', _openAccordeon);
 		};

 		var _openAccordeon = function(e) {
 			e.preventDefault();
 			var that = $(this),
	 				elem = that.closest('.team-acco__item'),
	 				elemContainer = elem.find('.team-acco__content'), 				
	 				elemContainerWrap = elemContainer.find('.team-acco__wrap'),
	 				elemContainerWrapHeight = elemContainerWrap.outerHeight();

 				if(!that.hasClass('active')) {
 					$('.team-acco__content').css({
 						'height': 0,
 						'opacity':0}); 
 					$('.team-acco__trigger').removeClass('active'); 					
 					$(elemContainer).css({
 						'height': elemContainerWrapHeight,
 						'opacity':1
 					}); 

 					that.addClass('active');					
 				} else {
 					$(elemContainer).css({
 						'height': 0,
 						'opacity':0
 				}); 
 					that.removeClass('active'); 
 				}
 		};


 	return {
 		init: initial
 	}
 })();

 accordeon.init();