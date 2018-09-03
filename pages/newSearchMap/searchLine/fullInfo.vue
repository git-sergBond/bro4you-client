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
            <div class="slider">
                <div class="left1" @click="left"><img  src="images/icons/arrow-left.png"></div>
                <img class="image" v-for="(image, index) in service.images" v-show="numImage == index" :src="image.imagepath">
                <div class="right1" @click="right"><img  src="images/icons/arrow-right.png"></div>
            </div>
            <div class="slider-comment">
                <p class="comment">{{numImage+1}}/{{service.images.length}}</p>
                <p class="comment">+  Подписаться</p>
            </div>
            <p class="desc">{{service.description}}</p>
            <p style="color:red"><img src="images/icons/clock-circular-outline.png"> время спарсено</p>
            <button>написать сообщение</button>
            <p style="color:red"><img src="images/icons/old-handphone.png"> телефон по компании есть? (не нужно)</p>
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'fullInfo',
    props: ['service'],
    data(){
        return {
            numImage: 0
        }
    },
    methods: {
        back(){
            this.$emit('beforeState')
        },
        left(){
            if(this.numImage > 0){
                this.numImage--;
            }
        },
        right(){
            if(this.numImage < this.service.images.length-1){
                this.numImage++;
            }
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
    box-shadow: -1px -2px 20px 0px;

    --btn-color: rgba(171,211,226,1)
}
.list-res::-webkit-scrollbar{
    width: 20px;
    padding: 3px;
    background-color: transparent;
}
.list-res::-webkit-scrollbar-thumb{
    background-color: var(--btn-color);
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
    margin-left: 30px;
    margin-right: 30px;
}
.header .part2{
    margin: 0;
    width: 160px;
}
/*слайдер*/
.slider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    margin-right: 30px;
}
.slider .left1{
    position: relative;
    top: 0px;
    left: -3px;
}
.slider .right1{
    position: relative;
    top: 0px;
    left: 3px;
}
.slider .image{
    width: 100%;
}
.slider-comment{
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
}
.desc{
    font-size: 15px;
    border-bottom: 3px solid rgb(184, 177, 177);
    margin-top: 15px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 15px;
}
</style>
