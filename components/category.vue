<template>
    <div class="app--categories">
        <div class="app--categories--parent">
            <div v-for="item in categories" class="app--categories-item">
                <img :src="item.img"/>
                <p>{{item.name}}</p>
            </div>
        </div>
        <div class="app--categories--menu">
            <div v-for="(item, index) in categories"
                 @click="click_on_category(index)"
                 class="app--categories-item">
                <img :src="item.img"/>
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "category",
        data: function () {
            return {
                parent_cat: [],
                categories: [
                    {
                        name: 'Автомобили',
                        img: ''
                    },
                    {
                        name: 'Гостиницы',
                        img: ''
                    },
                    {
                        name: 'Красота',
                        img: ''
                    },
                    {
                        name: 'Здоровье',
                        img: ''
                    }
                ],
            }
        },
        methods:{
            click_on_category: function () {

            }
        }
    }
</script>

<style scoped>

</style>