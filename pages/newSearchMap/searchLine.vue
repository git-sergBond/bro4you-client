<template>
    <div>
        <input type="text" v-model="userQuery" placeholder="Что вы ищите?" ><button>Искать</button>
        <list-autocomplete v-show="dataAutocomplete.length > 0"></list-autocomplete>
        <categories v-show="dataAutocomplete.length == 0"></categories>
        <results-search></results-search>
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
            dataAutocomplete: []
        }
    },
    components: {
        listAutocomplete,
        categories
    },
    watch: {
        'userQuery': async function(newStr, oldStr){
            const typeQuery = 1;
            let result = await axios.post({
                url: 'ServicesAPI/getServices',
                data: { 
                    typeQuery, 
                    newStr 
                }, 
                method: 'POST' 
            });
            console.log(result.data)
        }
    }
}
</script>

<style lang="scss">

</style>
