<template>
    <div>
        <yandex-map class="ymap" zoom="8" :controls="['zoomControl']" :coords="coords" @map-was-initialized="initHandler"></yandex-map>
        <div class="info">
            <div v-if="!service">
                <P>Подождите, идет загрузка ...</P>
            </div>
            <form v-if="!!service" @submit.prevent="addService">
                <h3>Добавить услугу</h3>
                <label>Наименование услуги</label><input type="text" ><br>
                <label>Описание на картинку</label><br>
                <label>Стоимость услуги</label><br>
                    <label>от</label>
                    <label>до</label>
                <label>Фото</label><label>Видео</label><br>
                <br><br>
                <button type="submit">Опубликовать</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
   
    class Company{
        constructor(id = null, name = null){
            this.companyid = id;
            this.name = name
        }
        queries = {
            //запросы для данного объекта к базе
            async getListPointsServicesFromUser(){
                //получить список компаний, владельцем которых явзяеся пользователь
                try{
                    let listPointsServices = await axios({url: 'CompaniesAPI/getCompanies', method: 'GET' })
                    cosnole.log(cosnolistPointsServices.data.token)
                }catch{
                    alert("Не удалось найти информацию о компаниях")
                }
            }
        }
    }
    class Service{
        constructor(name="",description="",priceMin=0,priceMax=0,photos=[],video="",region=null,newPointsServices=[],existsPointsServices=[],company=null){
            this.name = name//название услуги 
            this.description = description//описание
            this.priceMin = priceMin//минимальная цена
            this.priceMax = priceMax// максимальная цена
            this.photos= photos
            this.video=video,//ссылка на видео из ютуба
            this.region=region, //osmID - если пользователь не указал точки оказания услуг (новые или существующие), то запичывается регион
            this.newPointsServices=newPointsServices//точки оказания услуг, которые нужно добавить в базу (подвязать к пользователю)
            this.existsPointsServices=existsPointsServices // существуещих точек
            this.company = company // ид комании, если его нет, то передается -1 (мне нужен запрос для получения списка компаний по токену)
            //добавить тел, факс, почту, сайт, кома
        }
        sendDataOnServer(){

        }
    } 
    class PointService {
        //класс характеризующий точку оказания услуги
    
        constructor(latitude=null,longitude=null,address=null,index_500000=null,region=null, pointid = null){
            //данные принимаемые с сервера
            this.latitude = latitude;//широта
            this.longitude= longitude;//долгота
            this.address= address;//адрес
            this.index_500000= index_500000; // индекс квадранта в котором находится точка для масштаба 1 : 500 000
            this.region= region;//osmID - ид регион в котором находится точка
            this.pointid = pointid;//идентификатор точки на карте
            //гуи
            this.active = false; // индикатор показывающий, передавать точку на карту или нет 
        }
        DrawOnMap(mapIsnt){
            
        }
        SetVisibleOnMap(vis,mapIsnt){

        }
        DeleteFromMap(mapIsnt){
            
        }
        //Активный или нет? (формирует список того, что нужно передать на сервер)
        get active(){
            return this.active
        }
        set active(val){
            this.SetVisibleOnMap(val);
            this.active = val
        }
        
        queries = {
            //запросы для данного объекта к базе
            async getListPointsServicesFromUser(){
                //получить все точки услуг пользователя
                try{
                    let listPointsServices = await axios({url: 'TradePointsAPI/getPointsForUserManager', method: 'GET' })
                    cosnole.log(cosnolistPointsServices.data.token)
                }catch{
                    alert("Не удалось найти информацию о точках оказания услуг")
                }
            }
        }
    }
    export default {
        name: "registrationPlaceMarks",
        data: function() { return {
            service: null,
            //гуишные ссылки
            coords: [55,55],
            placeMark: null//ссылка на метку на карте
        }},
        methods: {
            initHandler: async function (myMap) {
                //при инициализации библиотеки яндекс карт
                this.service = new Service();// создаем объект сервиса
                //добавляем метку которой можно менять координаты щелчком на карте
                this.placeMark = new ymaps.Placemark(this.coords, {}, {});
                myMap.geoObjects.add(this.placeMark);
                myMap.events.add('click', this.click_on_map);
            },
            click_on_map: function(event){
                //при клике на карте
                this.coords = event.get('coords');//запоминаем координаты
                this.placeMark.geometry.setCoordinates(this.coords);//меняем координаты метки
            },
            calculate_index_for_square: function(coord, table){
                let tableScale = [];
                // таблица масштабов
                // [масштаб] = [размер широты, оазмер долготы]
                tableScale[500000] = [2, 3];
                let degs = tableScale[table];//вытащили размеры ячейки из таблицы
                let index = (coord[0] / degs[0]) * (coord[1] / degs[1] + 1);
                return index;
            },
            sign_up_services: function () {
                //посчитали индекс квадранта для заданного масштабы
                this.send.index_500000 = this.calculate_index_for_square(this.coords, 500000);
                this.send.latitude = this.coords[0];
                this.send.longitude = this.coords[1];
                console.log(this.send);
                //отправили на сервер данные
                //---------------------------squareIndex500000-------------
                axios.get(`http://localhost/rust/api/signUpPlaceMark.php?latitude=${this.send.latitude}&longitude=${this.send.longitude}&squareIndex500000=${this.send.index_500000}`)
                    .then(response => (console.log(response))
                        .catch(function(reason) {
                            console.log(reason);
                        }));
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