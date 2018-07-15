<template>
    <div>
        <yandex-map class="ymap" zoom="8" :controls="['zoomControl']" :coords="coords" @map-was-initialized="initHandler"></yandex-map>
        <div class="info">
            <p>{{send.info}}</p>
            <h3>Регистрация</h3>
            <p>имя</p>
            <input type="text" v-model="send.name">
            <p>ссылка на картинку</p>
            <input type="text" v-model="send.imageUrl">
            <p>адрес</p>
            <input type="text" v-model="send.address">
            <p>телефонный номер</p>
            <input type="text" v-model="send.phoneNumber">
            <p>Стоимость</p>
            <input type="text" v-model="send.price">
            <p>Ссылка на сайт компании</p>
            <input type="text" v-model="send.url">
            <br><br>
            <button @click="sign_up_services">Зарегистрировать услугу</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "registrationPlaceMarks",
        data: function() { return {
            //данные для отправки
            send: {
                latitude: 55,
                longitude: 55,
                name: '',
                imageUrl: '',
                address: '',
                phoneNumber: '',
                price: '',
                url: '',
                info: '',
                index_500000: null
            },
            //гуишные ссылки
            coords: [55,55],
            placeMark: null//ссылка на метку на карте
        }},
        methods: {
            initHandler: function (myMap) {
                //при инициализации библиотеки яндекс карт
                //добавляем метку которой можно менять координаты щелчком на карте
                this.placeMark = new ymaps.Placemark(this.coords, {}, {});
                myMap.geoObjects.add(this.placeMark);
                myMap.events.add('click', this.click_on_map);
            },
            click_on_map: function(event){
                //при клике на карте
                this.coords = event.get('coords');//запоминаем координаты
                this.placeMark.geometry.setCoordinates(this.coords);//меняем координаты метки
            },
            calculate_index_for_square: function(coord, table){
                let tableScale = [];
                // таблица масштабов
                // [масштаб] = [размер широты, оазмер долготы]
                tableScale[500000] = [2, 3];
                let degs = tableScale[table];//вытащили размеры ячейки из таблицы
                let index = (coord[0] / degs[0]) * (coord[1] / degs[1] + 1);
                return index;
            },
            sign_up_services: function () {
                //посчитали индекс квадранта для заданного масштабы
                this.send.index_500000 = this.calculate_index_for_square(this.coords, 500000);
                this.send.latitude = this.coords[0];
                this.send.longitude = this.coords[1];
                console.log(this.send);
                //отправили на сервер данные
                //---------------------------squareIndex500000-------------
                axios.get(`http://localhost/rust/api/signUpPlaceMark.php?latitude=${this.send.latitude}&longitude=${this.send.longitude}&squareIndex500000=${this.send.index_500000}`)
                    .then(response => (console.log(response))
                        .catch(function(reason) {
                            console.log(reason);
                        }));
            }
        }
    }
</script>

<style scoped>
    .ymap {
        width: 500px;
        height: 500px;
        display: inline-block;
    }
    .info {
        display: inline-block;
    }
</style>