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
                    <label>от</label><input type="number" v-model="service.priceMin" >
                    <label>до</label><input type="number" v-model="service.priceMax" >
                <hr>
                <label>Фото: </label>
                <!--drag-image ></drag-image-->
                <input type="file" @change="HendlerFiles">
                <hr>
                <!--label>Видео</label><input type="text" v-model="service.video" ><br-->
                <hr>
                <h4 v-show="!!service.existsPointsServices">Выбрать существующий адрес</h4>
                <div v-for="point in service.existsPointsServices" :class="{ selected: point == curPoint}">
                    <input type="checkbox" v-model="point.active" @change="point.SetVisibleOnMap(point.active)">
                    <label>{{ point.name }}</label>
                </div>
                <hr>
                <h3>Добавить новые адреса</h3>
                <div v-for="point in service.newPointsServices" :class="{ selected: point == curPoint}">
                    <input type="checkbox" v-model="point.active" @change="point.SetVisibleOnMap(point.active)">
                    <br>
                    <label>Название</label><input type="text" v-model="point.name" @change="point.changeCaption()"><br>
                    <label>Адрес</label><input type="text" v-model="point.address"><br>
                    <button @click.prevent="point.setCoordsForAdress()">Найти по адресу</button>
                    <button @click.prevent="startEditPoint(point)" >Изменить координаты</button><br>
                    <button @click.prevent="curPoint = point">Показать контактную информацию о точке</button>
                    <br>
                    <br>
                </div>
                <hr>
                <button @click.prevent="addNewPoint">Добавить точку оказания услу</button>
                <hr>
                <div v-if="!!curPoint" >
                    <h4>Телефоны привязанные к точке - {{ curPoint.name }}</h4>
                    <div v-for="phone in curPoint.newPhones">
                        <input type="checkbox" v-model="phone.active">
                        <input type="text" v-model="phone.phone">
                    </div>
                    <button @click.prevent="curPoint.addNewPhone()">Добавить номер телефона</button>
                </div>
                <hr>
                <div >
                    <label>Выберите категорию услуг, или привяжите услугу к компании</label>
                    <input type="checkbox" v-model="checkCompany">
                    <label>({{ checkCompany ?  "да" : "нет"}})</label>
                    <br>
                    <select v-if="!!service.companies" v-show="service.companies.length > 0 && checkCompany" v-model="company">
                        <option v-for="comp in service.companies" v-bind:value="comp.companyid">
                            {{ comp.fullname }}
                        </option>
                    </select>
                    <ul v-show="!checkCompany">
                        <tree-item v-if="!!categoriesForSite" :model="categoriesForSite" @reqursiCheck="reqursiCheck"> </tree-item>
                    </ul>
                </div>
                <hr>
                
                <button type="submit">Опубликовать</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import DragImage from '../components/DragImage.vue';
    import treeItem from '../components/treeItem.vue';
    import TOKENS from '../TOKENS'
    class Company{
        constructor(id = null, name = null){
            this.companyid = id;
            this.name = name
        }
    }
    class Service{
        constructor(){
            this.name = ""//название услуги 
            this.description = ""//описание
            this.priceMin = 0//минимальная цена
            this.priceMax = 0// максимальная цена
            this.photos= []
            this.video="",//ссылка на видео из ютуба
            this.region=null, //osmID - если пользователь не указал точки оказания услуг (новые или существующие), то запичывается регион
            this.newPointsServices=[]//точки оказания услуг, которые нужно добавить в базу (подвязать к пользователю)
            // !!! БАГУЕТ, записывает в имя
            this.existsPointsServices=[] // существуещих точек
            this.companies = null // ид комании, если его нет, то передается -1 (мне нужен запрос для получения списка компаний по токену)
            this.company = null //ид компании которую выбрали
            //добавить тел, факс, почту, сайт, кома
        }
        /*
         * Запросы
         */
        //отправляю запрос на добавление услуги в БД
        
    } 
    class TradePoint {
        //класс характеризующий точку оказания услуги
        constructor(point,mapIsnt,Vcon){
            //данные принимаемые с сервера
            this.pointid = !!point.pointid ? point.pointid : null
            this.latitude = point.latitude;//широта
            this.longitude= point.longitude;//долгота
            this.name = point.name // название точки оказания услуг
            this.address= point.address;//адрес
            this.newPhones = [] //массив для новых номеров телефонов
            this.categories = [] //массив категорий, к которым нужно привязать услугу
            //гуи
            this.Vcon = Vcon;//контекст экземпляра Vue
            this.mapIsnt = mapIsnt;//контекст яндекс карты
            this.pointInst = this.DrawOnMap();//контекст точки на яндекс карте
            this.setActive(true); // индикатор показывающий, передавать точку на карту или нет 
            this.selected = false //нужен для показа номеров и прочей херни по точке
            
        }
        addNewPhone(){
            this.newPhones.push({
                "active": true,
                "phone": "+7 --- --- -- --"
            })
        }
        changeCaption(){
            this.pointInst.properties.set({
                iconCaption: this.name
            });
        }
        setCoords(coords){
            let context = this;
            this.latitude = coords[0];//широта
            this.longitude = coords[1];//долгота
            this.pointInst.geometry.setCoordinates(coords);//меняем координаты метки
            let res = ymaps.geocode([this.latitude,this.longitude]);
            res.then(res=>{
                let firstGeoObject = res.geoObjects.get(0);
                let address = firstGeoObject.getAddressLine();
                console.log(address);
                context.address = address;
            });
        }
        setCoordsForAdress(){
            let context = this
            let res = ymaps.geocode(this.address);
            console.log(this.address)
            res.then(res=>{
                let coord = res.geoObjects.get(0).geometry.getCoordinates()
                console.log(coord)
                context.setCoords(coord)
            })
            
        }
        DrawOnMap(){
            let context = this
            let p = new ymaps.Placemark([this.latitude,this.longitude], {
                iconCaption: this.name
            }, {
                 preset: 'islands#darkblueDotIconWithCaption',
                 draggable: true
            })
            p.properties.set({
                linkOnStruct: context,//сылка на структуру, для обратной связи
            });
            p.events.add('click', this.Vcon.HendlerClickOnPointFromMap);
            p.events.add('dragend', this.Vcon.HendlerDragend);
            this.mapIsnt.geoObjects.add(p);
            return p;
        }
        SetVisibleOnMap(vis){
            this.pointInst.options.set({ "visible": vis});
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
            let tableScale = [];[]
            // таблица масштабов
            // [масштаб] = [размер широты, оазмер долготы]
            tableScale[500000] = [2, 3];
            let degs = tableScale[scale];//вытащили размеры ячейки из таблицы
            let index = (coord[0] / degs[0]) * (coord[1] / degs[1] + 1);
            return index;
        }
    }
    function isInteger(num) {
        return (num ^ 0) === num;
    }
    let v = {
        name: "registrationPlaceMarks",
        data: function() { return {
            service: null,
            //Меняющиеся данные 
            categoriesForSite: null,//CategoriesAPI/getCategoriesForSite
            sekectedCategories: [],//категории которые выбраны

            //ссылки для структур
            curPoint: null,//по текущей точке показываются номера телефоно в  и теды

            //для выбора того, что нужно скинуть
            checkCompany: false,

            //гуишные ссылки
        
            statusEditPoint: false,//флаг, который меняется при редактровании точки
            editPoint: null,//ссылка на точку которую нужно отредактирвать

            mapIsnt: null,
            coords: [55,55],
            placeMark: null//ссылка на метку на карте
        }},
        components: {
            DragImage,
            treeItem
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
                this.service.companies = await this.getListCompaniesFromUser();
                this.categoriesForSite = await this.getCategoriesForSite();
                //добавляем событие спомощью которого можно менять координаты щелчком на карте
                myMap.events.add('click', this.click_on_map);
            },
            reqursiCheck(model){
                let { sekectedCategories } = this
                const index = sekectedCategories.indexOf(model.id);
                if(!model.check){
                    if(index == -1){
                        sekectedCategories.push(model.id)
                    }
                } else {
                    if(index != -1){
                        sekectedCategories.splice(index,1)
                    }
                }
            },
            startEditPoint(point){
                this.editPoint = point;
                this.statusEditPoint = true;
            },
            click_on_map: function(event){
                //при клике на карте
                if(!!this.editPoint && this.statusEditPoint){
                    const coords = event.get('coords');//запоминаем координаты
                    this.editPoint.setCoords(coords);
                    this.statusEditPoint = false;
                }
            },
            addNewPoint(){
                this.service.newPointsServices.push(new TradePoint({
                    latitude: 0,
                    longitude: 0,
                    name: "назовите метку",
                    address: "уточните адресс",
                    newPhones: [],
                },this.mapIsnt,this))
            },
            publish: function () {
                this.QaddService(this.service);
            },
            async getListTradePointFromUser(){
                //получить все точки услуг пользователя
                let listTradePoint = await axios({url: 'TradePointsAPI/getPoints',data:{"authorization":localStorage.getItem(TOKENS.AUTHORIZE)}, method: 'POST' })
                //подготовка, для реактивной формы
                /*
                for(let phone of listTradePoint.data.points.phones){
                    phone.active = true;
                }*/
                let res = [];
                //упаковка данных в экземпляры классов
                for(let point of listTradePoint.data.points){
                    let p = new TradePoint(point.tradePoint, this.mapIsnt, this)
                    //p.pointInst.events.add('click', this.HendlerClickOnPointFromMap);
                    res.push(p);
                }
                //масштабирование карты 
                this.mapIsnt.setBounds(this.mapIsnt.geoObjects.getBounds())
                return res;
            },
            async getCategoriesForSite(){
                let categories = await axios({url: 'CategoriesAPI/getCategoriesForSite',data:{"authorization":localStorage.getItem(TOKENS.AUTHORIZE)}, method: 'GET' })
                return {
                    name:"Категории", 
                    child: categories.data.categories,
                    root: true
                }
            },
            HendlerClickOnPointFromMap: function(event){
                this.curPoint = event.get('target').properties.get("linkOnStruct")
                //подсветка
                this.clearColorPoints();
                event.get('target').options.set('preset', 'islands#darkgreenDotIconWithCaption');
            },
            HendlerDragend:  function(event){
                this.curPoint = event.get('target').properties.get("linkOnStruct")
                const coords = this.curPoint.pointInst.geometry.getCoordinates();
                this.curPoint.setCoords(coords);
                //подсветка
                this.clearColorPoints();
                event.get('target').options.set('preset', 'islands#darkgreenDotIconWithCaption');
            },
            HendlerFiles: function(event){
                if (!!window.FileReader) {
                    console.log("file reader false")
                }
                if (!!window.FormData) {
                   console.log("FormData false")
                }
                
            },
            //Подсветка
            clearColorPoints(){
            // Цвет всех меток очищается
                ymaps.geoQuery(this.mapIsnt.geoObjects)
                .search('geometry.type = "Point"')
                .setOptions('preset', 'islands#darkblueDotIconWithCaption');
            },
            //запросы для данного объекта к базе
            //получить список компаний, владельцем которых явзяеся пользователь
            async getListCompaniesFromUser(){
                let list = await axios({url: 'CompaniesAPI/getCompanies',data:{"authorization":localStorage.getItem(TOKENS.AUTHORIZE)}, method: 'POST' })
                console.log(list.data.companies)
                return list.data.companies
            },
            QaddService(ser){
                //КОСТЫЛЬ - РАЗРЫВ РЕКУРСИИ
            let {name,description,priceMin,priceMax ,photos,video,region} = ser;
            let oldPoints = []
            for(let point of ser.existsPointsServices){
                let {pointid} = point;
                if(!!point.active) oldPoints.push(pointid)
            }
            let newPoints = []
            for(let point of ser.newPointsServices){
                let {latitude,longitude,name ,address} = point;
                let newPhones = [];
                for(let phone of point.newPhones){
                    if(!!phone.active) newPhones.push(phone.phone);
                }
                newPoints.push({latitude,longitude,name ,address, newPhones})
            }
            /*
            checkCompany
             */
            if(!this.checkCompany || !ser.companies){
                 this.company = null;
            } 
            if(!!ser.companies){
                if(ser.companies.length == 0)
                this.company = null;
            }
            try{
                // Проверка денежных полей
                if(priceMin<0) throw new Error("не должно быть отрицательных чисел")
                if(priceMax<0) throw new Error("не должно быть отрицательных чисел")
                if(!isInteger(priceMin)) throw new Error("не должно быть дробных")
                if(!isInteger(priceMax)) throw new Error("не должно быть дробных")
                //
                //отправка
                axios({url: '/ServicesAPI/addService', 
                data: {
                    "authorization":localStorage.getItem(TOKENS.AUTHORIZE),
                    name,photos,
                    description,//video,
                    priceMin, priceMax,
                    region, 
                    companyId: this.checkCompany ?  this.company : null,
                    categories: !this.checkCompany ?  this.sekectedCategories : null,
                    //
                    oldPoints,newPoints
                }, method: 'POST' })
                .then(resp => {
                    const status = resp.data.status
                    const serviceId = resp.data.serviceId
                    if(status == "OK"){
                        alert("Услуга добавлена")
                        //Отправляю запрос с добавлением картинок (если они есть)
                        axios({
                            url: '/ServicesAPI/addImageHandler', data: {
                            "authorization":localStorage.getItem(TOKENS.AUTHORIZE),
                            serviceId
                        }, method: 'POST' })
                    }else{
                        alert("Запрс пришел, но произошла ошибка при добавлении услуги")
                    }
                })
            }catch(e){
                alert(e.message)// + ":" + e.name + "\n" + e.stack);
            }
            
            
        }
        }
    }
    export default v
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
    .selected {
        color: green;
    }
</style>