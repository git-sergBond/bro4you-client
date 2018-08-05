<template>
    <div >

        <div class="place-info" v-for='item in P_placemarks' v-show='F_is_equals_coords(item.coords)'>
            <p @click="$emit('event_close_p')">rrwer</p>
            <div class="button" style="top: 30px" @click="closeInfo" >
                <img src="images/icons/close52.png"  >
                <!--p>X</p-->
            </div>
            <carousel Cwidth='300px' :images="item.imageUrl"></carousel>
            <p>
                <b>{{item.name}}</b>
                <br>{{item.address}}
                <br>{{item.phoneNumber}}
                <br>{{item.price}} (Руб.)
                <br>
            </p>
            <div class="stars">
                <div v-for='i in [1,2,3,4,5]'
                      :class="{ 'on-star': (i <= item.stars) }">
                    <span class="fa fa-star fa-lg" style="font: 24px/1 FontAwesome;">★</span>
                </div>
            </div>
            <div class="button revievs"  @click="closeInfo" >
                <P>{{item.countReviews}}</P>
            </div>
            <div class="ender"></div>
            <div class="footer buttons-menu">
                <div class="button-skew">
                    <p >Заказать</p>
                    <p >Подробнее</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from './carousel.vue';
    export default {
        name: "placeInfoMap",
        props: ['P_placemarks','P_cur_point', 'F_is_equals_coords'],
        components: {
            carousel
        },
        methods: {
            closeInfo: function(){
               console.log(1234578765)
               this.$emit('event_close_p');
            }
        }
    }
</script>

<style scoped>
    /*блок который заканчивает кнопки*/
    .ender{
        position: absolute;
        bottom: -20px;
        height: 20px;
        width: 266px;
        background-color: white;
        box-shadow: 3px 7px 20px -1px;
    }
    .ender:before {
        content:'';
        display:block;
        clear:both;
        width:0;
        height:0;
        border-left:17px solid transparent;
        border-top:21px solid white;
        position:absolute;
        top:0;
        left:-17px;
    }
    .ender:after {
        content:'';
        display:block;
        clear:both;
        width:0;
        height:0;
        border-right:17px solid transparent;
        border-top:21px solid white;
        position:absolute;
        top:0;
        right:-17px;
    }
    /* кнопки */
    .buttons-menu{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: -50px;
    }
    .button-skew{
        display: flex;
        margin: 10px;
    }
    .button-skew p{
        display:inline-block;
        vertical-align:top;
        padding:0 15px;
        height:40px;
        color:#fff;
        text-decoration:none;
        font-family:Arial, sans-serif;
        font-size:13px;
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
        border-top:40px solid #00B98B;
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
    /**/
    .stars{
        position: absolute;
        left: -32px;
        top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
    }
    .button{
        position: absolute;
        height: 32px;
        width: 32px;
        left: -32px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: -7px 1px 25px -5px;
    }
    .close{
        top: 30px;
    }
    .revievs{
        font-family:Arial, sans-serif;
        bottom: 30px;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .button:before, .info-mark .button:after{
        content: "";
        position: absolute;
        right: 0;
    }
    .button:before{
        top: -15px;
        border-bottom: 15px solid white;
        border-left: 32px solid transparent;
    }
    .button:after{
        bottom: -15px;
        border-top: 15px solid white;
        border-left: 32px solid transparent;
    }
    .button img{
        height: 32px;
        width: 32px;
    }
    .button img.reverce{
        transform: scale(-1, 1);
    }
    /**/
    .place-info{
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    .place-info .quit{
        background-color: white;
        margin-left: 93%;
        border-width: 0; font-size: 2rem
    }
    .on-star{
        color: red;
    }
</style>