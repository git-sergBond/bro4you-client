<template>
    <div>
        <div v-for='pm in placemarks_preload'>
            <static-map :z=13
                        :W=300 :H=200
                        :info="pm"></static-map>
            <hr>
        </div>
    </div>
</template>

<script>
    import staticMap from '../components/staticMap.vue';
    export default {
        name: "listPlaceMarks",
        comments:{
            staticMap: staticMap
        },
        data: function () {
            return {
                //тестовые данные для проверки компонента статических картинок с ифнрмацией
                placemarks_preload: [
                    {
                        coords: [43.871158,56.347345],
                        name: 'Маникюр - 30%',
                        imageUrl: 'images/car1.jpg',
                        address: 'Белгород, улица Щорса, 123Б',
                        phoneNumber: '+ 7 (XXX) XX - 55',
                        countReviews: 123,
                        price: 7000,
                        stars: 4,
                        url: '#1'
                    },
                    {
                        coords: [44.871158,55.347345],
                        name: 'СТО - 30%',
                        imageUrl: 'images/car1.jpg',
                        address: 'Белгород, улица Щорса, 123Б',
                        phoneNumber: '+ 7 (XXX) XX - 55',
                        countReviews: 123,
                        price: 54511,
                        stars: 3,
                        url: '#1'
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>