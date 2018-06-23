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
    //-------------претенденты на удаление
    polygon: {},//хранит координаты точек полигона
    placemarks: [],//координаты услуг
    tags: ['Украшения', 'Игрушки', 'Развлечения'],
    //-------------
    placeInfoTrig: false,//флаг показать/скрыть иформацию о месте(услугах)
    photoTrig: true,//флаг показать/скрыть фото
    info: {},//указатель на данныые о месте(услугах) котоорые показываются рядом с картой
    //
    polygonEdit: null,
    lineStringGeometry: null,
    //
    stateApp: 0, //состояние приложения
    /*
    0 - перемешение карты, и просмотр информации о услугах
    1 - редактирование полигона
    2 - рисование пальцем
    */
   drawMouseTrig: false,
   responce: responce
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
    ClearMap: function () {
      //очищает все на карте
      this.mapInstanse.geoObjects.removeAll();
      this.polygonEdit = this.NewPolygon();
    },
    getInfoForPoligon_from_server: function (coordinates) {
      //асинхронный запрос серверу
      //серверу передается массив точек (вершин полигона)
      //принимается ответ от сервера в виде объекта с координатами и объектом info содержащим данные о чем-то
      console.log('requset to server (json array coordinates)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
      console.log(coordinates)
      console.log('... become response (json array plasemarks with info)')//<-----------------  жду ответа
      return responce;
    },
    click_btn_Start_Edit: function () {
      this.ClearMap();
      this.mapInstanse.behaviors.disable('drag');
      this.stateApp = 1;
      //------------>this.polygonEdit.editor.startDrawing();
    },
    intit_events_DrawPolygonByFinger(){
      this.lineStringGeometry = new ymaps.geometry.LineString([]);
      this.mapInstanse.geoObjects.add( // Создаем инстанцию геообъекта и передаем нашу геометрию в конструктор
        new ymaps.GeoObject({
          geometry: this.lineStringGeometry
        })
      );
      this.mapInstanse.events.add("click", this.mousedown_event_DrawPolygonByFinger);
      this.mapInstanse.events.add("mousemove", this.mousemove_event_DrawPolygonByFinger);
    },
    mousedown_event_DrawPolygonByFinger(event){
      if (this.stateApp === 1) {
        this.drawMouseTrig = !this.drawMouseTrig;
        console.log(this.drawMouseTrig);
      }
    },
    mousemove_event_DrawPolygonByFinger(event){
      if (this.drawMouseTrig === false) return;
      //sconsole.log(this.drawMouseTrig);
      let point = event.get('coords');
      let length = this.lineStringGeometry.getLength();
      this.lineStringGeometry.insert(length, point);
    },
    click_btn_Clear: function () {
      this.ClearMap();
      this.mapInstanse.geoObjects.add(this.polygonEdit);
      //------------>this.polygonEdit.editor.stopDrawing();
      this.mapInstanse.behaviors.enable('drag');
      this.stateApp = 0;
    },
    click_btn_Send_Polygon: function () {
      //ищем среди объектов полигон и отправляем его на сервер 
      let geoObjs = ymaps.geoQuery(this.mapInstanse.geoObjects);
      for (let i = 0; i < geoObjs._objects.length; i++) {
        if (geoObjs.get(i).geometry.getType() === "Polygon") {
          let coordinates = geoObjs.get(i).geometry.getCoordinates();
          this.placemarks = this.getInfoForPoligon_from_server(coordinates);
        }
      }
      //как пришел ответ идет добавление меток на карту и информации о них
      this.placemarks.forEach(placemark => {
        let p = new ymaps.Placemark(placemark.coords);
        p.events.add('click', this.click_Placemark);//--------->ERROR
        this.mapInstanse.geoObjects.add(p);
      });
      this.stateApp = 0;
      //------------->this.polygonEdit.editor.stopDrawing();
      this.mapInstanse.behaviors.enable('drag');
    },
    click_Placemark: function(event){
      //при клике, в блоке информации выводятся требуемые данные
      this.info = placemark.info;
      this.placeInfoTrig = true;
    },
    initHandler: function (myMap) {
      this.mapInstanse = myMap;
      //----------обводка пальцем------------
      this.intit_events_DrawPolygonByFinger();
    }
  }
})
var shares = [
  {
    coords: [55.05980129774418, 42],
    name: 'Пицца - 30%',
    imageUrl: 'images/car1.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 55',
    countReviews: 43,
    stars: 4,
    teg: 'Украшения',
    url: '#1'
  }
];
var responce = [
  {
    coords: [55.05980129774418, 40.562484643066426],
    name: 'Золотой слон - подставка',
    imageUrl: 'images/car1.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 55',
    countReviews: 43,
    stars: 4,
    teg: 'Украшения',
    url: '#1'
  },
  {
    coords: [55.254808646433844, 39.13975515087893],
    name: 'Игрушечные слоны',
    imageUrl: 'images/car2.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    stars: 4,
    teg: 'Игрушки',
    url: '#2'
  },
  {
    coords: [54.98721616095246, 39.733016869628926],
    name: 'Зоопарк',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    stars: 4,
    teg: 'Развлечения',
    url: '#3'
  }
];

