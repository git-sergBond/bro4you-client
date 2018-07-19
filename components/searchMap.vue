<template>
    <div class="search">
        <input type="text"
               v-model="message">
        <div class="button-right-f"
             @click="$emit('event_click_btn_search')">
            <img src="images/icons/search.png"/>
        </div>
        <div class="button-right"
             @click="$emit('event_show_category_trig')">&#9776;</div>
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
        --spadding: 1.2rem;
        padding-left: var(--spadding);
        padding-right: var(--spadding);
        height: 100%;
        background-color: var(--bcolor);

        color: black;
        font-weight: bold;
        font-size: 1.5rem;
    }
    .button-right:after{
        --proporions: 1.3em;
        content: "";
        position: absolute;
        top: 4px;
        margin-left: 5px;
        width: var(--proporions);
        height: var(--proporions);
        background-color: var(--bcolor);
        transform: rotate(45deg);
    }
    .button-right-f:after{
        --proporions: 1.2em;
        content: "";
        position: absolute;
        top: 5px;
        margin-left: 20px;
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
        width: 1.3em;
    }
</style>