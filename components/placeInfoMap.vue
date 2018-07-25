<template>
    <div >

        <div class="place-info"
             v-for='item in P_placemarks'
             v-show='F_is_equals_coords(item.coords)'>
            <div class="button close"  @click="$emit('event_close_p')" >
                <img  src="images/icons/close52.png">
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
            <div class="button revievs"  @click="$emit('event_close_p')" >
                <P>{{item.countReviews}}</P>
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
        }
    }
</script>

<style scoped>
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
        box-shadow: 10px 0 30px 1px;
    }
    .close{
        top: 30px;
    }
    .revievs{
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