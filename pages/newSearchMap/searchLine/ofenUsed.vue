<template>
    <div>
        <p>Часто используемые</p>
        <ul v-if="!!ofenUsedList">
            <li></li>
        </ul>
    </div>
</template>

<script>
import TOKENS from "../../../TOKENS.js";
import Categori from '../../../clases/Categori.js'
export default {
    data: {
        ofenUsedList: null
    },
    methods: {
        clickOnItem(){
            //запрос на полчение данных
            alert("click")
        },
        loadOfenUsed: function(){
            //загружаем  id часто используемых категорий
            //загружаем актуальные категории с сервера
            //оставляем только те категории которые использовались чаще прочих
        }
    },
    mounted(){
        this.ofenUsedList = this.loadOfenUsed()
    }
}
</script>

<style>

</style>
