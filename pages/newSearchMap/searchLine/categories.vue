<template>
<div>
    <div v-if="!child">
        <p>Выберите категорию</p>
        <ul>
            <li v-for="item in model.child">
                <button @click.prevent="clickOnItem(item)">{{ item.name }}</button>
            </li>
        </ul> 
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
