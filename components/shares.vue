<template>
    <div>
    <div class="card-container">
        <div v-for='item in shares_data'
             @click="$emit('click_on_card',item.coords)"
             class="card"
             :class="{'on-card': F_is_equals_coords(item.coords)}">
            <div>
                <img :src="item.imageUrl">
                <p style="margin-left: 32%">
                    <b>{{item.name}}</b>
                    <br>{{item.address}}
                    <br>{{item.phoneNumber}}
                    <br><span v-for='i in [1,2,3,4,5]'
                              :class="{ 'on-star': (i <= item.stars) }"
                              style="font: 1.2rem FontAwesome;">★</span>
                    <span>Отзывы ({{item.countReviews}})</span>
                </p>
            </div>
            <p class="green-button">
                <img src="images/icons/let.png"> Написать сообщение
            </p>
        </div>
    </div></div>
</template>

<script>
    export default {
        name: "shares",
        props: ['coords', 'shares_data', 'F_is_equals_coords'],
        methods: {
            is_share(item){
                return item.type == 'shares';
            },
        },
    }
</script>

<style scoped>
    .card-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .card{
        margin-bottom: 10px;
        background-color: white;
        max-width: 270px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    .card:hover{
        box-shadow: 0 0 20px rgb(58, 128, 2);
    }
    .on-card{
        border: 2px solid green;
        box-shadow: 0 0 20px rgba(1, 255, 56, 0.801);
    }
    .card img{
        float: left;
        max-width: 30%;
    }
    .green-button{
        display: flex;
        justify-content: center; /*Центрирование по горизонтали*/
        align-items: center;     /*Центрирование по вертикали */
        color: white;
        background-color: rgb(6, 139, 6);
        clear: left;
        margin: 0;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
    }
    .green-button span{
        margin-left: 0.5rem;
    }
    .green-button img{
        width: 1.5rem;
        height: 1.5rem;
    }
    .on-star{
        color: red;
    }
</style>