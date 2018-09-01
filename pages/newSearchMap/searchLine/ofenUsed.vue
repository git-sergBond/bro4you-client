<template>
    <div class="container my-vars">
        <p>Часто использовалось</p>
        <div v-if="!!ofenUsedList">
            <div class="item" v-for="item in ofenUsedList" @click="getServices(item)">
                <img class="icons" src='images/icons/categoryes/авто-и-преревозки.jpg'>
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import TOKENS from "../../../TOKENS.js";
import Categori from '../../../clases/Categori.js'
export default {
    data() {
        return{
            ofenUsedList: null
        }
    },
    methods: {
        getServices(item){
            this.$emit('event_getServices',{
                typeQuery: 3,
                categoriesId: [item.id]
            })
        },
        loadOfenUsed: async function(){
            try{
                //загружаем  id часто используемых категорий
                let getItems = localStorage.getItem(TOKENS.OFENUSED);
                getItems = JSON.parse(getItems);
                if (getItems != undefined){
                    //загружаем актуальные категории с сервера
                    let tmpCats = await Categori.getCategoriesForSite();
                    //оставляем только те категории которые использовались чаще прочих
                    let ufenCats = [];
                    //5 элементов
                    for(const iter in [1,2,3,4,5]){
                        let max = 0;
                        let indexMaxEl = null;
                        //  находим максимальный элемент
                        for (let i = 0; i < getItems.length; i++) {
                            const el = getItems[i];
                            if(!!el && (el > max)) {
                                indexMaxEl = i;
                                max = el;
                            }
                        }
                        //если он найден, то ищем соответствие в актуальных данных и сохраняем
                        if(!!indexMaxEl) if(!!getItems[indexMaxEl]){
                            getItems[indexMaxEl] = null;
                            for (let mainCat of tmpCats.child) {
                                if (Number(indexMaxEl) == Number(mainCat.id)) {
                                    ufenCats.push(mainCat)
                                }
                            }
                        }
                    }
                    return ufenCats;
                } else {
                    console.log("warning: объекта статистики часто используемых категорий еще нет в хранилище")
                }
            } catch(e) {
                alert(e.message)
            }
            
        }
    },
    async mounted(){
        this.ofenUsedList = await this.loadOfenUsed()
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
    width: 300px;
    background-color: rgba(255, 255, 255, 0.7);
    margin-top: 10px;
    box-shadow: -4px 7px 20px 0px;
}
.item{
    display: flex;
    align-items: center;
    padding-left: 13px;
}
.item:hover{
    background-color: darkgrey;
}
.item p {
    margin-left: 13px;
}
p{
    margin: 3px;
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
