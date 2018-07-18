<template>
    <div>
    <div class="place-info"
         v-for='item in P_placemarks'
         v-show='F_is_equals_coords(item.coords)'>
        <button class="quit"
                @click="P_cur_point = null">×</button>
        <p>
            <b>{{item.name}}</b>
        </p>
        <carousel Cwidth='230px' :images="item.imageUrl"></carousel>
        <p>
            <br>{{item.address}}
            <br>{{item.phoneNumber}}
            <br>{{item.price}} (Руб.)
            <br>
            <span v-for='i in [1,2,3,4,5]'
                  :class="{ 'on-star': (i <= item.stars) }">
                    <i class="fa fa-star fa-lg" style="font: 24px/1 FontAwesome;">★</i>
                </span>
            <span>Отзывы ({{item.countReviews}})</span>
        </p>
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
    .place-info{
        width: 25vw;
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