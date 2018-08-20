<template>
    <div>
        <search-line></search-line>
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
export default {
    name: "newSearchMap",
    data(){
        return {
            coords: [50,50]
        }
    },
    components: {
        searchLine,
        outlineArea
    }
}
</script>

<style>
.ymap {
    width: 100%;
    height: 99vh ;
}
</style>