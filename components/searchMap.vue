<template>
    <div class="search">
        <div class="txt-input">
            <input type="text" v-model="message">
        </div>
        <div class="button-right-f"
             @click="$emit('event_click_btn_search')">
            <img src="images/icons/search.png"/>
        </div>
        <div class="button-right"
             @click="$emit('event_show_category_trig')">
             <img src="images/icons/categories80.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchMap",
        props: ['P_message']
    }
</script>

<style  scoped>
    .button-right, .button-right-f{
        --bcolor: white;
        --spadding: 2px;
        /*padding-right: var(--spadding);*/
        height: var(--height);
        background-color: var(--bcolor);
        padding-left: var(--spadding);
        background-color: var(--bcolor);

        color: black;
        font-weight: bold;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 8px 1px 10px -2px black;
    }
    .button-right:after{
        --proporions: calc(var(--height) / 1.414);
        content: "";
        position: relative;
        top: 0px;
        right: calc(var(--proporions) / (-2) );
        width: var(--proporions);
        height: var(--proporions);
        background-color: var(--bcolor);
        transform: rotate(45deg);
        box-shadow: 5px -5px 5px -5px black;
    }
    .button-right-f:after{
        --proporions: calc(var(--height) / 1.414);
        content: "";
        position: relative;
        top: 0px;
        right: calc(var(--proporions) / 2 );
        width: var(--proporions);
        height: var(--proporions);
        background-color: transparent;
        border: 1px solid transparent;
        border-top-color: black;
        border-right-color: black;
        transform: rotate(45deg);
    }
    .search{
        display: flex;
        align-items: flex-start;
        --height: 32px;
        box-shadow: 10px 1px 20px -2px black;
    }
    .txt-input{
        height: var(--height);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
    }
    input[type="text"] {

    }
    .search img{
        width: var(--height);
        height: var(--height);
    }
</style>