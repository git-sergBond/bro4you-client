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
            <div class="list-res">
                <div class="item" 
                v-for="service in services"
                @click="showFullInfo(service)">
                <div>
                    <p>{{service.name}}</p>
                    <p>звезды:{{service.rating}}, {{!!service.pricemin?"цена от":"цена не указана"}} {{service.pricemin}}</p>
                    <p>{{ service.points.length == 0 ? "Выездная услуга" : service.points[0].address }}</p>
                    <p>открыт до 18:00</p>
                </div>
                <div class="part2">
                    <img :src="service.images[0].imagepath">
                    <span>{{service.ratingcount}} отзывов</span>
                </div>
                </div>
                <!--
            <brief-info  :service="service"
                @showFullInfo = ""
            ></brief-info>-->
            </div>
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
    width: 400px;
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
/*список результатов*/
.list-res{
    height: 400px;
    overflow-y: scroll;
    /*display: flex;*/
    flex-direction: column;
}
.list-res .item{
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid rgb(218, 213, 213);
    padding-left: 10px;
    padding-right: 10px;
}
.list-res .item:hover{
    background-color: rgb(218, 213, 213);
}
.part2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.list-res .item img{
    width: 80px;
    height: 80px;
}
.part2 span{
    text-align: center;
}
</style>
