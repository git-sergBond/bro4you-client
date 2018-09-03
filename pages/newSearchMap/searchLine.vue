<template>
    <div class="my-vars">
        <div class="flex-search-line">
            <div class="flex-search-line--line angle-right2 shadow">
                <img class="icons2 common-margin" src="images/icons/searching-magnifying-glass.png">
                <input type="text" class="search-query common-margin" 
                v-model="userQuery" 
                @focus="searchFocus" 
                @blur="searchBlur" placeholder="Поиск" >
            </div>
            <div class="flex-search-btn" @click="clickSearch" >
                <img class="icons" style="width: 28px; height: 28px" src="images/icons/searching-magnifying-glass.png">
            </div>
            <div class="flex-search-btn" @click="clickSearch" >
                <img class="icons" style="width: 28px; height: 28px" src="images/icons/palets.png">
                </div>
        </div>
        
        <ofen-used v-show="getLastState == 0" 
             @event_getServices="getServices"></ofen-used>

        <categories v-show="getLastState == 1" 
        @event_getServices="getServices" 
        @beforeState="beforeState"
        :model="categories"></categories>
       
        <list-autocomplete v-show="getLastState == 2" 
            :list-data="dataAutocomplete"
            :tree-categories="categories"
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
import ofenUsed from "./searchLine/ofenUsed.vue";

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
                0 - часто исползуемые услуги
                1 - поиск по категориям this.dataAutocomplete.length == 0 && !!this.categories
                2 - автокомплит this.dataAutocomplete.length > 0
                3 - результаты поиска this.dataServices.length > 0
                4 - подробная информация о услуге !!this.curentService
            */
        }
    },
    props: ['getDiagonalMap','getCenterMap'],
    components: {
        listAutocomplete,
        categories,
        resultsSearch,
        fullInfo,
        ofenUsed,
    },
    computed: {
        getLastState(){
            return this.stateQueue[this.stateQueue.length-1]
        }
    },
    methods: {
        searchFocus(){
            this.changeState(1)
        },
        searchBlur(){
            if(this.getLastState() != 1) this.beforeState()
        },
        clearAutocomplete(){
            this.dataAutocomplete = []
        },
        changeState(newState){
            this.stateQueue.push(newState)
        },
        beforeState(){
            this.stateQueue.pop()
        },
        deletePoints(){
            try{
                this.$emit('deletePoints');
            }catch(e){
                console.log(e.message, 'background: #222; color: #bada55')
            }
        },
        async getServices({typeQuery,type=null,id=null,userQuery=null,regionsId=null, categoriesId}){
            this.changeState(3)
            try{
                let diagonalTmp  = this.getDiagonalMap()[0];
                const diagonal = {
                     longitude: diagonalTmp[1],
                     latitude: diagonalTmp[0]
                }
                let centerTmp = this.getCenterMap();
                const center = {
                     longitude: centerTmp[1],
                     latitude: centerTmp[0]
                }
                console.log('центр '+center);
                console.log('диагоняль '+diagonal);
                //3 == typeQuery пользователь указал категории для поиска
                let result = await axios({url: 'ServicesAPI/getServices',data:{
                    typeQuery,center,diagonal,type,id,userQuery,regionsId,categoriesId                  
                }, method: 'POST' })
                this.deletePoints();
                let servicesAfterParse = []
                for (let service of result.data.services) {
                    servicesAfterParse.push(new Service(service,null,this))
                }
                this.dataServices = servicesAfterParse;
                //если нажали на услугу в автокомплите
                if(this.dataServices.length == 1){
                    this.showFullInfo(this.dataServices[0]);
                    this.changeState(4);
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
          //  this.changeState(4);
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
                    let diagonalTmp  = this.getDiagonalMap()[0];
                const diagonal = {
                     longitude: diagonalTmp[1],
                     latitude: diagonalTmp[0]
                }
                let centerTmp = this.getCenterMap();
                const center = {
                     longitude: centerTmp[1],
                     latitude: centerTmp[0]
                }
                    const typeQuery = 1;// запрос на получение элементов интелект. поиска
                    let result = await axios({
                        url: 'ServicesAPI/getServices',
                        data: { 
                            typeQuery, 
                            userQuery: newStr,
                            center,
                            diagonal
                        }, 
                        method: 'POST' 
                    });
                    this.deletePoints();
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

<style scoped>
.my-vars{
    --c-margin: 5px;
    --c-proportion: 32px;
    --with-marg: 37px;
    --sizeV: 40px;
    --sizeH: var(--sizeV);
}
/*позиционирование*/
.flex-search-line{
    display: flex;
    align-items: center;
}
.flex-search-line--line{
    display: flex;
    align-items: center;
    background-color: white;
}
/*стили*/
.search-query{
    margin-left: 5px;
    width: 400px;
    background-color: transparent;
    border: 0;
}
.flex-search-btn{
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--with-marg);
    width: var(--sizeV);
    margin-left: 45px;
    box-shadow: -10px 3px 10px -5px black, 9px 3px 10px -5px black, 25px 5px 20px -10px black, -20px -1px 20px -8px black, 17px -11px 19px -15px black;
}
.flex-search-btn::after {
    --with-marg-invers: -37px;
    content: '';
    position: relative;
   right: -20px;
   
    bottom: 0px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-top: var(--with-marg) solid transparent;
    border-left: var(--with-marg) solid white;
}
.flex-search-btn::before {
    --with-marg-invers: -37px;
    content: '';
    position: relative;
   left: -20px;

    bottom: 0px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-bottom: var(--with-marg) solid transparent;
    border-right: var(--with-marg) solid white;
}
.flex-search-btn .icons{
    position: absolute;
    top: 3px;
}
/*общие стили*/
.common-margin{
    margin: var(--c-margin)
}
.angle-right::after {
    --with-marg-invers: -37px;
    content: '';
    position: relative;
    right: var(--with-marg-invers);
    bottom: 0px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-top: var(--with-marg) solid transparent;
    border-left: var(--with-marg) solid white;
    box-shadow: -15px 0px 0px 0px white, -13px 5px 10px -5px black;
}
.angle-right2::after {
    --with-marg-invers: -37px;
    content: '';
    position: relative;
    right: var(--with-marg-invers);
    bottom: 0px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-top: var(--with-marg) solid transparent;
    border-left: var(--with-marg) solid white;
    box-shadow: -20px 2px 0px -2px white, -13px 7px 8px -5px black
}
.angle-left::before {
    --with-marg-invers: -37px;
    content: '';
    position: relative;
    left: var(--with-marg-invers);
    bottom: 0px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-bottom: var(--with-marg) solid transparent;
    border-right: var(--with-marg) solid green;
    box-shadow: -15px 0px 0px 0px white, -13px 5px 10px -5px black;
}
.shadow{
    box-shadow: -3px 5px 10px -5px;
}
/*Иконки*/
.icons{
    height: var(--sizeH);
    width: var(--sizeV);
    margin: 0;
   /* padding: 0;*/
   margin: auto;
    z-index: 3;
}
.icons2{
    height: 28px;
    width: 28px;
    padding: 0;
}
</style>
