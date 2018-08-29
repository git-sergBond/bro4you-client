<template>
    <div>
        <p>Результаты поиска <button @click="back">закрыть/вернуться</button></p>
        <filters></filters>
        <brief-info v-for="service in services" :service="service"
        @showFullInfo = "showFullInfo(service)"
        ></brief-info>
    </div>
</template>

<script>
import briefInfo from './briefInfo.vue'
import filters from './resultsSearch/filters.vue'

export default {
    name: "resultsSearch",
    props: ['services'],
    components: {
        briefInfo,
        filters
    },
    methods: {
        showFullInfo(service){
            this.$emit('showFullInfo',service)
        },
        back(){
            this.$emit('beforeState')
        }
    }
}
</script>

<style>

</style>
