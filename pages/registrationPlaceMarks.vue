<template>
    <div>
        <yandex-map class="ymap" zoom="8" :controls="['zoomControl']" :coords="coords" @map-was-initialized="initHandler"></yandex-map>
        <div class="info">
            <div v-if="!service">
                <P>Подождите, идет загрузка ...</P>
            </div>
            <form v-if="!!service" @submit.prevent="publish">
                <h3>Добавить услугу</h3>
                <label>Наименование услуги </label><input type="text" v-model="service.name" placeholder="Введите наименование услуги"><br>
                <label>Будут ли оказываться выездные услуги?</label><input type="checkbox" v-model="exitServices"><br>
                <div v-show="exitServices">
                    <label>Регион </label>
                    <input type="text" placeholder="(для выездных)" v-model="region">
                    <button @click.prevent="showExitServiceRegion">Показать на карте</button>
                </div>
                <textarea v-model="service.description" placeholder="Опишите услугу"></textarea><br>
                <hr>
                <label>Стоимость услуги</label><br>
                    <label>от</label><input type="text" v-model="service.priceMin" >
                    <label>до</label><input type="text" v-model="service.priceMax" >
                <hr>
                <label>Фото: </label>
                <!--drag-image ></drag-image-->
                <!--input type="file" @change="HendlerFiles"-->
                <picture-input
                    ref="pictureInput"
                    @change="onChanged"
                    @remove="onRemoved"
                    :width="250"
                    :removable="true"
                    removeButtonClass="ui red button"
                    :height="250"
                    accept="image/jpeg, image/png, image/gif"
                    buttonClass="ui button primary"
                    :customStrings="{
                    upload: '<h1>Upload it!</h1>',
                    drag: 'Перетащите сюда фото'}">
                </picture-input>
                <hr>
                <!--label>Видео</label><input type="text" v-model="service.video" ><br-->
                <div v-if="!!service.existsPointsServices && !checkCompany">
                    <h4 v-show="service.existsPointsServices.length>0">Выбрать из существуещих ТОУ пользователя</h4>
                    <div v-for="point in service.existsPointsServices" :class="{ selected: point == curPoint}">
                        <input type="checkbox" v-model="point.active" @change="point.SetVisibleOnMap(point.active)">
                        <label>{{ point.name }}</label>
                        <br>
                    </div>
                </div>
                <div v-if="!!curCompany && checkCompany">
                    <h4 v-show="curCompany.points.length>0">Выбрать из ТОУ компании: "{{curCompany.name}}"</h4>
                    <div v-for="point in curCompany.points" :class="{ selected: point == curPoint}">
                        <input type="checkbox" v-model="point.active" @change="point.SetVisibleOnMap(point.active)">
                        <label>{{ point.name }}</label>
                    </div>
                </div>
                <br>
                <button @click.prevent="addNewPoint">Добавить новую ТОУ</button>
                <div v-for="point in service.newPointsServices" :class="{ selected: point == curPoint}">
                    <br>
                    <input type="checkbox" v-model="point.active" @change="point.SetVisibleOnMap(point.active)">
                    <label>Название</label><input type="text" v-model="point.name" @change="point.changeCaption()" placeholder="Введите название метки">
                    <button @click.prevent="curPoint = point">Редактирвоать телефоны</button><br>
                    <label>Адрес</label><input type="text" v-model="point.address" placeholder="Введите адрес">
                    <button @click.prevent="point.setCoordsForAdress()">Найти по адресу</button><br>
                    <button @click.prevent="startEditPoint(point)" >Изменить координаты</button>
                </div>
                
                <div v-if="!!curPoint &&  !curPoint.belongsCompany" >
                    <hr>
                    <h4>Телефоны привязанные к точке - {{ curPoint.name }}</h4>
                    <div v-for="phone in curPoint.newPhones">
                        <input type="checkbox" v-model="phone.active">
                        <input type="text" v-model="phone.phone" placeholder="+7 --- --- -- --">
                    </div>
                    <button @click.prevent="curPoint.addNewPhone()">Добавить номер телефона</button>
                </div>
                <hr>
                <div >
                    <label>Выберите категорию услуг, или привяжите услугу к компании</label>
                    <input type="checkbox" v-model="checkCompany">
                    <label>({{ checkCompany ?  "Да. При выборе компании, применятся ТОУ существующие у компании, а не у пользователя" : "нет"}})</label>
                    <br>
                    <!--select v-if="!!service.companies" 
                            v-show="service.companies.length > 0 && checkCompany" 
                            v-model="company">
                        <option v-for="(comp, index) in service.companies" 
                                v-bind:value="comp.companyid" >
                            {{ comp.fullname }}
                        </option>
                    </select-->
                     <div v-if="!!service.companies" v-show="service.companies.length > 0 && checkCompany" > 
                        <div v-for="(comp, index) in service.companies" 
                                :class="{ selected: comp == curCompany}"
                                @click="curCompany = comp" >
                            {{ comp.fullname }}
                        </div>
                    </div>
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
    import PictureInput from 'vue-picture-input'
    import DragImage from '../components/DragImage.vue';
    import treeItem from '../components/treeItem.vue';
    import TOKENS from '../TOKENS';
    import TradePoint from '../clases/TradePoint.js';
    import Regions from '../clases/Regions.js';
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
    //проверка на целое число
    function isInteger(num) {
        let res = true;
        let str = String(num);
        console.log(str)
        for (let i = 0; i < str.length; i++) {
            const element = str[i];
            console.log(element)
             if(element == ',' || element == '.') {
                res = false;
                break;
            }
        }
        console.log(res)
        return res;
    }
    let v = {
        name: "registrationPlaceMarks",
        data: function() { return {
            service: null,

            image: '',//картинка

            //Меняющиеся данные 
            categoriesForSite: null,//CategoriesAPI/getCategoriesForSite
            sekectedCategories: [],//категории которые выбраны
            curCompany: null,

            //ссылки для структур
            curPoint: null,//по текущей точке показываются номера телефоно в  и теды

            //для выбора того, что нужно скинуть
            checkCompany: false,

            exitServices: false, region: "",//регион, если выбраны выездные услуги
            osmIdRegion: null,
            //гуишные ссылки
            nVisRegions: null,
            pointForGetRegion: null,//точка для определения региона выездных услуг

            statusEditPoint: false,//флаг, который меняется при редактровании точки
            editPoint: null,//ссылка на точку которую нужно отредактирвать

            mapIsnt: null,
            coords: [55,55],
            placeMark: null//ссылка на метку на карте
        }},
        components: {
            DragImage,
            treeItem,
            PictureInput
        },
        methods: {
            initHandler: async function (myMap) {
                //
                axios.defaults.headers.common['Authorization'] = localStorage.getItem(TOKENS.AUTHORIZE)
                //
                this.mapIsnt = myMap;
                //при инициализации библиотеки яндекс карт
                this.service = new Service();// создаем объект сервиса
                try{
                    this.service.existsPointsServices = await this.getListTradePointFromUser();
                    this.service.companies = await this.getListCompaniesFromUser();
                    if(!!this.service.companies){
                        if(this.service.companies.length > 0){
                            this.curCompany = this.service.companies[0]
                        }
                    }
                    this.categoriesForSite = await this.getCategoriesForSite(); 
                }catch(e){
                    console.log(e.name)
                    console.log(e.message)
                }
                
                //добавляем событие спомощью которого можно менять координаты щелчком на карте
                myMap.events.add('click', this.click_on_map);
                //точка нужная для определения региона для выездной услуги
                this.pointForGetRegion = new TradePoint({latitude: 0, longitude: 0, name: "", address: "",newPhones: []},myMap,this)
                this.pointForGetRegion.SetVisibleOnMap(false);//скрываем ее на карте
//this.nVisRegions = new Regions(myMap,this,true);
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
                this.service.newPointsServices.push(new TradePoint(
                    {
                        latitude: 0,
                        longitude: 0,
                        name: "",
                        address: "",
                        newPhones: [],
                    },
                    this.mapIsnt,
                    this, 
                    null,
                    [
                        { name: 'click', event: this.HendlerClickOnPointFromMap },
                        { name: 'dragend', event: this.HendlerDragend }
                    ]))
            },
            publish: function () {
                this.QaddService(this.service);
            },
            async showExitServiceRegion() {
                //показать регион
                let {exitServices, mapInst} = this;
                try{
                    if(!this.region || this.region.length == 0) throw new Error("Напишите регион в текстовом поле") 
                    if(!exitServices)  throw new Error("Не выбрали галочку выбора выездных услуг") 
                    let coords = null;
                    //узнаем координаты указанного адреса, и уточняем адрес
                    let coordsAwait = await ymaps.geocode(this.region);
                    coords = coordsAwait.geoObjects.get(0).geometry.getCoordinates()
                        //перезаписываем в строку региона уточненный адрес по координатам
                    let addressAwait = await ymaps.geocode(coords);
                    let firstGeoObject = addressAwait.geoObjects.get(0);
                    this.region = firstGeoObject.getAddressLine();//уточняем адресс
                    
                    //создаем (невидимую) точку
                    this.pointForGetRegion.pointInst.geometry.setCoordinates(coords);//меняем координаты метки
                    let reg = await Regions.getInfoRegionFromPoint(this.pointForGetRegion.pointInst,this.mapIsnt)
                    this.osmIdRegion = reg.osmId//сохраняем ид
                    console.log(this.osmIdRegion)
                    
                }catch(e){
                    alert("такого адреса не найдено")
                    //alert(e.message)
                }
            },
            async getListTradePointFromUser(){
                //получить все точки услуг пользователя
                let res = [];
                try {
                    let listTradePoint = await axios({url: 'TradePointsAPI/getPoints', method: 'GET' })
                //подготовка, для реактивной формы
                    /*
                    for(let phone of listTradePoint.data.points.phones){
                    phone.active = true;
                     }*/
                
                //упаковка данных в экземпляры классов
                    console.log('listTradePoint')
                    console.log('listTradePoint.data.points')
                   // if(listTradePoint.data.points > 0){
                        for(let point of listTradePoint.data.points){
                            let p = new TradePoint(point.tradePoint, this.mapIsnt, this, null, [
                                { name: 'click', event: this.HendlerClickOnPointFromMap },
                                { name: 'dragend', event: this.HendlerDragend }
                            ])
                            p.exist = true;
                            //p.pointInst.events.add('click', this.HendlerClickOnPointFromMap);
                            res.push(p);
                        }
                 //   } 
                    
                    //масштабирование карты 
                    this.mapIsnt.setBounds(this.mapIsnt.geoObjects.getBounds())
                    
                }catch(e){
                    console.log(e.message)
                }
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
            /*
            HendlerFiles: function(event){
                if (!!window.FileReader) {
                    console.log("file reader false")
                }
                if (!!window.FormData) {
                   console.log("FormData false")
                }
                
            },*/
            //Подсветка
            clearColorPoints(){
            // Цвет всех меток очищается
                ymaps.geoQuery(this.mapIsnt.geoObjects)
                .search('geometry.type = "Point"')
                .setOptions('preset', 'islands#darkblueDotIconWithCaption');
            },
            //для картинки
            onChanged() {
                console.log("New picture loaded");
                if (this.$refs.pictureInput.file) {
                    this.image = this.$refs.pictureInput.file;
                } else {
                    console.log("Old browser. No support for Filereader API");
                }
            },
            onRemoved() {
                this.image = '';
            },
            //запросы для данного объекта к базе
            //получить список компаний + точек оказания услуг компании, владельцем которых явзяеся пользователь
            async getListCompaniesFromUser(){
                let companies = []
                try{
                    let list = await axios({url: 'CompaniesAPI/getCompanies?withPoints=true', method: 'GET' })
                    for(let {company, points} of list.data.companies){
                        company.points = [];
                        for(let point of points){
                            let p = new TradePoint(point, this.mapIsnt, this, null, [
                                { name: 'click', event: this.HendlerClickOnPointFromMap },
                                { name: 'dragend', event: this.HendlerDragend }
                            ])
                            p.exist = true;
                            //p.pointInst.events.add('click', this.HendlerClickOnPointFromMap);
                            company.points.push(p);
                        }
                        companies.push(company)
                    }
                }catch(e){
                    console.log(e.name+" : "+e.message)
                }
                return companies;
            },
            async QaddService(ser){
                //КОСТЫЛЬ - РАЗРЫВ РЕКУРСИИ
            let {name,description,priceMin,priceMax ,photos,video} = ser;
            let {exitServices} = this
            let zeroСheck = [name,description]//массив для проверки на пустые поля
            let oldPoints = []
            if(this.checkCompany){
                for(let point of this.curCompany.points){
                    let {pointid} = point;
                    if(!!point.active) oldPoints.push(pointid)
                }
            }else{
                for(let point of ser.existsPointsServices){
                    let {pointid} = point;
                    if(!!point.active) oldPoints.push(pointid)
                }
            }
            let newPoints = []
            let lastRegion;
            for(let point of ser.newPointsServices){
                if(!!point.active) {
                    let {latitude,longitude,name ,address} = point;
                    let reg = await Regions.getInfoRegionFromPoint(point.pointInst,this.mapIsnt)
                    let regionId = reg.osmId//сохраняем ид
                    lastRegion = regionId;
                    zeroСheck.push(name)
                    zeroСheck.push(address)
                    let newPhones = [];
                    for(let phone of point.newPhones){
                        if(!!phone.active) {
                            zeroСheck.push(phone.phone)
                            newPhones.push(phone.phone)
                        }
                    }
                    newPoints.push({latitude,longitude,name ,address, newPhones, regionId})
                }
            }
            console.log(this.osmIdRegion)
            try{
                // Проверка денежных полей
                if(Number(priceMin)<0) throw new Error("не должно быть отрицательных чисел")
                if(Number(priceMax)<0) throw new Error("не должно быть отрицательных чисел")
                if(!isInteger(priceMin)) throw new Error("не должно быть дробных")
                if(!isInteger(priceMax)) throw new Error("не должно быть дробных")
                if(Number(priceMin) > Number(priceMax)) throw new Error("введите корректно границы цен от и до")
                //Проверка на пустые поля
                for(let el of zeroСheck){
                        //проверка строк, если они пустые то кидать исключение
                    if(el.length == 0){
                        throw new Error("Заполните пустые поля")
                    }
                }
                console.log(exitServices)
                console.log(newPoints.length)
                console.log(this.osmIdRegion)
                if(!exitServices && newPoints.length == 0) {
                    throw new Error("Добавьте точки, или укажите регион выездной услуги")
                }
                if(this.osmIdRegion==null && exitServices) {
                    throw new Error("Добавьте точки, или укажите регион выездной услуги")
                }
                //
                //отправка
                axios({url: '/ServicesAPI/addService', 
                data: {
                    "authorization":localStorage.getItem(TOKENS.AUTHORIZE),
                    name,photos,
                    description,//video,
                    priceMin, priceMax,
                    exitServices,//
                    regionId: this.osmIdRegion == null ? lastRegion : this.osmIdRegion, 
                    companyId: this.checkCompany ?  this.curCompany.companyid : null,
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
                        if(this.image){
                            const formData = new FormData();
                            formData.append("picture1", this.image);
                            formData.append("serviceId", serviceId);
                            const config = {
                                headers: {
                                    'content-type': 'multipart/form-data'
                                }
                            };
                            axios.post('/ServicesAPI/addImages', formData, config).then(resp=>{
                                alert("картинка добавлена")
                            })
                        }
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