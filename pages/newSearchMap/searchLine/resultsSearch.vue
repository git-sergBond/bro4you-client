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
                    <p class="title">{{service.name}}</p>
                    <p class="text"><img class="star" v-for="st in [1,2,3,4,5].splice(0,Number(service.rating))" src="images/icons/star.png"><img class="star" v-for="st in [1,2,3,4,5].splice(0,5-Number(service.rating))" src="images/icons/star1.png"> {{service.rating}} {{!!service.pricemin?"цена от":"цена не указана"}} {{service.pricemin}}</p>
                    <p class="text">{{ service.points.length == 0 ? "Выездная услуга" : service.points[0].address }}
                        <br>открыт до 18:00
                    </p>
                </div>
                <div class="part2">
                    <img :src="service.images[0].imagepath">
                    <span class="text">{{service.ratingcount}} отзывов</span>
                </div>
                </div>
            </div>
        </div>
        <div>
            Декоратив фигня
        </div>
    </div>
</template>

<script>
export default {
    name: "resultsSearch",
    props: ['services'],
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
    box-shadow: -1px -2px 20px 0px;

    --btn-color: rgba(171,211,226,1)
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
    background-color: var(--btn-color);
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
    display: flex;
    align-items: center;
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
    /*top: -24px;*/
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-bottom: 30px solid var(--btn-color);
    border-right: 20px solid transparent;
}
.angle-left::before {
    content: '';
    position: relative;
    left: -25px;
    /*top: 25px;*/
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-top: 30px solid var(--btn-color);
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
p.title{
    font-size: 18px;
    margin-bottom: 0;
}
p.text{
    font-size: 13px;
}
.item img.star{
    height: 15px;
    width: 15px;
}
</style>
