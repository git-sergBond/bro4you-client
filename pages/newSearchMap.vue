<template>
    <div>
        <search-line @drawServices=drawServices></search-line>
        <outline-area></outline-area>
        <div class="map-comp"
            @mouseup='mouseup_event_DrawPolygonByFinger'
            @mousedown='mousedown_event_DrawPolygonByFinger'>
            <yandex-map class="ymap" zoom="8"
                        :controls="['zoomControl']" :coords="coords"
                        @map-was-initialized="initHandler"></yandex-map>
        </div>
        меню -> регалка
    </div>
</template>

<script>
import searchLine from './newSearchMap/searchLine.vue'
import outlineArea from './newSearchMap/outlineArea.vue'
import TradePoint from '../clases/TradePoint.js';
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
        outlineArea
    },
    methods: {
        initHandler(myMap){
            this.mapIsnt = myMap
        },
        //Отрисовка точек предоставляющих услуги
        drawServices(services){
            console.log(services)
            for(let service of services){
                service.drawPoints(this.mapIsnt)
            }
            /*
            */
        }
    }
}
</script>

<style>
.ymap {
    width: 100%;
    height: 99vh ;
}
</style>