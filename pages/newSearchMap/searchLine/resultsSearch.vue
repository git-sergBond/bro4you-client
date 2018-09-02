<template>
    <div>
        <div class="win-cont">
            <p class="gray-text">Результаты поиска<!--button @click="back">закрыть/вернуться</button--></p>
            <div class="filters">
                <div class="filter left">
                    <p class="text angle-right">Цена</p>
                </div>
                <div class="filter left right">
                    <p class="text angle-left angle-right">Рейтинг</p>
                </div>
                <div class="filter right" >
                    <p class="text angle-left">Категория</p>
                </div>
            </div>
            <brief-info v-for="service in services" :service="service"
                @showFullInfo = "showFullInfo(service)"
            ></brief-info>
        </div>
        <div>
            Декоратив фигня
        </div>
    </div>
</template>

<script>
import briefInfo from './briefInfo.vue'

export default {
    name: "resultsSearch",
    props: ['services'],
    components: {
        briefInfo,
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

<style scoped>
/*окно*/
.win-cont{
    margin-top: 10px;
    width: 450px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.7);
}
/*заголовок*/
.win-cont .gray-text{
    margin-left: 5px;
    margin-top: 5px;
    color: gray;
}
/*фильтры*/
.win-cont .filters{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.filters .filter{
    background-color: rgb(34, 200, 230);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
}
.filter .text{
    text-transform: uppercase;
    margin: 0;

}
.filters .left{
    margin-right: 10px;
}
.filters .right{
    margin-left: 20px;
}
/*уголки*/
.angle-right::after {
    content: '';
    position: relative;
    right: -25px;
    top: -24px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-bottom: 30px solid rgb(34, 200, 230);;
    border-right: 20px solid transparent;
}
.angle-left::before {
    content: '';
    position: relative;
    left: -25px;
    top: 25px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-top: 30px solid rgb(34, 200, 230);
    border-left: 20px solid transparent;
}
</style>
