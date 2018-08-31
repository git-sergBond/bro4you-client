<template>
    <div>
        <p>Часто используемые</p>
        <ul v-if="!!ofenUsedList">
            <li v-for="item in ofenUsedList">
                <button @click="clickOnItem">{{item.name}}</button>
            </li>
        </ul>
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
        clickOnItem(){
            //запрос на полчение данных
            alert("click")
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
                            if(!!el && (el > max)) indexMaxEl = i;
                        }
                    
                        
                        //если он найден, то ищем соответствие в актуальных данных и сохраняем
                        if(!!indexMaxEl) if(!!getItems[indexMaxEl]){
                            getItems[indexMaxEl] = null;
                 
                            for (let mainCat of tmpCats.child) {
                                
                                if (Number(indexMaxEl) == Number(mainCat.id)) {
                                    console.log(mainCat)
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

<style>

</style>
