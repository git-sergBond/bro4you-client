<template>
    <div class="filter-form" >
        <div class="header" >
            <div class="center" v-show="P_num_filter == 1">
                <p>Фильтр по стоимости</p>
                <div v-show='P_rang_price != null'>
                    <span>Цена от</span>
                    <input type="number" v-model='P_low_price'>
                    <span>до</span>
                    <input type="number" v-model='P_high_price'>
                </div>
            </div>
            <div class="center" v-show="P_num_filter == 2">
                Фильтр по регионам. (скоро тут появится возможность фильтрации по городам)
            </div>
            <div class="center" v-show="P_num_filter == 3">
                 <p>
                     Здесь вы можете отфильтровать метки по интересующим вас категориям
                 </p>
            </div>
        </div>
        <div class="body">
            <div class="price-filter" v-show="P_num_filter == 1">
                <p> Цвет: </p>
                <span class="price-color"
                      v-for='(price, index) in P_rang_price'
                      :style="{'background-color': P_colors[index]}">{{ price }}</span>
                <p>скоро тут будет график и чекбоксы :)</p>
            </div>
            <div class="center" v-show="P_num_filter == 2">
                <p><b>Регионы</b></p>
                <ul>
                    <li v-for='region in P_filter_regions'
                        @click="changeRegion(region)">
                            <span class="checkbox__fake">
                                <span v-show="region.check" class="b-checkbox__fake-on"></span>
                            </span>
                        {{ region.name }}
                    </li>
                </ul>
            </div>
            <div class="center" v-show="P_num_filter == 3">
                <div v-show='P_placemarks.length != 0 && P_categories.length != 0'>
                    <p><b>Уточните категорию</b></p>
                    <ul>
                        <li v-for='tag in P_categories'
                            @click="$emit('event_click_btn_changeTag', tag)">
                            <span class="checkbox__fake">
                                <span v-show="isOnCategory(tag)" class="b-checkbox__fake-on"></span>
                            </span>
                            {{ tag }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer buttons-menu">
            <div class="button-skew">
                <p @click="submit">Найти</p>
                <p @click="clear">Очистить</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "filtersMap",
        props: ['P_categories', 'P_placemarks', 'P_cur_category', 'P_rang_price', 'P_low_price', 'P_high_price', 'P_colors',
            'P_num_filter',
            'P_filter_regions'
        ],
        methods: {
            submit: function () {
                if(this.P_num_filter == 1){//money
                    this.$emit('event_change_txt_priceFilter',{
                        low_price: this.P_low_price,
                        high_price: this.P_high_price
                    });
                }
            },
            clear: function(){
                if(this.P_num_filter == 1){//money

                }
                if(this.P_num_filter == 2){//area

                }
                if(this.P_num_filter == 3){//categorise
                    this.$emit('event_click_btn_ShowAllTags');
                }
            },
            isOnCategory: function (tag) {
                if(this.P_cur_category.length == this.P_categories.length)
                    return true;
                else {
                    let index = this.P_cur_category.indexOf(tag);
                    if(index == -1)
                        return false;
                    else
                        return true;
                }
            },
            changeRegion: function (region) {
                region.check = !region.check;
                this.$emit('event_click_btn_changeRegion', this.P_filter_regions)
            }
        }
    }
</script>

<style scoped>
    .filter-form .header, .filter-form .footer{
        position: absolute;
        width: var(--width-head-and-foot);
        height: var(--height-head-and-foot);
        left: var(--pleft-head-and-foot);
        background-color: white;
    }
    /*header*/
    .filter-form .header{
        top: 0px;
    }
    .filter-form .header:after, .filter-form .header:before{
        content: "";
        position: absolute;
        bottom: 0;
        border-bottom: var(--height-head-and-foot) solid white;
    }
    .filter-form .header:before{
        left: -50px;
        border-left: var(--pleft-head-and-foot) solid transparent;
    }
    .filter-form .header:after{
        right: -50px;
        border-right: var(--pleft-head-and-foot) solid transparent;
    }
    /*footer*/
    .filter-form .footer{
        bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .filter-form .footer:after, .filter-form .footer:before{
        content: "";
        position: absolute;
        bottom: 0;
        border-top: var(--height-head-and-foot) solid white;
    }
    .filter-form .footer:before{
        left: -50px;
        border-left: var(--pleft-head-and-foot) solid transparent;
    }
    .filter-form .footer:after{
        right: -50px;
        border-right: var(--pleft-head-and-foot) solid transparent;
    }
    /*body*/
    .filter-form .body{
        position: absolute;
        background-color: white;
        top: var(--height-head-and-foot);
        width: var(--proporions);
        height: 300px;
        z-index: 4;
        box-shadow: 0px 0px 20px -5px black;
    }
    .filter-form .body:before, .filter-form .body:after{
        content: "";
        position: absolute;
        top: 0;
        border-top: 150px solid transparent;
        border-bottom: 150px solid transparent;
    }
    .filter-form .body:after{
        right: -60px;
        border-left: 60px solid white;
    }
    .filter-form .body:before{
        left: -60px;
        border-right: 60px solid white;
    }
    /*фильтр цены*/
    .header > div{
        height: 100%;
        flex-direction: column;
    }
    .body > div{
        height: 100%;
        flex-direction: column;
    }
    .center{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input[type='number']{
        border: 0 solid black;
        border-bottom-width: 1px;
        width: 4rem;
    }
    .price-color{
        border-radius: 5px;
        padding: 2px;
        margin-right: 3px;
        color: white;
    }
    /*списки с чек боксами*/
    li {
        list-style-type: none;
        margin-bottom: 3px;
    }
    .checkbox__fake {
        position: relative;
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid #c4c4c4;
        background-color: #fff;
        top: 0.5em;
    }
    .b-checkbox__fake-on {
        position: absolute;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='23' viewBox='0 0 21 23'%3E%3Cpath d='M20.966 3.178L17.62 1.045l-9.623 15.48-4.973-5.516L0 13.85 8.384 23z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        top: -3px;
        right: -2px;
        width: 21px;
        height: 23px;
        }
    /* кнопки */
    .buttons-menu{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button-skew{
        display: flex;
        margin-left: 20px;
        margin-right: 40px;
    }
    .button-skew p{
        display:inline-block;
        vertical-align:top;
        padding:0 20px;
        height:40px;
        color:#fff;
        text-decoration:none;
        font-family:Arial, sans-serif;
        font-size:14px;
        line-height:40px;
        font-weight:bold;
        letter-spacing:0.05em;
        text-transform:uppercase;
        background:#00B98B;
        text-align:center;
        position:relative;
    }
    .button-skew p:hover {
        opacity:0.8;
    }
    .button-skew p:before {
        content:'';
        display:block;
        clear:both;
        width:0;
        height:0;
        border-left:30px solid transparent;
        border-bottom:40px solid #00B98B;
        position:absolute;
        top:0;
        left:-30px;
    }
    .button-skew p:after {
        content:'';
        display:block;
        clear:both;
        width:0;
        height:0;
        border-right:30px solid transparent;
        border-top:40px solid #00B98B;
        position:absolute;
        top:0;
        right:-30px;
    }
</style>