

 var yandex_map = (function() {

 		var initial = function(){
 				_map();
 		};

 		var _map = function() {
 			ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            }); 
            
            myPlacemark = new ymaps.Placemark([55.75, 37.63], {
                hintContent: 'Это мы',
                balloonContent: 'Мы здесь!'
            }, {
							iconLayout: 'default#image',
            	iconImageHref: '../../img/icons/map-marker.svg',
            	iconImageSize: [30, 42],
            	iconImageOffset: [-3, -42]

            });
            
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
 			
 		};

 		
 	return {
 		initMap: initial
 	}
 })();

yandex_map.initMap();