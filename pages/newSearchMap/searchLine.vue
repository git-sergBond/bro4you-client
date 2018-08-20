<template>
    <div>
        <input type="text" v-model="userQuery" placeholder="Что вы ищите?" ><button>Искать</button>
        <list-autocomplete v-show="dataAutocomplete.length > 0" :list-data="dataAutocomplete"></list-autocomplete>
        <categories v-show="dataAutocomplete.length == 0 && !!categories" :model="categories"></categories>
        <results-search v-show="resultsSearch.length > 0"></results-search>
    </div>
</template>

<script>
import axios from 'axios';
import listAutocomplete from "./searchLine/listAutocomplete.vue"
import categories from "./searchLine/categories.vue"
import resultsSearch from "./searchLine/resultsSearch.vue"
export default {
    name: "searchLine",
    data(){
        return {
            userQuery: "",
            dataAutocomplete: [],
            resultsSearch: [],
            categories: null
        }
    },
    components: {
        listAutocomplete,
        categories,
        resultsSearch
    },
    methods: {
        clearAutocomplete(){
            this.dataAutocomplete = []
        }
    },
    watch: {
        'userQuery': async function(newStr, oldStr){
            if(newStr.length < 3){
                this.clearAutocomplete()
            }else{
                try{
                const typeQuery = 1;
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
    async created(){
        let categories = await axios({url: 'CategoriesAPI/getCategoriesForSite', method: 'GET' })
        this.categories = {
            name:"Категории", 
            child: categories.data.categories,
            root: true
        }
    },
}
</script>

<style lang="scss">

</style>
