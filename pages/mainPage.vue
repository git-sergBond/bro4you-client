<template>
    <div>
        <div class="map-comp"
             @mouseup='mouseup_event_DrawPolygonByFinger' @mousedown='mousedown_event_DrawPolygonByFinger'>
            <yandex-map class="ymap" zoom="8"
                        :controls="['zoomControl']" :coords="coords"
                        @map-was-initialized="initHandler"></yandex-map>
        </div>
        <authorization class="authorization"></authorization>
        <div class="top-panel">
            <search-map :P_message="message"
                        @event_show_category_trig="show_category_trig = !show_category_trig" @event_click_btn_search="click_btn_search" ></search-map>

            <div class="top-panel--buttons">
                <div class="button-left" v-show='stateApp == 0' @click='click_btn_Start_Edit'><span>Нарисовать область</span></div>
                <div class="button-left" v-show='stateApp == 1 || stateApp == 2 || stateApp == 3 ' @click='click_btn_Clear'><span>Очистить</span></div>
                <div class="button-left-f" v-show='stateApp == 0' @click='click_btn_choose_region'><span>Выбрать регионы</span></div>
                <div class="button-left-f" v-show='stateApp == 3' @click='click_btn_show_result_for_regions'><span>Показать результат</span></div>
            </div>
        </div>
        <div class="backdrop" :class="{'backdrop-on': show_category_trig}"></div>
        <category class="app--categories" v-show="show_category_trig" @event_category_filter = "swithcat" @event-clear="click_btn_ShowAllTags"></category>

        <!-- боковая информационная панель -->

        <place-info-map class="info-mark"
                        @event_close_p="close_info_p"
                        :P_placemarks="placemarks" :P_cur_point="cur_point"
                        :F_is_equals_coords="is_equals_coords" >
        </place-info-map>

        <!-- боковая информационная панель конец-->


        <!-- фильтры начало-->

        <div class="filter-buttons">
            <div class="angle-hex-left" @click="num_filter = 0">
                <img class="img-format" src="images/icons/filter.png"/>
            </div>
            <div class="angle-hex-item item1" @click="num_filter = 1">
                <img class="img-format" src="images/icons/price.png"/>
            </div>
            <div class="angle-hex-item item2" @click="num_filter = 2">
                <img class="img-format" src="images/icons/region.png"/>
            </div>
            <div class="angle-hex-item item3" @click="num_filter = 3">
                <img class="img-format" src="images/icons/catergories.png"/>
            </div>
        </div>
        <filters-map class="filter-form" v-if="num_filter != 0"
                     @event_close="num_filter = 0"
                     :P_num_filter="num_filter"
                     :P_placemarks='placemarks'
                     :P_categories='categories' :P_cur_category='cur_category'
                     @event_click_btn_changeTag="click_btn_changeTag"
                     @event_click_btn_ShowAllTags="click_btn_ShowAllTags"
                     :P_rang_price='rang_price'
                     :P_low_price='low_price' :P_high_price='high_price'
                     :P_colors="colors"
                     @event_change_txt_priceFilter = "change_txt_priceFilter"
                     :P_filter_regions="filter_regions"
                     @event_click_btn_changeRegion="click_btn_changeRegion" >
        </filters-map>

        <!-- фильтры конец-->
        <!-- Блок акций -->
        <div class="shares">
            <div class="shares--button" @click="trigShares = !trigShares" >
                <p >Здесь вы можете посмотреть скидки</p>
            </div>
                <shares v-show="trigShares" class="shares--scroll"
                        :coords="cur_point"
                        :shares_data="shares_d"
                        :F_is_equals_coords="is_equals_coords"
                        @click_on_card="click_on_card"
                ></shares>
        </div>
        <!-- блок акций конец -->

        <div class="logo">
            <img src="images/rast.jpg"/>
        </div>

        <form-autorize></form-autorize>
    </div>
</template>

<script>
    var LOC_STORE = null;
    import axios from 'axios';
    import TOKENS from '../TOKENS'
    import shares from '../components/shares.vue';
    import category from '../components/category.vue';
    import searchMap from '../components/searchMap.vue';
    import filtersMap from '../components/filtersMap.vue';
    import placeInfoMap from '../components/placeInfoMap.vue'
    import  authorization from '../components/authorization.vue';
    import formAutorize from '../components/formAutorize.vue';
    export default {
        name: "mainPage",
        //el: '',
        data: function() {
            return {
                message: 'Введите название услуги',
                mapInstanse: null,
                coords: [54.82896654088406, 39.831893822753904],//начальный фокус на карте
                shares_d: [],
                //-------------GeoObjects---------
                ExtremePoins: {//определение квадрата поиска, (максимальные точки)
                    //максимальные точки в квадрате
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    //максимальные точки в окружности
                    center: 0,
                    radius: 0
                },
                poly_line: [],
                cur_point: null,//текущая выделенная метка на карте (нужно для подсветки)
                placemarks: [],//координаты услуг+данные ---------->services

                polygonEdit: null,//gполигон для редактирования
                line: null,//линия для обвода мышкой
                lineStringGeometry: null,//геометрия для линии обвода мышкой
                positionsOnPoligon: [],//массив хранящий информацию о координатах, относительно левого верхнего угла в формате Декартовых координат
                //-------------State and GUI-------
                stateApp: 0, //состояние приложения
                /*
                0 - перемешение карты, и просмотр информации о услугах
                1 - редактирование полигона
                2 - редактирвание мышью
                3 - специально для фильтра по регионам
                */
                //------------Data------------
                /*
                |   Исправить термины ТЕГ на КАТЕГОРИЯ
                |
                 */
                //для фильтра категорий
                show_category_trig: false,//+
                categories: [],
                cur_category: 'All',
                num_filter: 0,//выбор фильтра 0-нет 1-деньги 2-регионы 3-категории
                save_old_p: null,//сохранить старое значение точки
                //для фильтра цен
                low_price: 0,
                high_price: 0,
                colors: ['blue', 'darkgreen', 'orange', 'red'],
                rang_price: null,
                //для фильтра регионов
                noVisibleRegions: null,
                regions: null,//Здесь в 1й раз загружаются регионы и используются далее в приложении
                filter_regions: null,// [{name ,check},{}]
                //osmId: null,
                //region_name: null,
                //триггеры областей
                trigShares: false,
            }
        },
        components: {
            category,
            shares,
            searchMap,
            filtersMap,
            placeInfoMap,
            authorization,
            formAutorize
        },
        methods: {
            close_info_p: function(){
                this.save_old_p=[
                    this.cur_point[0],
                    this.cur_point[1]
                ];
                this.cur_point=null;
            },
            open_info_p: function(){
                if(this.cur_point==null){
                    this.cur_point = this.save_old_p;
                }
            },
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
            async totalQusery(){
                let modifiResponse = [];
                axios.defaults.headers.common['Authorization'] = localStorage.getItem(TOKENS.AUTHORIZE);
                let result = await axios({url: 'ServicesAPI/getServices',data:{"authorization":localStorage.getItem(TOKENS.AUTHORIZE)}, method: 'GET' })
                    //console.log(result.data.services)
                    for(let { points , service, categories} of result.data.services){
                        for( let { latitude , longitude, phones } of points){
                           modifiResponse.push({
                                coords: [latitude,longitude],
                                name: service.name,
                                imageUrl: ['images/car3.jpg', 'images/car1.jpg', 'images/car2.jpeg'],
                                address: service.address,
                                phoneNumber:  phones,
                                countReviews: 0,
                                price: service.pricemax,
                                stars: 5,
// !!! СДЕЛАТЬ, чтобы можно было юзать несколько категорий
                                category: categories,
// !!! !!! !!! !!! !!! !!!
                                url: '#1'
                            });
                            console.log(categories)
                        }
                    }
                return modifiResponse;
            },
            getInfoForPoligon_from_server: async function (search, coordinates) {
                //асинхронный запрос серверу
                //серверу запрос поиска + передается массив точек (вершин полигона)
                //принимается ответ от сервера в виде объекта с координатами и объектом info содержащим данные о чем-то
                console.log('requset to server (search msg + json array coordinates)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
                //console.log(coordinates)
                console.log('... become response (json array plasemarks with info)')//<-----------------  жду ответа
                
                return await this.totalQusery();
            },
            getInfoForPoligons_from_server: async function (search, coordinates) {
                //асинхронный запрос серверу
                //серверу запрос поиска + массив полигонов
                //принимается ответ от сервера в виде объекта с координатами и объектом info содержащим данные о чем-то
                console.log('requset to server (search msg + json array polygons)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
                //console.log(coordinates)
                console.log('... become response (json array plasemarks with info)')//<-----------------  жду ответа
                return await this.totalQusery();
            },
            getInfoForBounds_from_server: async function(search, bounds){
                //асинхронный запрос серверу
                //серверу строка запроса пользователя + координаты квадрата Л-В и П-Н
                //принимается ответ от сервера в виде объекта с координатами и объектом info содержащим данные о чем-то
                console.log('requset to server (string search msg + bounds rect)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
                console.log('... become response (json array plasemarks with info)')//<-----------------  жду ответа
                return await this.totalQusery();
            },
            get_Categories_and_polygon_from_server: async function(category, polygon){
// NOP
                return await this.totalQusery();
            },
            get_Categories_and_bounds_from_server: async function(category, bounds){
// NOP
                return await this.totalQusery();
            },
            /*
            getCategoties_from_server: function(){
                return ['Магазины Авто', 'Еда', 'Одежда', 'Ищут работу', "Транспорт", "Развлечения", "Драгоценности", "Банкоматы"];
            },*/
            getShares_from_server: function(bounds){
                //получить данные о рекламе и акциях в звдвнном районе
                console.log('requset to server (bounds rect)...')//-----------------> отправляю данные координат на сервер !!! дублируется 1 координата
                console.log('... become response (json array sahres with info)')//<-----------------  жду ответа
                return [
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
                this.positionsOnPoligon = [];//очищаем полигон в декартовой систме
                if (this.stateApp === 1) this.stateApp = 2;
            },
            mousemove_event_DrawPolygonByFinger(event){
                if (this.stateApp !== 2) return;
                let point = event.get('coords');
                let position = event.get('position');
                this.positionsOnPoligon.push(position);//добавляем точки для нахождения первого пересечения
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
                this.cur_category = 'All';
                //this.filter();
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
            click_btn_search: async function(event){
                //Кликнули на кнопку найти
                //если не указана область то
                //    передаем левую верхнюю и правую нижнюю координату области видимости
                //иначе передаем полигон в котором нужно искать и запрос
                this.ClearMap();
                this.add_actions_info();
                let bounds = this.mapInstanse.getBounds();//2 координаты
                if(this.polygonEdit == null){
                    this.placemarks = await this.getInfoForBounds_from_server(this.message, bounds);
                }else{
                    this.placemarks = await this.getInfoForPoligon_from_server(this.message, this.poly_line);
                }
                await this.add_placemarks_on_map(this.placemarks);
                this.categories = this.get_categoryes_from_placemarks(this.placemarks);
                this.click_btn_ShowAllTags();
                this.get_low_and_high_price_from_placemarks(this.placemarks);
            },
            change_category_event: async function(){
                //событие выбора категории из чекбокса
                this.ClearMap();
                this.add_actions_info();
                let bounds = this.mapInstanse.getBounds();//2 координаты
                if(this.polygonEdit == null){
                    this.placemarks = await this.get_Categories_and_bounds_from_server(this.cur_category, bounds);
                }else{
                    this.placemarks = await this.get_Categories_and_polygon_from_server(this.cur_category, this.poly_line);
                }
                await this.add_placemarks_on_map(this.placemarks);
                //this.categories = this.get_categoryes_from_placemarks(this.placemarks);
                //this.click_btn_ShowAllTags();
                this.get_low_and_high_price_from_placemarks(this.placemarks);
            },
            click_btn_choose_region: function(){
                //нажали на кнопку выбрать регион
                this.ClearMap();
                this.init_regions();//высвечиваем регионы на карте
                this.stateApp = 3;
            },
            click_btn_show_result_for_regions: async function(){
                let checked_regions = [];
                let coords = [];
                //проходимсся по коллекции
                let collection = await ymaps.geoQuery(this.mapInstanse.geoObjects)
                    .search("properties.user_check = true")//если пользователь выбрал регион
                    .each((region)=>{
                        checked_regions.push(region);//добавляем ссылку на регион во временный массив
                        coords.push(region.geometry.getCoordinates()[0]);//сохраняем каждый полигон
                    });
                //передаем координаты полигонов
                this.placemarks = await this.getInfoForPoligons_from_server(coords);
                //убираем все регионы
                this.ClearMap();
                //высвечиваем метки
                this.add_actions_info();
                await this.add_placemarks_on_map(this.placemarks);
                this.get_low_and_high_price_from_placemarks(this.placemarks);
                this.categories = this.get_categoryes_from_placemarks(this.placemarks);
                this.click_btn_ShowAllTags();
                //добавляем каждый регион на карту
                this.filter_regions = [];//сохраняем информацию для фильтра по регионам
                checked_regions.forEach(region => {
                    this.mapInstanse.geoObjects.add(region);
                    //сохраняем информацию для фильтра по регионам
                    const nameRegCurPoint = region.properties.get('name');
                    const addObj = { name: nameRegCurPoint, check: true };
                    if (this.filter_regions.indexOf(addObj) == -1) this.filter_regions.push(addObj);
                });
                this.filter();
                this.stateApp = 0;
            },
            filter: function(){
                //Фильтры
                let context = this;
                let collection = ymaps.geoQuery(this.mapInstanse.geoObjects)
                    .search('geometry.type = "Point"')
                    .search(`properties.price > 0`)//удаляем акции из выбрки
                    .setOptions('visible', false)//очищаем все на карте
                    .setProperties('del', true)
                    //фильтр в заданной области
// !!!  .searchInside(this.polygonEdit)//ищем точки в полигоне
                    //фильтр цен
                    .search(`properties.price >= ${this.low_price}`)
                    .search(`properties.price <= ${this.high_price}`)
                    .each(p => {
                        //фильтр категорий
                        const cat = p.properties.get('category');
                        console.log('filter')
                        let fCat = true
                        if(cat.length == 0){
                            if(context.cur_category.indexOf("Категория не указана")==-1) fCat=false;
                        } else {
                            for(let {categoryname} of cat){
                                if(context.cur_category.indexOf(categoryname)==-1) fCat=false;
                            }
                        }
                        if(!fCat) return;
                        //регионов
                        const reg = p.properties.get('region');
                        if(context.filter_regions != null){
                            let reg_res = false;
                            for(let region of context.filter_regions){
                                if(region.name == reg && region.check != false) reg_res = true;
                            }
                            if(reg_res==false) return;
                        }
                        p.properties.set('del', false)
                    })
                    //фильтр в заданной области
                    .then(()=>{
                        let inSide =
                            collection.search(`properties.del = false`).searchInside(context.polygonEdit);//ищем точки в полигоне
                        collection.remove(inSide)//находим точки в не диапазона
                            .setProperties('del', true);
                        collection.search(`properties.del = false`).setOptions('visible', true)//очищаем все на карте
                    })
            },
            click_btn_changeTag: function(tag){
                //При уточнении категрии все прочие метки скрываются на карте
                let i = this.cur_category.indexOf(tag);
                if(i == -1)
                    this.cur_category.push(tag);//+ запомнили фильтр тего
                else
                    this.cur_category.splice(i,1);//далили
                this.filter();
            },
            click_btn_ShowAllTags: function(){
                //Очистить фильтр уточнения всех меток
                this.cur_category = this.get_categoryes_from_placemarks(this.placemarks);
                this.categories = [...this.cur_category];//
                this.get_low_and_high_price_from_placemarks(this.placemarks);
                this.filter();
            },
            change_txt_priceFilter: function(e){
                //Метод оставляет только те метки которые соответствуют услуге с заданной стоимостью
                this.low_price  = e.low_price;
                this.high_price = e.high_price;
                this.filter();
            },
            //------------Обработчики остальных объектов ---------
            clear_color_marks: function(){
                // Цвет всех меток очищается
                return ymaps.geoQuery(this.mapInstanse.geoObjects)
                    .search('geometry.type = "Point"')
                    .setOptions('preset', 'twirl#blueStretchyIcon');
            },
            //--------------События для меток--------------------
            click_Placemark: function (event) {
                //при клике на метке, в блоке информации выделяеются даныне и сама метка
                this.cur_point = event.get('target').geometry.getCoordinates();
                let collection =  this.clear_color_marks();//делаем все метки синими
                this.placemarks.forEach(el => {//выделение иконки согласно ее цене
                    let coord_0 = el.coords[0];
                    let coord_1 = el.coords[1];
                    let dot = '';
                    if(this.is_equals_coords(el.coords))
                    {
                        dot = 'Dot';// выделение текущей меткя
                        this.cur_category = el.category;// переключение  на вкладку с меткой
                    }
                    this.set_color_pmark(collection,coord_0,coord_1,el.color+dot);
                });
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
            make_shares_hint: function () {
                // Создание макета содержимого хинта.
                // Макет создается через фабрику макетов с помощью текстового шаблона.
                let HintLayout = ymaps.templateLayoutFactory.createClass(
                    "<div class='my-hint'>" +
                    "<img src = '{{ properties.imageUrl }}'>"+
                    "<p><b>{{ properties.name }}</b>" +
                    "<br/>{{ properties.address }}" +
                    "<br/>{{ properties.phoneNumber }}" +
                    "<br/><b>АКЦИЯ</b> " +
                    "</p></div>", {
                        // Определяем метод getShape, который
                        // будет возвращать размеры макета хинта.
                        // Это необходимо для того, чтобы хинт автоматически
                        // сдвигал позицию при выходе за пределы карты.
                        getShape: function () {
                            var el = this.getElement(),
                                result = null;
                            if (el) {
                                var firstChild = el.firstChild;
                                result = new ymaps.shape.Rectangle(
                                    new ymaps.geometry.pixel.Rectangle([
                                        [0, 0],
                                        [firstChild.offsetWidth, firstChild.offsetHeight]
                                    ])
                                );
                            }
                            return result;
                        }
                    }
                );
                return HintLayout;
            },
            make_service_hint: function () {
                // Создание макета содержимого хинта.
                // Макет создается через фабрику макетов с помощью текстового шаблона.
                let HintLayout = ymaps.templateLayoutFactory.createClass(
                    "<div class='my-hint'>" +
                    "<img src = '{{ properties.imageUrl[0] }}'>"+
                    "<p><b>{{ properties.name }}</b>" +
                    "<br/>{{ properties.address }}" +
                    "<br/>{{ properties.phoneNumber[0] }}" +
                    "<br/><b>{{ properties.price }} Руб.</b>" +
                    "</p></div>", {
                        // Определяем метод getShape, который
                        // будет возвращать размеры макета хинта.
                        // Это необходимо для того, чтобы хинт автоматически
                        // сдвигал позицию при выходе за пределы карты.
                        getShape: function () {
                            var el = this.getElement(),
                                result = null;
                            if (el) {
                                var firstChild = el.firstChild;
                                result = new ymaps.shape.Rectangle(
                                    new ymaps.geometry.pixel.Rectangle([
                                        [0, 0],
                                        [firstChild.offsetWidth, firstChild.offsetHeight]
                                    ])
                                );
                            }
                            return result;
                        }
                    }
                );
                return HintLayout;
            },
            //---------------- ОТРИСОВКА ОБЛАСТИ НА КАРТЕ---------
            getInfoRegionFromPoint: async function(p){
                let mapInst = this.mapInstanse;
                let nVizReg = this.noVisibleRegions;
                // !!! оптимизировать загрузку полигонов
                //+ накинуть плюхи контекста
                //console.log(store.state.RUregions)
                if(LOC_STORE== null){
                    LOC_STORE = ymaps.geoQuery(ymaps.regions.load('RU'));
                    await LOC_STORE.then((resolve)=>{
                        LOC_STORE.each(reg => {
                        reg.geometry.setMap(mapInst);
                        reg.geometry.options.setParent(mapInst.options);
                        })
                    })
                }
                let name = await LOC_STORE.searchContaining(p).get(0).properties.get('name');
                return name;
            },
            add_placemarks_on_map: async function(arr_placemarks){
                //добавление меток на карту и информации о них
                let HintShare = this.make_service_hint();
                let HintServ = this.make_shares_hint();
                let myCollection = new ymaps.GeoObjectCollection();//создаем коллекцию для поиска по точкам
                let filter_regions = this.filter_regions = [];//сохраняем информацию для фильтра по регионам
                for(let placemark of arr_placemarks){
                    let p = new ymaps.Placemark(placemark.coords, {}, {
                        hintLayout: (placemark.price == null || placemark.price == undefined) ? HintServ : HintShare
                    });
                    myCollection.add(p);//добавляем каждую точку в коллекцию
                    p.properties.set({
                        name: placemark.name,
                        imageUrl: placemark.imageUrl,
                        address: placemark.address,
                        phoneNumber: placemark.phoneNumber,
                        countReviews: placemark.countReviews,
                        price: placemark.price,
                        stars: placemark.stars,
                        category: placemark.category,
                        region: ''
                    });
                    p.events.add('click', this.click_Placemark);
                    this.mapInstanse.geoObjects.add(p);
                    //сохраняем информацию для фильтра по регионам
                    const reg = await this.getInfoRegionFromPoint(p);
                    p.properties.set('region',reg);
                        //поиск совпадений
                    let indReg = true;
                    for (const {name} of filter_regions){
                        //console.log(name + "///" + reg)
                        if (name == reg) {
                            indReg = false;
                            break;
                        }
                    }
                        //добавление региона если нет совпадений
                    if(indReg){
                        filter_regions.push({
                            name: reg,
                            check: true
                        }); 
                    }
                }
                return myCollection;
            },
            replacePoint: function(p1, p2){
                const X = 0;
                //если нужно, то меняем точки местами по оси X
                if (p1[X] < p2[X]) p1, p2 = p2, p1
                const Y = 1;
                //если нужно, то меняем точки местами по оси Y
                //if (p1[Y] < p2[Y]) p1, p2 = p2, p1
            },
            intersectionX: function(l1, l2){
                const X = 0;
                if (l1.p2[X] <= l2.p1[X]) return false;
                return true;
            },
            intersectionY: function(l1, l2){
                const Y = 1;
                if (!((Math.max(l1.p1[Y], l1.p2[Y]) < Math.min(l2.p1[Y], l2.p2[Y])) ||
                (Math.min(l1.p1[Y], l1.p2[Y]) > Math.max(l2.p1[Y], l2.p2[Y])))) return true;
                return false;
            },
            intersectionEVCLID: function(x1, y1, x2, y2, x3, y3, x4, y4){
                let z = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4);
                if(z == 0) return false
                let Px = ((x1*y2 - y1*x2)*(x3 - x4) - (x1-x2)*(x3*y4 - y3*x4))/z;
                let Py = ((x1*y2 - y1*x2)*(y3 - y4) - (y1-y2)*(x3*y4 - y3*x4))/z;
                return {Px, Py}
            },
            alg_simplifi_line(arr_in){
                let lenSimplifi = 5;
                //проверка на первое пересечение 
                let {positionsOnPoligon, replacePoint, intersectionX, intersectionY, intersectionEVCLID} = this;
                let intersectionIndex = null;
                let listPoints = positionsOnPoligon//.filter((e, i, arr) => i % lenSimplifi == 0)
                let listLines = []; 
                listPoints.forEach((e, i, a) => {
                    if((i+1) % 2 == 0){
                        listLines.push({
                            p1: e,
                            p2: a[i-1]
                        })
                    }
                })
                let listIntersPoints = []
                for (let i = 0; i < listLines.length-1; i++) {
                    const line1 = listLines[i];
                    for (let j = 0; j < listLines.length; j++) {
                        const line2 = listLines[j];
                        if(intersectionX(line1,line2) && intersectionY(line1,line2)){
                            listIntersPoints.push(Math.min(i, j));
                        }
                        //console.log('evc = '+intersectionEVCLID(line1.p1[0],line1.p1[1],line1.p2[0],line1.p2[1],line2.p1[0],line2.p1[1],line2.p2[0],line2.p2[1]).Px)
                    }
                }
                //уменьшение колличества точек на линии
                let simle_arr = [];
                simle_arr.push(arr_in[0]);
                for (let index = 0; index < arr_in.length; index++) {
                    const el = arr_in[index]
                    /*
                    let br = false
                    listIntersPoints.forEach(p => {
                        if(p[0] == el[0] || p[1] == el[1] || p[0] == el[1] || p[1] == el[0]) br = true;
                    })
                    if(br) break*/
                    /*if(listIntersPoints.length > 0){
                        if(listIntersPoints[0]*lenSimplifi <= index)
                            break;
                    }*/
                    if(index % lenSimplifi <= 0) simle_arr.push(el);
                }
                simle_arr.push(arr_in[arr_in.length-1]);
                return simle_arr;
            },
            get_categoryes_from_placemarks(placemarks){
                //Когда приходит массив данных, м записываем все имеющиеся категории в массив
                //что бы уточнить
                let tags = [];
                for (let i = 0; i < placemarks.length; i++) {
                    console.log(placemarks[i].category)
                    if(placemarks[i].category.length == 0){
                        const catUndif = "Категория не указана";
                        if(tags.indexOf(catUndif) === -1) tags.push(catUndif);
                    } else {
                        for(let {categoryname} of placemarks[i].category){
                            if(tags.indexOf(categoryname) === -1) tags.push(categoryname);
                        }
                    }
                }
                return tags;
            },
            get_low_and_high_price_from_placemarks: function (placemarks) {
                console.log("Price")
                
                for(let p of placemarks){
                    console.log(p)
                }
                //Находим максимально и минимальное  значение для цен
                //+ ранжирование цен посредствам цвета метки (1)
                let low_price = Number(placemarks[0].price);
                let high_price = Number(placemarks[0].price);
                for (let i = 0; i < placemarks.length; i++) {
                    let el = Number(placemarks[i].price);
                    if (el > high_price) high_price = el;
                    if (el < low_price) low_price = el;
                }
                console.log("Price1")
                this.low_price = low_price;
                this.high_price = high_price;
                /*  (1) во время прохода выставляем цвета для ранжирования меток по цене
                    blue - 0 до 25%
                    darkgreen - 25 до 50%
                    orangeIcon - 50 до 75%
                    red - 75% до 100%
                    этот цвет вставляется в каждый элемент массива объектов placemarks
                */
                let collection = this.clear_color_marks();// Цвет всех меток выставляется согласно цене
                let colors = this.colors;
                let proporion = (high_price - low_price) / colors.length;
                this.rang_price = [];
                for (let j = 0; j < colors.length; j++) {
                    this.rang_price.push(proporion * j + low_price);
                }
                for (let i = 0; i < placemarks.length; i++) {
                    let price = Number(placemarks[i].price);
                    let color = colors[0];
                    for (let j = 0; j < colors.length; j++) {
                        if (price >= (proporion * j + low_price)) {
                            color = colors[j];
                        }
                    }
                    placemarks[i].color = color;//запомнили цвет для метки
                    let coord_0 = placemarks[i].coords[0];
                    let coord_1 = placemarks[i].coords[1];
                    this.set_color_pmark(collection,coord_0,coord_1,color);
                }
            },
            set_color_pmark: function (collection, coord_0, coord_1, color) {
                // Цвет всех меток выставляется согласно colors в options
                collection
                    .search("geometry.coordinates.0 = " + coord_0)
                    .search("geometry.coordinates.1 = " + coord_1)
                    .setOptions('preset', 'islands#'+color+'Icon');
            },
            /*
            | функция повторяется в конце
            |
            |
            */
            getExtrimePoints: function(arr_coord){
                //определение максимально даленных точек в массиве точек по ширине и высоте
                let myCollection = new ymaps.GeoObjectCollection();//создаем коллекцию для поиска по точкам
                for (var i = 0; i<arr_coord.length; i++) {//добавляем каждую точку в коллекцию
                    myCollection.add(new ymaps.Placemark(arr_coord[i]));
                }
                //вычисляем центр и радиус
                //находим крайние точки
                let top = ymaps.geoQuery(myCollection).getExtremeObject('top');
                let right = ymaps.geoQuery(myCollection).getExtremeObject('right');
                let left = ymaps.geoQuery(myCollection).getExtremeObject('left');
                let bottom = ymaps.geoQuery(myCollection).getExtremeObject('bottom');
                //считываем координаты точек
                top = top.geometry.getCoordinates();
                right = right.geometry.getCoordinates();
                let pd1 = [top[0],right[1]];//нашли правую точку на диагонали
                left = left.geometry.getCoordinates();
                bottom = bottom.geometry.getCoordinates();
                let pd2 = [bottom[0],left[1]];//нашли левую точку на диагонали
                let diameter = Math.sqrt(Math.pow((pd1[0] - pd2[0]),2) + Math.pow((pd1[1] - pd2[1]),2));
                let radius = diameter/2;//нашли радиус
                let pcenter = [//нашли точку лежащую по середине диагонали
                    (pd2[0] + pd1[0]) / 2,
                    (pd2[1] + pd1[1]) / 2
                ];
                //созраняем рузультат
                return {
                    top: ymaps.geoQuery(myCollection).getExtreme('top'),//проводим поиск по коллеекции
                    bottom: ymaps.geoQuery(myCollection).getExtreme('bottom'),
                    left: ymaps.geoQuery(myCollection).getExtreme('left'),
                    right: ymaps.geoQuery(myCollection).getExtreme('right'),
                    center: pcenter,
                    radius: radius,
                    pd1: pd1,
                    pd2: pd2,
                };

            },
            Send_Polygon: async function () {
                //ищем среди объектов полигон и отправляем его на сервер
                let coordinates = this.lineStringGeometry.getCoordinates();
                //!добавляем точку в конец, чтобы не делать преобразований с полигоном
                this.lineStringGeometry.insert(this.lineStringGeometry.getLength(),this.lineStringGeometry.getCoordinates()[0]);
                //упрощаем геометрию линии, что бы можно было построить полигон
                let simple_line = this.alg_simplifi_line(coordinates);
                this.poly_line = simple_line;
                //определение крайних (максимальных точек)
                this.ExtremePoins = this.getExtrimePoints(simple_line);
                // передача информауии на сервер
                this.placemarks = await this.getInfoForPoligon_from_server(simple_line);
                this.ClearMap();
                this.add_actions_info();
                //как пришел ответ идет добавление меток на карту и информации о них
                await this.add_placemarks_on_map(this.placemarks);//добавили избыточное колличество точек на карту
                // что бы не нарушить последовательность, тут вынесена строка *577*
                await this.get_low_and_high_price_from_placemarks(this.placemarks);
                this.categories = await this.get_categoryes_from_placemarks(this.placemarks);
                this.click_btn_ShowAllTags();
                this.polygonEdit = await this.NewPolygon(simple_line);
                // *577* строка вынесена, тк принимает вторым аргументом полигон
                await this.filter();// убираем все точки не удовлетворяющие полигону
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
            is_share_AND_equals_coords(item){
                return shares.is_share(item) && this.is_equals_coords(item.coords);
            },
            is_service(item){
                return item.type == 'service';
            },
            is_service_AND_equals_coords(item){
                return this.is_service(item) && this.is_equals_coords(item.coords);
            },
            swithcat: function(categories){
                // переключили категории
                // services  <----------X server
                this.change_category_event();
                this.cur_category = this.get_categoryes_from_placemarks(this.placemarks);

                this.categories = categories.map(e => e.name);
                this.show_category_trig = !this.show_category_trig;
            },
            click_btn_changeRegion: function(P_filter_regions){
                this.filter_regions = P_filter_regions;
                this.filter();
            },
            //-----------------ИНИЦИАЛИЗАТОРЫ---------------------
            initHandler: function (myMap) {
                //Инициализация карты и прочей фигни
                this.mapInstanse = myMap;
                this.intit_events_DrawPolygonByFinger();
                this.add_actions_info();
               // this.categories = this.getCategoties_from_server();
            },
            add_actions_info: async function(shares_data){
                this.shares_d = this.getShares_from_server();
                await this.add_placemarks_on_map(this.shares_d);
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
                this.mapInstanse.geoObjects.add(this.regions);//высвечиваем регионы на карте
                ymaps.geoQuery(this.regions).applyBoundsToMap(this.mapInstanse);//изменяем масштаб карты, чтобы увидеть все регионы
            },
            click_on_region: function(event){
                //если кликнули по региону, то
                //запомнили в перемнных id и имя региона
                let region = event.get('target');
                //this.osmId = region.properties.get('osmId');
                //this.region_name = region.properties.get('name');
                //console.log(this.region_name + ' -> ' + this.osmId);//debug
                if(region.options.get('fillColor')!='#66FF0099'){
                    region.options.set('fillColor','#66FF0099');
                    region.properties.set('user_check',true);
                }else{
                    region.options.set('fillColor','#0066ff99');
                    region.properties.set('user_check',false);
                }
            }
        }
    }
        
</script>
<style>
    .my-hint {
        display: inline-block;
        position: relative;
        left: -10px;
        font-size: 0.8rem;
        color: #333333;
        text-align: left;
        vertical-align: middle;
        background-color: white;
        border-width: 0;
        font-family: Arial;
        box-shadow: 0 0 10px black;
        min-width: 350px;
    }
    .my-hint img {
        width: 170px;
        float: left;
    }
    .my-hint p{
        margin-left: 173px;
        padding-top: 3px;
    }
</style>

<style scoped >
    /**/
    .authorization{
        position: absolute;
        bottom: 100px;
        left: 46.6%;
    }
    /*Информационная панель*/
    .info-mark{
        position: absolute;
        top: 25%;
        right: 0px;
    }
    .info-mark--button{
        position: absolute;
        top: 30%;
        height: 32px;
        width: 32px;
        right: -32px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 10px 0 30px 1px;
    }
    .info-mark--button:before, .info-mark--button:after{
        content: "";
        position: absolute;
        right: 0;
    }
    .info-mark--button:before{
        top: -15px;
        border-bottom: 15px solid white;
        border-left: 32px solid transparent;
    }
    .info-mark--button:after{
        bottom: -15px;
        border-top: 15px solid white;
        border-left: 32px solid transparent;
    }
    .info-mark--button img{
        height: 40px;
        width: 32px;
    }
    .info-mark--button img.reverce{
        transform: scale(-1, 1);
    }
    /*скроллбар*/
    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
    /*Акции*/
    .shares{
        --height-area: 300px;
        --width-area: 300px;
        --height-button: 32px;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 0;
        width: 0;
        overflow: visible;
    }
    .shares--button{
        position: absolute;
        right: 0;
        bottom: 0;
        width: var(--width-area);
        height: var(--height-button);
        background-color: white;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: -8px 3px 30px -3px black;
    }
    .shares--button p {
        margin: 0;
    }
    .shares--button:after{
        content: "";
        position: absolute;
        left: -15px;
        border-left: 15px solid transparent;
        border-bottom: var(--height-button) solid white;
    }
    .shares--scroll{
        position: absolute;
        right: 0;
        bottom: var(--height-button);
        width: var(--width-area);
        height: var(--height-area);
        overflow-y: scroll;
        display: flex;
        justify-content: center;
    }
    /*начало для кнопок для правоговерхнего угла*/
    .button-left, .button-left-f{
        --height: 32px;
        --bcolor: white;
        --spadding: 1.2rem;
        /*padding-right: var(--spadding);*/
        height: var(--height);
        background-color: var(--bcolor);
        color: black;
        font-weight: bold;
        font-size: 1rem;
        display: flex;
        align-items: center;
        box-shadow: 5px 1px 10px -2px black;
        box-shadow: 10px 1px 10px -2px black;

    }
    .button-left:before{
        --proporions: calc(var(--height) / 1.414);
        content: "";
        position: relative;
        top: 0px;
        left: calc(var(--proporions) / (-2) );
        width: var(--proporions);
        height: var(--proporions);
        background-color: var(--bcolor);
        transform: rotate(45deg);
        box-shadow: -2px 2px 2px -3px black;
    }
    .button-left-f:before{
        --proporions: calc(var(--height) / 1.414);
        content: "";
        position: relative;
        top: 0px;
        left: calc(var(--proporions) / 2 );
        width: var(--proporions);
        height: var(--proporions);
        background-color: transparent;
        border: 1px solid transparent;
        border-bottom-color: black;
        border-left-color: black;
        transform: rotate(45deg);
    }
    /*конец кнопок*/
    .top-panel{
        width: 100%;
        display: flex;
        justify-content: space-between;
        top: 5px;
        left: 0;
    }
    .top-panel--buttons{
        display: flex;
    }
    /**/
    .top-panel{
        z-index: 2;
        position: absolute;
    }
    .app--categories{
        z-index: 4;
        position: absolute;
    }
    /**/
    p, h1, a{
        font-family: 'Comfortaa', cursive;
        margin-left: 0.2rem;
        margin-top: 0.15rem
    }
    h1{
        font-size: 1.1em
    }
    .ymap {
        width: 100%;
        height: 99vh ;
    }
    .app--categories{
        top: 30%;
        left: 30%;
    }
    /*эффект затенения в меню*/
    .backdrop {
        position: fixed;
        z-index: 3;
        left: -100%;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        opacity: 0;
        transition: left 0.3s ease;
        transition: opacity 0.3s ease;
    }

    .backdrop-on {
        left: 0;
        opacity: 1;
    }
    /* кнопки для вызова фильтров */
    .filter-buttons{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 200px;
        height: 200px;
    }
    .filter-buttons .angle-hex-item, .filter-buttons .angle-hex-left{
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        --proporions: 40px;
        width: var(--proporions);
        /*height: var(--proporions);*/
    }
    .filter-buttons .angle-hex-left{
        left: 0;
        bottom: 0;
        box-shadow: 0 0 80px;
    }
    .filter-buttons .angle-hex-item{
        box-shadow: 0 0 50px black;
    }
    .filter-buttons .angle-hex-item:hover{
        box-shadow: 0 0 50px green;
    }
    .filter-buttons .angle-hex-item.item1{
        transform: rotate(13deg);
        bottom: 80px;
        left: 10px;
    }
    .filter-buttons .angle-hex-item.item2{
        transform: rotate(45deg);
        bottom: 54px;
        left: 54px;
    }
    .filter-buttons .angle-hex-item.item3{
        transform: rotate(77deg);
        bottom: 10px;
        left: 80px;
    }
    .filter-buttons .angle-hex-item:after{
        top: -10px;
        border-bottom: 10px solid white;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
    .filter-buttons .angle-hex-item:before{
        bottom: -10px;
        border-top: 10px solid white;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
    .filter-buttons .angle-hex-left:after,
    .filter-buttons .angle-hex-left:before,
    .filter-buttons .angle-hex-item:after,
    .filter-buttons .angle-hex-item:before{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
    }
    .filter-buttons .angle-hex-left:after{
        border-right:  15px solid transparent;
        border-bottom: 32px solid white; /* var(--proporions) */
        top: 0;
        right: -15px;
    }
    .filter-buttons .angle-hex-left:before{
        border-right: var(--proporions) solid transparent;
        border-bottom: 15px solid white;
        top: -15px;
        left: 0;
    }
    .filter-buttons .img-format{
        --proporions: 32px;
        width: var(--proporions);
        height: var(--proporions);
    }
    /*поле отображения фильтра*/
    .filter-form {
        --proporions: 500px;
        --width-head-and-foot: 400px;
        --height-head-and-foot: 100px;
        --pleft-head-and-foot: 50px;
        position: absolute;
        top: 10%;
        left: 25%;
        margin: auto;
        height: var(--proporions);
        width: var(--proporions);
    }
    /*логотип*/
    .logo{
        position: absolute;
        bottom: 0;
        left: 45%;
        --proporions: 40px;
        box-shadow: 0 0 50px;
        height: var(--proporions);
    }
    .logo:after, .logo:before{
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        bottom: 0;
    }
    .logo:after{
        right: -15px;
        border-right: 15px solid transparent;
        border-bottom: var(--proporions) solid white;
    }
    .logo:before{
        left: -15px;
        border-left:  15px solid transparent;
        border-bottom: var(--proporions) solid white;
    }
    .logo img{
        height: var(--proporions);
    }
</style>