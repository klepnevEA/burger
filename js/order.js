

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
		var rv_name = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{1,20}$/;
		var rv_tel = /^( +)?((\+?7|8) ?)?((\(\d{3}\))|(\d{3}))?( )?(\d{3}[\- ]?\d{2}[\- ]?\d{2})( +)?$/;
		console.log(data[0].value);

		if(!(rv_name.test(data[0].value))){
			_order_err('Введите имя');
		} else if (!(rv_tel.test(data[1].value))){
			_order_err('Введите корректный телефон');
		} else {
			$.ajax({
				url: '../php/action.php',
				method: 'POST',
				data: data,
				success: function (data) {
					var jsoned = JSON.parse(data);
					if(jsoned.name && jsoned.phone) {
						$('#success').addClass('active');		 					
						var make_table = _makeTable(jsoned.name, jsoned.phone, jsoned.street, jsoned.home, jsoned.part, jsoned.floor, jsoned.payment);
						$('#table__order').html(make_table);		
					} else {
						_order_err('Чтото не так');		 					
					};
				}
			});
		};


		function _order_err(message) {
			$('#error').addClass('active');
			$('#error-message').html(message);	
		}

		function _makeTable() {
			return "<tr><td> Ваше имя</td><td>" + arguments[0] + "</td></tr>\
			<tr><td> Телефон </td><td>" + arguments[1] + "</td></tr>\
			<tr><td> Улица </td><td>" + arguments[2] + "</td></tr>\
			<tr><td> Дом </td><td>" + arguments[3] + "</td></tr>\
			<tr><td> Корпус </td><td>" + arguments[4] + "</td></tr>\
			<tr><td> Этаж </td><td>" + arguments[5] + "</td></tr>\
			<tr><td> Способ оплаты </td><td>" + arguments[6] + "</td></tr>"
		}		


	};






	return {
		orderAjax: initial
	}
})();

order_ajax.orderAjax();