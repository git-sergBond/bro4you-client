<template>
    <div>
        <div class="map-comp reset-margin"
            @mouseup='mouseup_event_DrawPolygonByFinger'
            @mousedown='mousedown_event_DrawPolygonByFinger'>
            <yandex-map class="ymap" zoom="8"
                        :controls="['zoomControl']" :coords="coords"
                        @map-was-initialized="initHandler"></yandex-map>
        </div>
        <search-line ref="searchln" class="search-line common-margin" 
        @drawServices=drawServices 
        @deletePoints=deletePoints
        :getDiagonalMap=getDiagonalMap 
        :getCenterMap=getCenterMap
        ></search-line>
        <div class="map-menu-wrap">
        <div class="map-menu">
            <div class="logo">
                <img src="images/icons/лого.png">
            </div>
            <div class="authorise"> 
                <div class="angle-hex-item item1"><img src="images/icons/open64.png"></div>
                <div class="angle-hex-item item2"><img src="images/icons/save64.png"></div>
            </div>
            <div class="menu-items">
                <div>ЛК</div>
                <div>Уведомления</div>

                <div>профиль</div>
                <div>сообщения</div>
                <div>Авторизация</div>
            </div >
        </div>
        </div>
        <form-autorize></form-autorize>
    </div>
</template>

<script>
import formAutorize from '../components/formAutorize.vue';

import searchLine from './newSearchMap/searchLine.vue'

import TradePoint from '../clases/TradePoint.js';
import categoryVue from '../components/category.vue';
export default {
    name: "newSearchMap",
    data(){
        return {
            coords: [55.452376,37.372236],
            mapIsnt: null
        }
    },
    components: {
        searchLine,
        formAutorize
    },
    methods: {
        initHandler(myMap){
            this.mapIsnt = myMap
        },
        //получить координаты центра
        getCenterMap(){
            let context = this;
            const centerPoint = context.mapIsnt.getCenter();
            return centerPoint;
        },
        //получить координаты двух точек диагонали
        getDiagonalMap(){
            let context = this;
            const diagonalPoints = context.mapIsnt.getBounds();
            return diagonalPoints;
        },
        //Отрисовка точек предоставляющих услуги
        drawServices(services){
            try{
                
                for(let service of services){
                    service.drawPoints(this.mapIsnt)
                    service.addEvents([
                        { name: 'click', event: this.eventClickOnPoint },
                    ])
                }
                
            }catch(e){
                console.log(e.message, 'background: #222; color: #bada55')
            }
        },
        //удаление точек
        deletePoints(){
            try{
                this.mapIsnt.geoObjects.removeAll();
            }catch(e){
                console.log(e.message, 'background: #222; color: #bada55')
            }
        },
        //событие клика на точку
        eventClickOnPoint(event){
            let context = this
            let mapPoint = event.get('target');
            let objPoint = mapPoint.properties.get('linkOnStruct');
            context.$refs.searchln.showFullInfo(objPoint.services[0])
        }
    }
}
</script>

<style scoped>
/*отступы*/
.reset-margin{
    margin: 0;
}
.common-margin{
    margin: 5px;
}




/*позиционирование блоков*/
.search-line {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
}




/*яндекс карта*/
.ymap {
    width: 100%;
    height: 100vh ;
}
/* теги */
body{
    margin: 0;
}



/**/
.map-menu-wrap{
    width: 100%;
    height: 0px;
    display: flex;
    justify-content: center;
}
.map-menu{
    position: relative;
}
.map-menu .logo{
    position: absolute;
    top:-50px;
}
.map-menu .logo img{
    width: 40px;
    height: 40px;
}
.map-menu .authorise{
    position: absolute;
    top: -100px;
}
.angle-hex-item{
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    --proporions: 40px;
    width: var(--proporions);
    box-shadow: 0px 0px 30px -2px;
    /*height: var(--proporions);*/
}
.angle-hex-item:after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: -10px;
    border-right: 10px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
}
.angle-hex-item:before{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    right: -10px;
    border-left: 10px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
}
.angle-hex-item img{
    width: 37px;
    height: 37px;
}
.angle-hex-item.item1{
    left: -35px;
}
.angle-hex-item.item2{
    right: -75px
}
</style>