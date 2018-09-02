<template>
    <div class="win-cont">
        <div class="filters">
            <div class="filter left" @click="back">
                <p class="text angle-right">Вернуться</p>
            </div>
        </div>
        <div class="list-res"> 
            <div class="header">
                <p class="title part1">{{service.name}}</p>
                <p class="comment part2"><img class="star" v-for="st in [1,2,3,4,5].splice(0,Number(service.rating))" src="images/icons/star.png"><img class="star" v-for="st in [1,2,3,4,5].splice(0,5-Number(service.rating))" src="images/icons/star1.png"> {{service.rating}}</p>
            </div>
            <ul>
                <li v-for="image in service.images"><img :src="image.imagepath"></li>
            </ul>
            <button>+  Подписаться</button>
            <p>{{service.description}}</p>
            <p style="color:red">[i-time] время спарсено</p>
            <p style="color:red">[i-phone] телефон по компании есть? (не нужно)</p>
            <ul>
                {{ service.points.length == 0 ? "Выездная услуга" : "" }}
                <li v-for="point in service.points">
                    [i-point] {{point.address}}
                    <uL>
                        <li v-for="phone in point.phones">
                            [i-phone] {{phone}}
                        </li>
                    </ul>
                </li>
            </ul>
            <p style="color:red">[i-site] сайт, для него нужны Company и UserInfo</p>
            <button>написать сообщение</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fullInfo',
    props: ['service'],
    methods: {
        back(){
            this.$emit('beforeState')
        }
    }
}
</script>

<style>
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
    margin: 0;
}
p.title{
    font-size: 18px;
    margin: 0;
}
p.text{
    font-size: 13px;
    margin: 0;
}
p.comment{
    font-size: 13px;
    margin-top: 3px;
}
img.star{
    height: 15px;
    width: 15px;
}
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
}
.header .part2{
    margin: 0;
    width: 160px;
}
</style>
