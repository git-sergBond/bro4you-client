<template>
    <div>
        <button>Вернуться</button>
        <h3>{{service.name}}</h3>
        <P>[звезды] {{service.rating}}</P>
        <ul>
            <li v-for="image in service.images">{{image.imagepath}}</li>
        </ul>
        <button>+  Подписаться</button>
        <p>{{service.description}}</p>
        <p style="color:red">время спарсено</p>
        <p style="color:red">телефон по компании есть?</p>
        <p>точки + телефон</p>
        <p>сайт</p>
        <button>написать сообщение</button>
    </div>
</template>

<script>
export default {
    name: 'fullInfo',
    props: ['service'] 
}
</script>

<style>

</style>
