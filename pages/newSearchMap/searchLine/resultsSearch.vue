<template>
    <div>
        <p>Результаты поиска <button>закрыть</button></p>
        <p>Фильтры <button>цена</button></p>
        <brief-info v-for="service in services" :service="service"></brief-info>
    </div>
</template>

<script>
import briefInfo from './briefInfo.vue'
export default {
    name: "resultsSearch",
    props: ['services'],
    components: {
        briefInfo
    }
}
</script>

<style lang="scss">

</style>
