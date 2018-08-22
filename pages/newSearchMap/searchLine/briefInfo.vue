<template>
    <div>
        <p>{{service.name}} <button>перейти</button> <button>Показать все ТОУ</button>
        [звезды, колличество отзывов(кликабельные)]
        </p>

    </div>
</template>

<script>
export default {
    name: "briefInfo",
    props: ['service'],
}
</script>

<style lang="scss">

</style>
