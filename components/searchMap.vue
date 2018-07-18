<template>
    <div class="search">
        <input type="text"
               v-model="message">
        <img src="images/icons/search.png"
             @click="$emit('event_click_btn_search')">
        <div class="button-right"
                @click="$emit('event_show_category_trig')">
            <div class="bold-txt">&#9776;</div>
        </div>
        <div class="triangle-right"></div>
    </div>
</template>

<script>
    export default {
        name: "searchMap",
        props: ['P_message']
    }
</script>

<style scoped>
    .button-right{
        height: 100%;
        background-color: white;
        display: flex;
        align-items: center;
        line-height: 0;
    }
    .triangle-right{
        content: '';
        width: 0;
        height: 0;
        border: 1.7rem solid transparent;
        border-left-color: white;
    }
    .bold-txt{
        font-weight: bold;
        font-weight: bold;
        font-size: 1.7rem;
        line-height: 0;
    }
    .search{
        box-shadow: 0 0 20px gray;
        display: flex;
        align-items: center;
    }
    input[type="text"] {
        font-size: 1.5em;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 60%;
    }
    .search img{
        display: flex;
        justify-content: center; /*Центрирование по горизонтали*/
        align-items: center;     /*Центрирование по вертикали */
        margin: 0;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        font-size: 1.5em;
        width: 1.3em;
    }
</style>