<template>
    <div>
        <p>Результаты поиска <button>закрыть</button></p>
        <filters></filters>
        <brief-info v-for="service in services" :service="service"></brief-info>
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
    }
}
</script>

<style lang="scss">

</style>
