<template>
    <div>
        <input type="text" v-model="userQuery" placeholder="Что вы ищите?" ><button @click="clickSearch">Искать</button>
        
        <categories v-show="getLastState == 0"  @event_getServices="getServices" :model="categories"></categories>
        <p v-show="getLastState == 1">Часто исползуемы услуги</p>
        <list-autocomplete v-show="getLastState == 2" :list-data="dataAutocomplete"
             @event_getServices="getServices"
        ></list-autocomplete>
        
        <results-search v-show="getLastState == 3" :services="dataServices"
            @showFullInfo='showFullInfo'
            @beforeState="beforeState"
        ></results-search>
        <full-info v-if="getLastState == 4" :service="curentService" 
            @beforeState="beforeState"
        ></full-info>
    </div>
</template>

<script>
import axios from 'axios';
import listAutocomplete from "./searchLine/listAutocomplete.vue";
import categories from "./searchLine/categories.vue";
import resultsSearch from "./searchLine/resultsSearch.vue";
import fullInfo from "./searchLine/fullInfo.vue";

import Categori from '../../clases/Categori.js'
import Service from '../../clases/Service.js'

export default {
    name: "searchLine",
    data (){
        return {
            userQuery: "",
            dataAutocomplete: [],
            dataServices: [],
            curentService: null,
            categories: null,
            stateQueue: [0], //состояние приложения
            /*
                0 - поиск по категориям this.dataAutocomplete.length == 0 && !!this.categories
                1 - часто исползуемые услуги
                2 - автокомплит this.dataAutocomplete.length > 0
                3 - результаты поиска this.dataServices.length > 0
                4 - подробная информация о услуге !!this.curentService
            */
        }
    },
    components: {
        listAutocomplete,
        categories,
        resultsSearch,
        fullInfo
    },
    computed: {
        getLastState(){
            return this.stateQueue[this.stateQueue.length-1]
        }
    },
    methods: {
        clearAutocomplete(){
            this.dataAutocomplete = []
        },
        changeState(newState){
            this.stateQueue.push(newState)
        },
        beforeState(){
            this.stateQueue.pop()
        },
        async getServices({typeQuery,center=null,diagonal=null,type=null,id=null,userQuery=null,regionsId=null, categoriesId}){
            this.changeState(3)
            try{
                //3 == typeQuery пользователь указал категории для поиска
                let result = await axios({url: 'ServicesAPI/getServices',data:{
                    typeQuery,center,diagonal,type,id,userQuery,regionsId,categoriesId                  
                }, method: 'POST' })
                let servicesAfterParse = []
                for (let service of result.data.services) {
                    servicesAfterParse.push(new Service(service,null,this))
                }
                this.dataServices = servicesAfterParse;
                //если нажали на услугу в автокомплите
                if(this.dataServices.length == 1){
                    showFullInfo(this.dataServices[0]);
                    changeState(4);
                }
                this.$emit('drawServices',this.dataServices);
            }catch(e){
                alert(e.message)
            }
        },
        async clickSearch(){
            await this.getServices({
                typeQuery: 0,
                userQuery: this.userQuery
            });
            changeState(4);
        },
        showFullInfo(service){
            try{
                this.curentService = service
                this.changeState(4)
            }catch(e){
                console.log(e.message)
            }
        }
    },
    watch: {
        'userQuery': async function(newStr, oldStr){
            if(newStr.length < 3){
                this.clearAutocomplete()
                this.changeState(0)
            }else{
                try{
                    const typeQuery = 1;// запрос на получение элементов интелект. поиска
                    let result = await axios({
                        url: 'ServicesAPI/getServices',
                        data: { 
                            typeQuery, 
                            newStr 
                        }, 
                        method: 'POST' 
                    });
                    this.dataAutocomplete = result.data.autocomplete;
                    this.changeState(2)
                }catch(e){
                    alert(e.message)
                }
            }
        }
    },
    async created (){
        this.categories = await Categori.getCategoriesForSite();
    },
}
</script>

<style lang="scss">

</style>
