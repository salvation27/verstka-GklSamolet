  // Инициализация карты
        ymaps.ready(init);
 
        function init () {
            
            //Центрирование и выбор масштаба карты
             
                 var myMap = new ymaps.Map('map', {
                    center: [55.8255383, 37.31793010000001 ], 
                    zoom: 17
                }); 
 
           // Создание своей метки 
                var myPlacemark = new ymaps.Placemark(
                // Координаты метки
                  [55.8255383,37.31793010000001] , {
                    // Свойства метки
                    hintContent: '<div class="window_market"><div class="market_title">ГК Самолет</div><div class="market_adress"><span>Адрес:</span>г. Москва, ул Ленина, д.8</div><div class="market_adress"><span>Телефон:</span> +7(495)560-70-70</div></div>'                //Подсказка при наведении на маркер
                }, {
                    iconImageHref: 'img/marker.png',  // картинка иконки
                    iconImageSize: [45, 45],                                      // размеры картинки
                    iconImageOffset: [0, 0]                                   // смещение картинки
                    });




              


     


 
                // Добавление метки на карту
                myMap.geoObjects.add(myPlacemark);
            
       

                //Элементы управления    
                myMap.controls
                // Кнопка изменения масштаба
                    .add('zoomControl')
                    // Список типов карты
                  
                    // Кнопка изменения масштаба - справа
                   
                    // Стандартный набор кнопок
               
                    //Линейка масштаба
                
        }





