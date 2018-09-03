<template>
    <div>
        <div class="map-comp reset-margin"
            @mouseup='mouseup_event_DrawPolygonByFinger'
            @mousedown='mousedown_event_DrawPolygonByFinger'>
            <yandex-map class="ymap" zoom="8"
                        :controls="['zoomControl']" :coords="coords"
                        @map-was-initialized="initHandler"></yandex-map>
        </div>
        <search-line class="search-line common-margin" 
        @drawServices=drawServices 
        @deletePoints=deletePoints
        :getDiagonalMap=getDiagonalMap 
        :getCenterMap=getCenterMap></search-line>
        
        меню -> регалка
    </div>
</template>

<script>
import searchLine from './newSearchMap/searchLine.vue'

import TradePoint from '../clases/TradePoint.js';
import categoryVue from '../components/category.vue';
export default {
    name: "newSearchMap",
    data(){
        return {
            coords: [50,50],
            mapIsnt: null
        }
    },
    components: {
        searchLine,
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
            let mapPoint = event.get('target');
            let objPoint = mapPoint.properties.get('linkOnStruct');
            console.log(objPoint.services[0]);
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
</style>