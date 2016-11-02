

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
 						var jsoned = JSON.parse(data);
 						$('#success').addClass('active');
 						console.log(jsoned);

 						var make_table = makeTable(jsoned.name, jsoned.phone, jsoned.street, jsoned.home, jsoned.part, jsoned.floor, jsoned.payment)
  					$('#table__order').html(make_table);				
 				});


 		};

 		function makeTable(mame, phone, street, home, part, floor, payment) {
 			return "<tr><td> Ваше имя</td><td>" + mame + "</td></tr>\
 							<tr><td> телефон </td><td>" + phone + "</td></tr>\
 							<tr><td> Улица </td><td>" + street + "</td></tr>\
 							<tr><td> Дом </td><td>" + home + "</td></tr>\
 							<tr><td> Корпус </td><td>" + part + "</td></tr>\
 							<tr><td> Этаж </td><td>" + floor + "</td></tr>\
 							<tr><td> Способ оплаты </td><td>" + payment + "</td></tr>"
 		}




 	return {
 		orderAjax: initial
 	}
 })();

 order_ajax.orderAjax();