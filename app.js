//
// 1 убрать переменные претендующие на удаление
//
import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';
//import { runInContext } from 'vm';
//var hello = require('!vue./components/hello.vue');
import hello from './components/search.vue'
Vue.use(YmapPlugin);
new Vue({
  el: '#app',
  data: {
    message: 'Введите название услуги',
    mapInstanse: null,
    coords: [54.82896654088406, 39.831893822753904],//начальный фокус на карте
    
    //-------------GeoObjects---------
    poly_line: [],
    cur_point: null,//текущая выделенная метка на карте (нужно для подсветки)
    placemarks: [],//координаты услуг+данные ---------->services
    shares: [],
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
    /*
    |   Исправить термины ТЕГ на КАТЕГОРИЯ
    |
     */
    //для фильтра пот категорий
    tags: [],
    cur_tag: [],
    //для фильтра категорий
    categories: [],
    cur_category: 'All',
    //для фильтра цен
    low_price: 0,
    high_price: 0,
    //для фильтра регионов
    regions: null,//Здесь в 1й раз загружаются регионы и используются далее в приложении
    osmId: null,
    region_name: null
  },
  components: {
    hello: hello
},
  methods: {
    //--------------РАБОТА С ГЕО ОБЪЕКТАМИ---------------
    NewPolygon: function (arrayPoints) {
      //Создает новый полигон
      let p = new ymaps.Polygon([arrayPoints], {}, {
        fillColor: '#0000FF',// Цвет заливки.
        strokeColor: '#0000FF',// Цвет обводки.
        opacity: 0.5,// Общая прозрачность (как для заливки, так и для обводки). 
        strokeWidth: 3,// Ширина обводки.
        
      });
      this.mapInstanse.geoObjects.add(p);// Добавляем многоугольник на карту.
      return p;
    },
    delete_geoObject(o){
      //Удаление гео объекта с карты
      if(o != null) this.mapInstanse.geoObjects.remove(o);
    },
    ClearMap: function () {
      //очищает все на карте
      this.mapInstanse.geoObjects.removeAll();
      this.intit_events_DrawPolygonByFinger();
    },
    //----------------ЗАПРОСЫ----------------------------
    getInfoForPoligon_from_server: function (search, coordinates) {
      //асинхронный запрос серверу
      //серверу запрос поиска + передается массив точек (вершин полигона)
      //принимается ответ от сервера в виде объекта с координатами и объектом info содержащим данные о чем-то
      console.log('requset to server (search msg + json array coordinates)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
      //console.log(coordinates)
      console.log('... become response (json array plasemarks with info)')//<-----------------  жду ответа
      return responce;
    },
    getInfoForBounds_from_server: function(search, bounds){
      //асинхронный запрос серверу
      //серверу строка запроса пользователя + координаты квадрата Л-В и П-Н
      //принимается ответ от сервера в виде объекта с координатами и объектом info содержащим данные о чем-то
      console.log('requset to server (string search msg + bounds rect)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
      console.log('... become response (json array plasemarks with info)')//<-----------------  жду ответа
      return responce;
    },
    get_Categories_and_polygon_from_server: function(category, polygon){
// NOP 
return responce;
    },
    get_Categories_and_bounds_from_server: function(category, bounds){
// NOP
return responce;
    },
    getCategoties_from_server: function(){
      return ['Магазины Авто', 'Еда', 'Одежда', 'Ищут работу', "Транспорт", "Развлечения", "Драгоценности", "Банкоматы"];
    },
    getShares_from_server: function(bounds){
      //получить данные о рекламе и акциях в звдвнном районе
      console.log('requset to server (bounds rect)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
      console.log('... become response (json array sahres with info)')//<-----------------  жду ответа
      return shares;
    },
    //-------- ОБВОДКА ОБЛАСТИ ---------------------------
    intit_events_DrawPolygonByFinger() {
      this.lineStringGeometry = new ymaps.geometry.LineString([]);
      this.line = new ymaps.GeoObject({
        geometry: this.lineStringGeometry,
      }, {
          // Описываем опции геообъекта.
          fillColor: '#00FF00',// Цвет заливки.
          strokeColor: '#0000FF',// Цвет обводки.
          opacity: 0.5,// Общая прозрачность (как для заливки, так и для обводки).
          strokeWidth: 5,// Ширина обводки.
          strokeStyle: 'shortdash'// Стиль обводки.
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
        if(this.lineStringGeometry.getLength()>2){
          this.stateApp = 1;
          this.Send_Polygon();
        }
      }
    },
    //-------------ОБРАБОТЧИКИ КНОПОК--------------------
    click_btn_Clear: function () {
      //очищаем все метки и полигоны с карты
      //делаем похожую на начальную страницу
      this.stateApp = 0;
      this.click_btn_ShowAllTags();
      this.tags = [];
      this.ClearMap();
      this.polygonEdit = null;
      this.mapInstanse.geoObjects.add(this.line);
      this.add_actions_info();
      this.mapInstanse.behaviors.enable('drag');
    },
    click_btn_Start_Edit: function () {
      this.delete_geoObject(this.polygonEdit);
      this.mapInstanse.behaviors.disable('drag');
      this.stateApp = 1;
    },
    click_btn_search: function(event){
      //Кликнули на кнопку найти
      //если не указана область то
      //    передаем левую верхнюю и правую нижнюю координату области видимости
      //иначе передаем полигон в котором нужно искать и запрос
      this.ClearMap();
      this.add_actions_info();
      let bounds = this.mapInstanse.getBounds();//2 координаты
      if(this.polygonEdit == null){
        this.placemarks = this.getInfoForBounds_from_server(this.message, bounds);
      }else{
        this.placemarks = this.getInfoForPoligon_from_server(this.message, this.poly_line);
      }
      this.add_placemarks_on_map(this.placemarks);
      this.tags = this.get_categoryes_from_placemarks(this.placemarks);
      this.click_btn_ShowAllTags();
      this.get_low_and_high_price_from_placemarks(this.placemarks);
    },
    change_category_event: function(){
      //событие выбора категории из чекбокса
      this.ClearMap();
      this.add_actions_info();
      let bounds = this.mapInstanse.getBounds();//2 координаты
      if(this.polygonEdit == null){
        this.placemarks = this.get_Categories_and_bounds_from_server(this.cur_category, bounds);
      }else{
        this.placemarks = this.get_Categories_and_polygon_from_server(this.cur_category, this.poly_line);
      }
      this.add_placemarks_on_map(this.placemarks);
      this.tags = this.get_categoryes_from_placemarks(this.placemarks);
      this.click_btn_ShowAllTags();
      this.get_low_and_high_price_from_placemarks(this.placemarks);
    },
    click_btn_choose_region: function(){
      //нажали на кнопку выбрать регион
      this.mapInstanse.geoObjects.add(this.regions);//высвечиваем регионы на карте
    },
    filter: function(){
      //фильтр для категорий и цен
      let collection = ymaps.geoQuery(this.mapInstanse.geoObjects);
      for (let j = 0; j < collection.getLength(); j++) {
        if (collection.get(j).geometry.getType() === "Point") {
          let point = collection.get(j);
          point.options.set('visible', false); 
          this.placemarks.forEach(el => {
            if(el.tag == this.cur_tag  
            && el.price >= this.low_price 
            && el.price <= this.high_price
            && el.coords == point.geometry.getCoordinates()){
              point.options.set('visible', true); 
            }
          });
          if(this.cur_tag == 'All') point.options.set('visible', true); 
        }
      }
    },
    click_btn_changeTag: function(tag){
      //При уточнении категрии все прочие метки скрываются на карте
      this.cur_tag = tag;//запомнили фильтр тегов
      this.filter();
    },
    click_btn_ShowAllTags: function(){
      //Очистить фильтр уточнения всех меток
      this.cur_tag = 'All';
      this.filter();
      this.get_low_and_high_price_from_placemarks(this.placemarks);
    },
    change_txt_priceFilter: function(){
      //Метод оставляет только те метки которые соответствуют услуге с заданной стоимостью
      this.filter();
    },
    //------------Обработчики остальных объектов ---------
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
      // переключение  на вкладку с меткой
      for (let i = 0; i < this.placemarks.length; i++) {
        if(this.is_equals_coords(this.placemarks[i].coords)){
          this.cur_tag = this.placemarks[i].tag;
        }
      }
    },
    click_on_card: function(coords){
      //когда нажали на карточку с информацией переходим к выбранной координате
      this.coords = coords;
      let collection = ymaps.geoQuery(this.mapInstanse.geoObjects);
      for (let j = 0; j < collection.getLength(); j++) {
        let point = collection.get(j);
        if (point.geometry.getType() === "Point"){
          let c = point.geometry.getCoordinates();
          if(c[0] == coords[0] && c[1] == coords[1]){
            point.events.fire('click');
          }
        }
      }
    },
    //---------------- ОТРИСОВКА ОБЛАСТИ НА КАРТЕ---------
    add_placemarks_on_map: function(arr_placemarks){
      //добавление меток на карту и информации о них
      arr_placemarks.forEach(placemark => {
        let p = new ymaps.Placemark(placemark.coords);
        p.events.add('click', this.click_Placemark);
        this.mapInstanse.geoObjects.add(p);
      });
    },
    alg_simplifi_line(arr_in){
      //уменьшение колличества точек на линии
      console.log(arr_in.length)
      let simle_arr = [];
      simle_arr.push(arr_in[0]);
      for (let index = 0; index < arr_in.length; index++) {
        if(index % 5 <= 0) simle_arr.push(arr_in[index]);
      }
      simle_arr.push(arr_in[arr_in.length-1]);
      console.log(simle_arr.length)
      return simle_arr;
    },
    get_categoryes_from_placemarks(placemarks){
      //Когда приходит массив данных, м записываем все имеющиеся категории в массив
      //что бы уточнить
      let tags = [];
      for (let i = 0; i < placemarks.length; i++) {
        let tag = placemarks[i].tag;
        if(tags.indexOf(tag) === -1) tags.push(tag);
      }
      return tags;
    },
    get_low_and_high_price_from_placemarks: function(placemarks){
      //Находим максимально и минимальное  значение для цен
      let low_price = Number(placemarks[0].price);
      let high_price = Number(placemarks[0].price);
      for (let i = 0; i < placemarks.length; i++) {
        let el = Number(placemarks[i].price);
        if(el > high_price) high_price = el;
        if(el < low_price) low_price = el;
      }
      this.low_price = low_price;
      this.high_price = high_price;
    },
    /*
    | функция повторяется в конце 
    |
    |
    */
    Send_Polygon: function () {
      //ищем среди объектов полигон и отправляем его на сервер 
      let coordinates = this.lineStringGeometry.getCoordinates();
      //!добавляем точку в конец, чтобы не делать преобразований с полигоном
      this.lineStringGeometry.insert(this.lineStringGeometry.getLength(),this.lineStringGeometry.getCoordinates()[0]);
      let simple_line = this.alg_simplifi_line(coordinates);
      this.poly_line = simple_line;
      this.placemarks = this.getInfoForPoligon_from_server(simple_line);
      this.ClearMap();
      this.add_actions_info();
      //как пришел ответ идет добавление меток на карту и информации о них
      this.add_placemarks_on_map(this.placemarks);
      this.get_low_and_high_price_from_placemarks(this.placemarks);
      this.tags = this.get_categoryes_from_placemarks(this.placemarks);
      this.click_btn_ShowAllTags();
      this.polygonEdit =  this.NewPolygon(simple_line);
      //возвращаем прежнее состояние приложения и активируем перетаскивание
      this.stateApp = 0;
      this.mapInstanse.behaviors.enable('drag');
    },
    //----------------ФИЛЬТРЫ------------------------------
    is_equals_coords: function(coords){
      if(this.cur_point == null) return false;
      if (coords[0] == this.cur_point[0] && coords[1] == this.cur_point[1]) return true;
      return false;
    },
    is_share(item){
      return item.type == 'shares';
    },
    is_share_AND_equals_coords(item){
      return this.is_share(item) && this.is_equals_coords(item.coords);
    },
    is_service(item){
      return item.type == 'service';
    },
    is_service_AND_equals_coords(item){
      return this.is_service(item) && this.is_equals_coords(item.coords);
    },
    //-----------------ИНИЦИАЛИЗАТОРЫ---------------------
    initHandler: function (myMap) {
      //Инициализация карты и прочей фигни
      this.mapInstanse = myMap;
      this.intit_events_DrawPolygonByFinger();
      this.add_actions_info();
      this.categories = this.getCategoties_from_server();
      this.init_regions();
    },
    add_actions_info(){
      //добавление Акций при загрузке компонента
      this.shares = this.getShares_from_server();
      this.add_placemarks_on_map(this.shares);
    },
    //----------------РЕГИОНЫ------------------------------
    init_regions: function(){
      //Считать данные о регионах
      ymaps.regions.load('RU', {
        lang: 'ru',
        quality: 1
      }).then(this.remember_regions, function () {
        alert('No response');
      });
    },
    remember_regions: function( result ){
      //сохраняем гео объекты регионов в переменной data.regions
      this.regions = result.geoObjects; // ссылка на коллекцию GeoObjectCollection
      result.geoObjects.events.add('click', this.click_on_region);//добавляем обработчик срабатывающий при нажатии региона
    },
    click_on_region: function(event){
      //если кликнули по региону, то
      //запомнили в перемнных id и имя региона
      let region = event.get('target');
      this.osmId = region.properties.get('osmId');
      this.region_name = region.properties.get('name');
      console.log(this.region_name + ' -> ' + this.osmId);//debug
      //передаем координаты региона
      let coords = region.geometry.getCoordinates()[0];
      this.placemarks = this.getInfoForPoligon_from_server(coords);
      //убираем все регионы
      this.ClearMap();
      //высвечиваем метки
      this.add_actions_info();
      this.add_placemarks_on_map(this.placemarks);
      this.get_low_and_high_price_from_placemarks(this.placemarks);
      this.tags = this.get_categoryes_from_placemarks(this.placemarks);
      this.click_btn_ShowAllTags();
      //добавляем этот регион на карту
      this.mapInstanse.geoObjects.add(region);
    }
  }
})
var shares = [
  {
    coords: [55.05980129774418, 40.562484643066426],
    name: 'Маникюр - 30%',
    imageUrl: 'images/car1.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 55',
    countReviews: 123,
    stars: 4,
    url: '#1'
  },
  {
    coords: [60.05980129774418, 40.562484643066426],
    name: 'СТО - 30%',
    imageUrl: 'images/car1.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 55',
    countReviews: 123,
    stars: 3,
    url: '#1'
  },
  {
    coords: [60.05980129774418, 50.562484643066426],
    name: 'Автомойка - 30%',
    imageUrl: 'images/car1.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 55',
    countReviews: 123,
    stars: 5,
    url: '#1'
  },
  {
    coords: [60.05980129774418, 60.562484643066426],
    name: 'Ногти - 30%',
    imageUrl: 'images/car1.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 55',
    countReviews: 123,
    stars: 2,
    url: '#1'
  }
];
var responce = [
  {
    coords: [57.05980129774418, 40.562484643066426],
    name: 'Золотой слон - подставка',
    imageUrl: 'images/car1.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 55',
    countReviews: 0,
    price: 7000,
    stars: 2,
    tag: 'Книги',
    url: '#1'
  },
  {
    coords: [57.254808646433844, 39.13975515087893],
    name: 'Игрушечные слоны',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    price: 10000,
    stars: 5,
    tag: 'Игрушки',
    url: '#2'
  },
  {
    coords: [55.254808646433844, 40.13975515087893],
    name: 'Игрушечные слоны',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    price: 8000,
    stars: 5,
    tag: 'Игрушки',
    url: '#2'
  },
  {
    coords: [60.254808646433844, 39.13975515087893],
    name: 'Игрушечные слоны',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    price: 9000,
    stars: 5,
    tag: 'Игрушки',
    url: '#2'
  },
  {
    coords: [60.254808646433844, 39.13975515087893],
    name: 'Игрушечные слоны',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 43,
    price: 5000,
    stars: 5,
    tag: 'Игрушки',
    url: '#2'
  },
  {
    coords: [55.98721616095246, 39.733016869628926],
    name: 'Зоопарк',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 1000,
    price: 6000,
    stars: 3,
    tag: 'Развлечения',
    url: '#3'
  },
  {
    coords: [59.98721616095246, 39.733016869628926],
    name: 'Зоопарк',
    imageUrl: 'images/car3.jpg',
    address: 'Белгород, улица Щорса, 123Б',
    phoneNumber: '+ 7 (XXX) XX - 22',
    countReviews: 1000,
    price: 5000,
    stars: 3,
    tag: 'Развлечения',
    url: '#3'
  }
];

