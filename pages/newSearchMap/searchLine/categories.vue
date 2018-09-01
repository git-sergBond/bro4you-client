<template>
<div class="container my-vars">
    <div class="dop-info">
        <p>Москва 24гр.ц.</p>
        <p>18:20</p>
    </div>
    <div v-if="!child" class="container-row">
        <div class="item"
        v-for="item in model.child" 
        @click.prevent="clickOnItem(item)">
            <img class="icons" :src='item.img'>
            <p>{{item.name}}</p>
        </div>
    </div>
    <div v-if="!!child"> 
        <p>{{child.name}} <button @click="close">Вернуться</button></p>
        <ul>
            <li v-for="item in child.child">
                <button @click.prevent="getServices(item)">{{ item.name }}</button>
            </li>
        </ul> 
    </div>
</div>
</template>

<script>
import TOKENS from "../../../TOKENS.js";
export default {
    name: "categories",
    props: {
        model: Object,
    },
    data(){
        return {
            child: null
        }
    },
    methods: {
        clickOnItem(child){
            alert(123)
            this.addCollectionStatistics(child);
            this.child = child
        },
        addCollectionStatistics(mainCategory){
            //сбор статистики 
            let getItems = localStorage.getItem(TOKENS.OFENUSED);
            if (getItems == null) {
                //если статистика собирается в первый раз
                let newStat = JSON.stringify([]);
                localStorage.setItem(TOKENS.OFENUSED, newStat);
                this.addCollectionStatistics(mainCategory);
            } else {
                //если не в первый раз, то добавляем данные
                let itemId = mainCategory.id;
                let oldData = JSON.parse(getItems);
                if(oldData[itemId] != undefined){
                    oldData[itemId]++;
                } else {
                    oldData[itemId] = 1;
                }
                let newStat = JSON.stringify(oldData);
                localStorage.setItem(TOKENS.OFENUSED, newStat);
            }
        },
        getServices(item){
            this.$emit('event_getServices',{
                typeQuery: 3,
                categoriesId: [item.id]
            })
        },
        close(){
            this.child = null
        }
    }
}
</script>

<style scoped>
.my-vars{
    --c-margin: 5px;
    --c-proportion: 32px;
    --with-marg: 37px;
    --sizeV: 40px;
    --sizeH: var(--sizeV);
}
.container{
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.7);
    margin-top: 10px;
    box-shadow: -7px 5px 30px -1px;/*-4px 7px 20px 0px;*/
}
.container-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.dop-info{
    display: flex;
    justify-content: space-around;
}
.item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px
}
.item:hover{
    background-color: rgba(200,200,200,0.5);
}
.item p {
    font-size: 10px;
    padding: 0;
}
/*Иконки*/
.icons{
    height: var(--sizeH);
    width: var(--sizeV);
    margin: 0;
    padding: 0;
    z-index: 3;
}
</style>
