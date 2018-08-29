<template>
    <div>
        {{stateComp}}
        <input type="text" v-model="userQuery" placeholder="Что вы ищите?" ><button>Искать</button>
        
        <categories v-show="stateComp == 0"  @event_getServices="getServices" :model="categories"></categories>
        <p v-show="stateComp == 1">Часто исползуемы услуги</p>
        <list-autocomplete v-show="stateComp == 2" :list-data="dataAutocomplete"></list-autocomplete>
        
        <results-search v-show="stateComp == 3" :services="dataServices"
            @showFullInfo='showFullInfo' ></results-search>
        <full-info v-if="stateComp == 4" :service="curentService"></full-info>
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
            stateComp: 0, //состояние приложения
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
    methods: {
        clearAutocomplete(){
            this.dataAutocomplete = []
        },
        async getServices({typeQuery,center=null,diagonal=null,type=null,id=null,userQuery=null,regionsId=null, categoriesId}){
            this.stateComp = 3
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
                this.$emit('drawServices',this.dataServices);
            }catch(e){
                alert(e.message)
            }
        },
        showFullInfo(service){
            try{
                this.curentService = service
                this.stateComp = 4
            }catch(e){
                console.log(e.message)
            }
        }
    },
    watch: {
        'userQuery': async function(newStr, oldStr){
            if(newStr.length < 3){
                this.clearAutocomplete()
                this.stateComp = 0
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
                    this.stateComp = 2
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
