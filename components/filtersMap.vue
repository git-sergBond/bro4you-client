<template>
    <div>
        <div v-show='P_placemarks.length != 0 && P_categories.length != 0'>
            <p><b>Уточните категорию</b></p>
            <p v-for='tag in P_categories'
               @click="$emit('event_click_btn_changeTag', tag)">
                {{ tag }}
            </p>
            <p @click="$emit('event_click_btn_ShowAllTags')">
                Показать все
            </p>
        </div>
            <!--
            :class="{'on-card': 'All' == P_cur_category}"
            :class="{'on-card': tag == P_cur_category}"
            -->
        <div class="price-filter" v-show='P_rang_price != null'>
            <span>Цена от</span>
            <input type="number"
                   v-model='P_low_price'
                   @change="$emit('event_change_txt_priceFilter')">
            <span>до</span>

            <input type="number"
                   v-model='P_high_price'
                   @change="$emit('event_change_txt_priceFilter')">
            <p> Цвет:
                <span v-for='(price, index) in P_rang_price'
                      :style="{'background-color': P_colors[index]}">{{ price }}</span>
            </p>
        </div>
        <div> Регионы ... </div>
    </div>
</template>

<script>
    export default {
        name: "filtersMap",
        props: ['P_categories', 'P_placemarks', 'P_cur_category', 'P_rang_price', 'P_low_price', 'P_high_price', 'P_colors'],
    }
</script>

<style scoped>
    /*фильтр цены*/
    .price-filter{
        background-color: white;
        padding: 0.3rem;
        box-shadow: 0 0 10px black;
        background-color: white;
    }
    .price-filter input[type='number']{
        border: 0 solid black;
        border-bottom-width: 1px;
        width: 4rem;
    }
    .price-filter p{
        margin: 0;
        margin-top: 5px;
    }
    .price-filter p span{

        border-radius: 5px;
        padding: 2px;
        margin-right: 3px;
        color: white;
    }
</style>