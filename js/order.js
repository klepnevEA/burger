

 var order_ajax = (function() {

 		var initial = function(){
 				_setUpListeners();
 		};

 		var _setUpListeners = function() {
 			$('#order__form-button').on('click', _order);
 		};


 		function _order(e) {
				e.preventDefault(); 			
 				var data = $('#order-form').serializeArray();
 		
 				$.ajax({
 					url: '../php/action.php',
 					method: 'post',
 					data: data

 				}).done(function(data){
 						console.log(data);
 						$('#success').addClass('active');
 				})
 		};


 	return {
 		orderAjax: initial
 	}
 })();

 order_ajax.orderAjax();