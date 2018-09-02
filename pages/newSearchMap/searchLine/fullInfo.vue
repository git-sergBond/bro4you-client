<template>
    <div class="win-cont">
        <button @click="back">Вернуться</button>
        <h3>{{service.name}}</h3>
        <P>[звезды] {{service.rating}}</P>
        <ul>
            <li v-for="image in service.images"><img :src="image.imagepath"></li>
        </ul>
        <button>+  Подписаться</button>
        <p>{{service.description}}</p>
        <p style="color:red">[i-time] время спарсено</p>
        <p style="color:red">[i-phone] телефон по компании есть? (не нужно)</p>
        <ul>
            {{ service.points.length == 0 ? "Выездная услуга" : "" }}
            <li v-for="point in service.points">
                [i-point] {{point.address}}
                <uL>
                    <li v-for="phone in point.phones">
                        [i-phone] {{phone}}
                    </li>
                </ul>
            </li>
        </ul>
        <p style="color:red">[i-site] сайт, для него нужны Company и UserInfo</p>
        <button>написать сообщение</button>
    </div>
</template>

<script>
export default {
    name: 'fullInfo',
    props: ['service'],
    methods: {
        back(){
            this.$emit('beforeState')
        }
    }
}
</script>

<style>
/*окно*/
.win-cont{
    margin-top: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: -1px -2px 20px 0px;
}
</style>
