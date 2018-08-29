<template>
    <div>
        <input type="text" v-model="userQuery" placeholder="Что вы ищите?" ><button>Искать</button>
        <list-autocomplete v-show="stateComp == 1" :list-data="dataAutocomplete"></list-autocomplete>
        <categories v-show="stateComp == 0"  @event_getServices="getServices" :model="categories"></categories>
        <results-search v-show="stateComp == 2" :services="dataServices"
            @showFullInfo='showFullInfo' ></results-search>
        <full-info v-if="stateComp == 3" :service="curentService"></full-info>
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
        }
    },
    computed: {
        //состояние приложения
        /*
            0 - часто исползуемые услуги
            1 - автокомплит + категории
            2 - результаты поиска
            3 - подробная информация о услуге
        */
        stateComp: function(){
            if(this.dataAutocomplete.length == 0 && !!this.categories){
                return 0;
            }
            if(this.dataAutocomplete.length > 0){
                return 1; //автокомплит
            }
            if(this.dataServices.length > 0){
                return 2; //результаты поиска
            }
            if(!!this.curentService){
                return 3; //подробная информация о услуге
            }
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
            }catch(e){
                console.log(e.message)
            }
        }
    },
    watch: {
        'userQuery': async function(newStr, oldStr){
            if(newStr.length < 3){
                this.clearAutocomplete()
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
