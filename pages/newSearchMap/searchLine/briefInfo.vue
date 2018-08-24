<template>
    <div>
        <p>{{service.name}} <button @click="showFullInfo">перейти</button> <button>Показать все ТОУ</button>
        [звезды, колличество отзывов(кликабельные)]
        </p>

    </div>
</template>

<script>
export default {
    name: "briefInfo",
    props: ['service'],
    methods: {
        showFullInfo(){
            this.$emit('showFullInfo');
        }
    }
}
</script>

<style lang="scss">

</style>
