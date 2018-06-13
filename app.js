//
// 1 убрать переменные претендующие на удаление
//
import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';
Vue.use(YmapPlugin);
new Vue({
  el: '#app',
  data: {
    mapInstanse: null,
    coords: [54.82896654088406, 39.831893822753904],//начальный фокус на карте
    //-------------претенденты на удаление
    polygon: {},//хранит координаты точек полигона
    placemarks: [],//координаты услуг
    editPoligonState: false,//флаг показывающий, что в данный момент происходит редактирвоание полигона
    //-------------
    placeInfoTrig: false,//флаг показать/скрыть иформацию о месте(услугах)
    photoTrig: true,//флаг показать/скрыть фото
    info: {},//указатель на данныые о месте(услугах) котоорые показываются рядом с картой
  },
  methods: {
    getInfoForPoligon_from_server: function (coordinates) {
      //асинхронный запрос серверу
      //серверу передается массив точек (вершин полигона)
      //принимается ответ от сервера в виде объекта с координатами и объектом info содержащим данные о чем-то
      console.log('requset to server (json array coordinates)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
      console.log(coordinates)
      console.log('... become response (json array plasemarks with info)')//<-----------------  жду ответа
      return responce;
    },
    initHandler: function (myMap) {
      let context = this;
      this.mapInstanse = myMap;//get instanse after init yandex map script
      /*
      Объект полигона, который редактируется пользователем.
      Координаты полигона отправляются на сервер, после чего происходит поиск в пределах координат полигона
      */
      let polygonEdit = null;
      var NewPolygon = function () {
        //Создает новый полигон
        let p = new ymaps.Polygon([], {}, {
          fillColor: '#00FF00',// Цвет заливки.
          strokeColor: '#0000FF',// Цвет обводки.
          opacity: 0.5,// Общая прозрачность (как для заливки, так и для обводки). 
          strokeWidth: 5,// Ширина обводки.
          strokeStyle: 'shortdash'// Стиль обводки.
        });
        context.mapInstanse.geoObjects.add(p);// Добавляем многоугольник на карту.
        return p;
      }

      var ClearMap = function(){
        //очищает все на карте
        context.mapInstanse.geoObjects.removeAll();
        polygonEdit = NewPolygon();
      }
      /*
      КНОПКА поиска услуг в заданном секторе
      */
      let btnRequestEDitPolygon = null;
      let btnCancelEDitPolygon = null;
      let btnEditPolygon = new ymaps.control.Button({
        data: {
          content: "Выделить в область",
          image: 'images/search.png'// Иконка имеет размер 16х16 пикселей.
        },
        options: {
          maxWidth: [28, 178]
        }
      });
      btnEditPolygon.events.add('click', function (e) {
        ClearMap();
        let link_editPoligonState = context.editPoligonState;
        if (link_editPoligonState == false) {
          polygonEdit.editor.startDrawing();
          btnEditPolygon.options.set('visible',false); 
          btnRequestEDitPolygon.options.set('visible',true); 
          btnCancelEDitPolygon.options.set('visible',true); 
        }
        context.editPoligonState = true;
      });
      this.mapInstanse.controls.add(btnEditPolygon);
      /*
      КНОПКА Очистить
      */
      btnRequestEDitPolygon = new ymaps.control.Button({
        data: {
          content: "Очистить",
          image: 'images/cancel_32x32.png'
        },
        options: {
          maxWidth: [28, 178]
        }
      });
      btnRequestEDitPolygon.events.add('click', function (e) {
        ClearMap();
        context.mapInstanse.geoObjects.add(polygonEdit);
        context.editPoligonState = false;
        polygonEdit.editor.stopDrawing();
        btnEditPolygon.options.set('visible',true);
        btnRequestEDitPolygon.options.set('visible',false); 
        btnCancelEDitPolygon.options.set('visible',false); 
      });
      btnRequestEDitPolygon.options.set('visible',false);
      this.mapInstanse.controls.add(btnRequestEDitPolygon);
      /*
      КНОПКА отправки данных
      */
      btnCancelEDitPolygon = new ymaps.control.Button({
        data: {
          // Зададим текст и иконку для кнопки.
          content: "Отправить",
          image: 'images/arrow.png'
        },
        options: {
          maxWidth: [28, 178]
        }
      });
      btnCancelEDitPolygon.events.add('click', function (e) {

        let link_editPoligonState = context.editPoligonState;
        if (link_editPoligonState == true) {
          let geoObjs = ymaps.geoQuery(myMap.geoObjects);
          for (let i = 0; i < geoObjs._objects.length; i++) {
            if (geoObjs.get(i).geometry.getType() === "Polygon") {
              //запрос серверу
              let coordinates = geoObjs.get(i).geometry.getCoordinates();
              let placemarks = context.getInfoForPoligon_from_server(coordinates);
              //добавление меток на карту
              placemarks.forEach(placemark => {
                let p = new ymaps.Placemark(placemark.coords);
                p.info = placemark.info;
                p.events.add('click', function () {
                  //при клике, в блоке информации выводятся требуемые данные
                  context.info = p.info;
                  context.placeInfoTrig = true;
                });
                context.mapInstanse.geoObjects.add(p);
              });
            }
          }
        }
        context.editPoligonState = false;
        polygonEdit.editor.stopDrawing();
        btnEditPolygon.options.set('visible',true);
        btnRequestEDitPolygon.options.set('visible',false); 
        btnCancelEDitPolygon.options.set('visible',false);
      });
      btnCancelEDitPolygon.options.set('visible',false);
      this.mapInstanse.controls.add(btnCancelEDitPolygon);
    }
  }
})

var responce = [{
  coords: [55.254808646433844, 39.13975515087893],
  info: {
    address: '3 Москва,пос. Румянцево, улица Верхня, 25А',
    nameORg: 'ООО ...',
    description: 'Чет там делаем, производим...',
    phoneNumber: '+ 7 (XXX) XX - XX',
    services: [
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      },
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      },
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      }
    ]
  }
},
{
  coords: [55.05980129774418, 40.562484643066426],
  info: {
    address: '1 Москва,пос. Румянцево, улица Верхня, 25А',
    nameORg: 'ООО ...',
    description: 'Чет там делаем, производим...',
    phoneNumber: '+ 7 (XXX) XX - XX',
    services: [
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      },
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      },
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      }
    ]
  }
},
{
  coords: [54.98721616095246, 39.733016869628926],
  info: {
    address: '2 Москва,пос. Румянцево, улица Верхня, 25А',
    nameORg: 'ООО ...',
    description: 'Чет там делаем, производим...',
    phoneNumber: '+ 7 (XXX) XX - XX',
    services: [
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      },
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      },
      {
        imageUrl: 'images/example-org.png',
        price: 7700000,
        description: '2-комнатная. квартира - 56,1 м3 - 1/4 этаж',
        url: '#123'
      }
    ]
  }
},
];

