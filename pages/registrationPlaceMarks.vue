<template>
    <div>
        <yandex-map class="ymap" zoom="8" :controls="['zoomControl']" :coords="coords" @map-was-initialized="initHandler"></yandex-map>
        <div class="info">
            <div v-if="!service">
                <P>Подождите, идет загрузка ...</P>
            </div>
            <form v-if="!!service" @submit.prevent="publish">
                <h3>Добавить услугу</h3>
                <label>Наименование услуги</label><input type="text" v-model="service.name" ><br>
                <hr>
                <label>Описание услуги</label><input type="text" v-model="service.description" ><br>
                <hr>
                <label>Стоимость услуги</label><br>
                    <label>от</label><input type="text" v-model="service.priceMin" >
                    <label>до</label><input type="text" v-model="service.priceMax" >
                <hr>
                <label>Фото</label>
                <drag-image ></drag-image>
                <hr>
                <label>Видео</label><input type="text" v-model="service.video" ><br>
                <hr>
                <label>Выбрать существующий адрес</label>
                <div v-for="point in service.existsPointsServices">
                    <input type="checkbox" v-model="point.active" @change="point.SetVisibleOnMap(point.active)">
                    <label @click="curPoint = point" >{{ point.name }}</label>
                </div>
                <hr>
                <div v-if="!!curPoint" >
                    <p>{{ curPoint.name }}</p>
                </div>
                <br><br>
                <button type="submit">Опубликовать</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import DragImage from '../components/DragImage.vue';
    import TOKENS from '../TOKENS'
    class Company{
        constructor(id = null, name = null){
            this.companyid = id;
            this.name = name
        }
        //запросы для данного объекта к базе
       async getListCompaniesFromUser(){
            //получить список компаний, владельцем которых явзяеся пользователь
            let listCompanies = await axios({url: 'CompaniesAPI/getCompanies', method: 'GET' })
            cosnole.log(cosnolistPointsServices.data.token)
            return listCompanies;
        }
    }
    class Service{
        constructor(name="",description="",priceMin=0,priceMax=0,photos=[],video="",region=null,newPointsServices=[],existsPointsServices=[],companies=null){
            this.name = name//название услуги 
            this.description = description//описание
            this.priceMin = priceMin//минимальная цена
            this.priceMax = priceMax// максимальная цена
            this.photos= photos
            this.video=video,//ссылка на видео из ютуба
            this.region=region, //osmID - если пользователь не указал точки оказания услуг (новые или существующие), то запичывается регион
            this.newPointsServices=newPointsServices//точки оказания услуг, которые нужно добавить в базу (подвязать к пользователю)
            // !!! БАГУЕТ, записывает в имя
            this.existsPointsServices=existsPointsServices // существуещих точек
            this.companies = companies // ид комании, если его нет, то передается -1 (мне нужен запрос для получения списка компаний по токену)
            //добавить тел, факс, почту, сайт, кома
        }
        /*
         * Запросы
         */
        //отправляю запрос на добавление услуги в БД
        QaddService(){
            axios({url: '/ServicesAPI/addService', data: this, method: 'POST' })
            .then(resp => {
                const status = resp.data.status
                const serviceId = resp.data.serviceId
                if(status == "OK"){
                    alert("Услуга добавлена")
                    //Отправляю запрос с добавлением картинок (если они есть)
                    axios({url: '/ServicesAPI/addImageHandler', data: {
                        serviceId
                    }, method: 'POST' })
                }else{
                    alert("Ошибка при добавлении услуги")
                }
            })
        }
    } 
    class TradePoint {
        //класс характеризующий точку оказания услуги
        constructor(point,mapIsnt){
            //данные принимаемые с сервера
            this.latitude = point.tradePoint.latitude;//широта
            this.longitude= point.tradePoint.longitude;//долгота
            this.name = point.tradePoint.name // название точки оказания услуг
            this.address= point.tradePoint.address;//адрес
     // ***       //this.index_500000= point.tradePoint.index_500000; // индекс квадранта в котором находится точка для масштаба 1 : 500 000
     // ***       //this.region= point.tradePoint.region;//osmID - ид регион в котором находится точка
            this.pointid = point.tradePoint.pointid;//идентификатор точки на карте
            this.phones = point.phones//массив телефонов
            
            //гуи
            this.mapIsnt = mapIsnt;
            this.pointInst = this.DrawOnMap();
            this.setActive(true); // индикатор показывающий, передавать точку на карту или нет 
            this.selected = false //нужен для показа номеров и прочей херни по точке
        }
        DrawOnMap(){
            console.log (2)
            let context = this
            console.log(3)
            let p = new ymaps.Placemark([this.latitude,this.longitude], {}, {})
            p.properties.set({
                linkOnStruct: context,//сылка на структуру, для обратной связи
            });
            this.mapIsnt.geoObjects.add(p);
            return p;
        }
        SetVisibleOnMap(vis){
            console.log(this.pointInst)
            this.pointInst.options.set({ "visible": vis});
        }
        DeleteFromMap(){
            
        }
        //Активный или нет? (формирует список того, что нужно передать на сервер)
        setActive(val){
            this.SetVisibleOnMap(val);
            this.active = val
        }
        //запросы для данного объекта к базе
        async getListTradePointFromCompny(){
            //получить все точки услуг компании
            
        }
        //посчитали индекс квадранта для заданного масштабы
        calculate_index_for_square(coord, scale=500000){
            let tableScale = [];
            // таблица масштабов
            // [масштаб] = [размер широты, оазмер долготы]
            tableScale[500000] = [2, 3];
            let degs = tableScale[scale];//вытащили размеры ячейки из таблицы
            let index = (coord[0] / degs[0]) * (coord[1] / degs[1] + 1);
            return index;
        }
    }
    export default {
        name: "registrationPlaceMarks",
        data: function() { return {
            service: null,
            //ссылки для структур
            curPoint: null,//по текущей точке показываются номера телефоно в  и теды
            //гуишные ссылки
            mapIsnt: null,
            coords: [55,55],
            placeMark: null//ссылка на метку на карте
        }},
        components: {
            DragImage
        },
        methods: {
            initHandler: async function (myMap) {
                //
                axios.defaults.headers.common['Authorization'] = localStorage.getItem(TOKENS.AUTHORIZE)

                //
                this.mapIsnt = myMap;
                //при инициализации библиотеки яндекс карт
                this.service = new Service();// создаем объект сервиса
                this.service.existsPointsServices = await this.getListTradePointFromUser();
                this.service.companies = []//Company.queries.getListCompaniesFromUser
                /*
                //добавляем метку которой можно менять координаты щелчком на карте
                this.placeMark = new ymaps.Placemark(this.coords, {}, {});
                myMap.geoObjects.add(this.placeMark);
                myMap.events.add('click', this.click_on_map);*/
            },
            /*
            click_on_map: function(event){
                //при клике на карте
                this.coords = event.get('coords');//запоминаем координаты
                this.placeMark.geometry.setCoordinates(this.coords);//меняем координаты метки
            },*/
            publish: function () {
                this.service.QaddService();
            },
            async getListTradePointFromUser(){
                //получить все точки услуг пользователя
                let listTradePoint = await axios({url: 'TradePointsAPI/getPoints', method: 'GET' })
                let res = [];
                //упаковка данных в экземпляры классов
                for(let point of listTradePoint.data.points){
                    let p = new TradePoint(point, this.mapIsnt)
                    p.pointInst.events.add('click', this.HendlerClickOnPointFromMap);
                    res.push(p);
                }
                //масштабирование карты 
                this.mapIsnt.setBounds(this.mapIsnt.geoObjects.getBounds())
                console.log(res)
                return res;
            },
            HendlerClickOnPointFromMap: function(event){
                console.log(event.get('target').geometry.getCoordinates())
                this.curPoint = event.get('target').properties.get("linkOnStruct")
            },
            async TradePointsAPIgetPointsForUserManager(){
                
            }
        }
    }
</script>

<style scoped>
    .ymap {
        width: 500px;
        height: 500px;
        display: inline-block;
    }
    .info {
        display: inline-block;
    }
</style>