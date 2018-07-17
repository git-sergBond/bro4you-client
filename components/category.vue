<template>
    <div class="app--categories">
        <div class="app--categories--parent">
            <div v-if="show_parent.name != 'root'"
                    @click="on_click_parent_cat"
                    class="app--categories-item">
                <img :src="show_parent.img"/>
                <p>{{show_parent.name}}</p>
            </div>
        </div>
        <div class="app--categories--menu">
            <button v-for="(item, index) in show_child"
                    v-show="isShowItem(index)"
                    @click="click_on_category(item)"
                    class="app--categories-item"
                    :class="{red: item.check}">
                <img :src="item.img"/>
                <p>{{item.name}}</p>
            </button>
        </div>
        <button v-if="left > 0" @click="clk_left">left</button>
        <button v-if="right < show_child.length" @click="clk_right">right</button>
        <button @click="search">Найти</button>
        <button @click="clear(tree)">Очистить</button>
    </div>
</template>

<script>
    //import json from './components/categories.json';
    export default {
        name: "category",
        data: function () {
            return {
                parent: [],
                show_parent: null,
                show_child: null,
                tree: null,
                checked: [],
                left: 0,
                right: 2
            }
        },
        methods:{
            click_on_category: function (item) {
                if (item.child.length > 0){
                    this.show_child = item.child;
                    this.parent.push(this.show_parent);
                    this.show_parent = item;
                } else {
                    item.check = !item.check;
                    let index = this.checked.indexOf(item);
                    if (index == -1){
                        this.checked.push(item);
                    } else {
                        this.checked.splice(index,1);
                    }
                }
            },
            on_click_parent_cat: function () {
                this.show_parent = this.parent.pop();
                this.show_child = this.show_parent.child;
            },
            clear: function (branch) {
                //очистка выделенных подкатегорий
                branch.check = false;
                let context = this;
                if(branch.child.length > 0) {
                    branch.child.forEach(function (el) {
                        context.clear(el);
                    })
                }
                this.checked = [];
                this.search();
                this.$emit('event-clear');
            },
            search: function () {
                //отправка выделенных подкатегорий
                this.$emit('event_category_filter', this.checked);
            },
            isShowItem: function (index) {
                return (index <= this.right && index >= this.left)
            },
            clk_left: function (i) {
                this.left--;
                this.right--;
            },
            clk_right: function (i) {
                this.left++;
                this.right++;
            },
        },
        mounted: function () {
            this.tree = data_json;
            this.show_child = this.tree.child;
            this.show_parent = this.tree;
        },
    }
    let data_json = {
        id: 0,
        name: "root",
        img: "",
        child: [
            {
                id: 1,
                name: "Автомобили СТО",
                img: "",
                child: [
                    {
                        id: 6,
                        name: "Форд",
                        img: "",
                        check: false,
                        child: [

                        ]
                    },
                    {
                        id: 7,
                        name: "Седан",
                        img: "",
                        check: false,
                        child: [

                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Книги",
                img: "",
                child: [
                    {
                        id: 8,
                        name: "Фантастика",
                        img: "",
                        check: false,
                        child: [
                            {
                                id: 8,
                                name: "123",
                                img: "",
                                check: false,
                                child: [

                                ]
                            },
                            {
                                id: 9,
                                name: "321",
                                img: "",
                                check: false,
                                child: [

                                ]
                            }
                        ]
                    },
                    {
                        id: 9,
                        name: "Приключения",
                        img: "",
                        check: false,
                        child: [

                        ]
                    }
                ]
            },
            {
                id: 3,
                name: "Одежда",
                img: "",
                check: false,
                child: [
                    {
                        id: 6,
                        name: "Майки",
                        img: "",
                        check: false,
                        child: [

                        ]
                    },
                    {
                        id: 7,
                        name: "Джинсы",
                        img: "",
                        check: false,
                        child: [

                        ]
                    }
                ]
            },
            {
                id: 4,
                name: "еще кат. 1",
                img: "",
                check: false,
                child: [

                ]
            },
            {
                id: 5,
                name: "еще кат. 2",
                img: "",
                check: false,
                child: [

                ]
            }
        ]
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