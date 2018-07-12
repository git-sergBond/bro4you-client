<template>
    <div class="app--categories">
        <div class="app--categories--parent">
            <button v-if="parent_cat != null"
                    @click="on_click_parent_cat"
                    class="app--categories-item">
                <img :src="parent_cat.img"/>
                <p>{{parent_cat.name}}</p>
            </button>
        </div>
        <div class="app--categories--menu">
            <button v-for="item in cats"
                    @click="click_on_category(item)"
                    class="app--categories-item"
                    :class="{red: item.check}">
                <img :src="item.img"/>
                <p>{{item.name}}</p>
            </button>
        </div>
        <button @click="clear">Найти</button>
        <button>Очистить</button>
    </div>
</template>

<script>
    export default {
        name: "category",
        data: function () {
            return {
                parent_cat: null,
                cats: [],
                tree: [
                    {
                        name: 'Машины',
                        img: '',
                        sub: [
                            {
                                check: false,
                                name: 'Жигуль)',
                                img: ''
                            },
                            {
                                check: false,
                                name: 'Форд',
                                img: ''
                            }
                        ]
                    },
                    {
                        name: 'Роботы',
                        img: '',
                        sub: [
                            {
                                check: false,
                                name: 'т-900',
                                img: ''
                            },
                            {
                                check: false,
                                name: 'robocop',
                                img: ''
                            }
                        ]
                    },
                ]
            }
        },
        methods:{
            click_on_category: function (item) {
                let i = this.tree.indexOf(item);
                item.check = !item.check;
                this.cats = this.tree[i].sub;
                this.parent_cat = this.tree[i];
            },
            on_click_parent_cat: function () {
                this.parent_cat = null;
                this.cats = this.tree;
            },
            clear: function () {
                
            }
        },
        mounted: function () {
            this.cats = this.tree;
        }
    }
</script>

<style scoped>
    .app--categories{
        display: block;
    }
    .app--categories--parent{
        display: flex;
    }
    .red{
        color: green;
    }
</style>