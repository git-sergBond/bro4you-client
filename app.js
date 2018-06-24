//
// 1 убрать переменные претендующие на удаление
//
import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';
import { runInContext } from 'vm';
Vue.use(YmapPlugin);
new Vue({
  el: '#app',
  data: {
    mapInstanse: null,
    coords: [54.82896654088406, 39.831893822753904],//начальный фокус на карте
    cur_point: null,//текущая выделенная метка на карте (нужно для подсветки)
    //-------------GeoObjects---------
    placemarks: [],//координаты услуг+данные
    polygonEdit: null,
    line: null,
    lineStringGeometry: null,
    //-------------State and GUI-------
    stateApp: 0, //состояние приложения
    /*
    0 - перемешение карты, и просмотр информации о услугах
    1 - редактирование полигона
    2 - редактирвание мышью
    */
    //------------Data------------
    tags: ['Украшения', 'Игрушки', 'Развлечения'],
    cur_tag: [],
    responce: [],
  },
  methods: {
    NewPolygon: function () {
      //Создает новый полигон
      let p = new ymaps.Polygon([], {}, {
        fillColor: '#00FF00',// Цвет заливки.
        strokeColor: '#0000FF',// Цвет обводки.
        opacity: 0.5,// Общая прозрачность (как для заливки, так и для обводки). 
        strokeWidth: 5,// Ширина обводки.
        strokeStyle: 'shortdash'// Стиль обводки.
      });
      this.mapInstanse.geoObjects.add(p);// Добавляем многоугольник на карту.
      return p;
    },
    //------------------------DELETE THIS METHOD
    ClearMap: function () {
      //очищает все на карте
      this.mapInstanse.geoObjects.removeAll();
      this.polygonEdit = this.NewPolygon();
      this.intit_events_DrawPolygonByFinger();
    },
    getInfoForPoligon_from_server: function (coordinates) {
      //асинхронный запрос серверу
      //серверу передается массив точек (вершин полигона)
      //принимается ответ от сервера в виде объекта с координатами и объектом info содержащим данные о чем-то
      console.log('requset to server (json array coordinates)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
      //console.log(coordinates)
      console.log('... become response (json array plasemarks with info)')//<-----------------  жду ответа
      return responce;
    },
    click_btn_Start_Edit: function () {
      this.ClearMap();
      this.mapInstanse.behaviors.disable('drag');
      this.stateApp = 1;
    },
    //-------- ОБВОДКА ОБЛАСТИ --------------
    intit_events_DrawPolygonByFinger(){
      this.lineStringGeometry = new ymaps.geometry.LineString([]);
      this.line = new ymaps.GeoObject({
          geometry: this.lineStringGeometry
      });
      this.mapInstanse.geoObjects.add(this.line); // Создаем инстанцию геообъекта и передаем нашу геометрию
      this.mapInstanse.events.add("mousemove", this.mousemove_event_DrawPolygonByFinger);
    },
    mousedown_event_DrawPolygonByFinger(event){
      if (this.stateApp === 1) this.stateApp = 2;
    },
    mousemove_event_DrawPolygonByFinger(event){
      if (this.stateApp !== 2) return;
      let point = event.get('coords');
      let length = this.lineStringGeometry.getLength();
      this.lineStringGeometry.insert(length, point);
    },
    mouseup_event_DrawPolygonByFinger(event){
      if (this.stateApp === 2) {
        this.stateApp = 1;
        this.Send_Polygon();
      }
    },
    click_btn_Clear: function () {
      this.ClearMap();
      this.mapInstanse.geoObjects.add(this.polygonEdit);
      this.mapInstanse.behaviors.enable('drag');
      this.stateApp = 0;
    },
    Send_Polygon: function () {
      //ищем среди объектов полигон и отправляем его на сервер 
      let coordinates = this.lineStringGeometry.getCoordinates();
      this.placemarks = this.getInfoForPoligon_from_server(coordinates);
      this.ClearMap();
      //как пришел ответ идет добавление меток на карту и информации о них
      this.placemarks.forEach(placemark => {
        let p = new ymaps.Placemark(placemark.coords);
        p.events.add('click', this.click_Placemark);
        this.mapInstanse.geoObjects.add(p);
      });
      this.stateApp = 0;
      this.mapInstanse.behaviors.enable('drag');
    },
    click_Placemark: function (event) {
      //при клике на метке, в блоке информации выделяеются даныне и сама метка
      this.cur_point = event.get('target').geometry.getCoordinates();
      // Цвет всех меток очищается
      let collection = ymaps.geoQuery(this.mapInstanse.geoObjects);
      for (let j = 0; j < collection.getLength(); j++) {
        if (collection.get(j).geometry.getType() === "Point") {
          collection.get(j).options.set(
            'preset', 'twirl#blueStretchyIcon'
          );
        }
      }
      // выделение Цвета текущей метки
      event.get('target').options.set('preset', 'islands#redIcon');
    },
    initHandler: function (myMap) {
      //Инициализация карты
      this.mapInstanse = myMap;
      this.intit_events_DrawPolygonByFinger();
    }
  }
})
var responce = [
  {
    coords: [55.05980129774418, 40.562484643066426],
    name: 'Золотой слон - подставка',
    imageUrl: 'images/car1.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 55',
    countReviews: 0,
    stars: 2,
    tag: 'Украшения',
    url: '#1'
  },
  {
    coords: [55.254808646433844, 39.13975515087893],
    name: 'Игрушечные слоны',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    stars: 5,
    tag: 'Игрушки',
    url: '#2'
  },
  {
    coords: [55.254808646433844, 39.13975515087893],
    name: 'Игрушечные слоны',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    stars: 5,
    tag: 'Игрушки',
    url: '#2'
  },
  {
    coords: [55.254808646433844, 39.13975515087893],
    name: 'Игрушечные слоны',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    stars: 5,
    tag: 'Игрушки',
    url: '#2'
  },
  {
    coords: [54.98721616095246, 39.733016869628926],
    name: 'Зоопарк',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 1000,
    stars: 3,
    tag: 'Развлечения',
    url: '#3'
  },
  {
    coords: [54.98721616095246, 39.733016869628926],
    name: 'Зоопарк',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 1000,
    stars: 3,
    tag: 'Развлечения',
    url: '#3'
  }
];

