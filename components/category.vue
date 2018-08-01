<template>
    <div v-if="!!show_child && !!show_parent" class="app--categories">
        <div class="app--categories--parent">
            <div v-if="show_parent.name != 'root'"
                    @click="on_click_parent_cat"
                    class="app--categories-item">
                <img :src="show_parent.img"/>
                <p>{{show_parent.name}}</p>
            </div>
        </div>
        <div class="app--categories--menu">
            <div v-for="(item, index) in show_child"
                    v-show="isShowItem(index)"
                    @click="click_on_category(item)"
                    class="app--categories-item"
                    :class="{red: item.check}">
                <img :src="item.img"/>
                <p>{{item.name}}</p>
            </div>
        </div>
        <div class="buttons-menu">
            <div class="button-skew">
                <p @click="search">Найти</p>
                <p @click="clear(tree)">Очистить</p>
            </div>
            <div class="button-skew">
                <p v-if="left > 0" @click="clk_left">left</p>
                <p v-if="right < show_child.length" @click="clk_right">right</p>
            </div>
        </div>
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
    .app--categories--parent {
        margin-bottom: 30px;
    }
    .red{
        color: green;
    }
    .app--categories--menu {
        display: flex;
        position: relative;
        left: 50px;
    }
    .app--categories-item p {
        text-align: center;
    }
    .app--categories-item {
        width: 100px;
        height: 55px;
        background: white;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 4px;
        box-shadow: 0px 0px 30px 1px;
    }
    .app--categories-item:before {
        content: "";
        position: absolute;
        top: -25px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 25px solid white;
    }
    .app--categories-item:after {
        content: "";
        position: absolute;
        bottom: -25px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 25px solid white;
    }
    /* кнопки */
    .buttons-menu{
        margin: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button-skew{
        display: flex;
        margin-left: 20px;
        margin-right: 40px;
    }
    .button-skew p{
        display:inline-block;
        vertical-align:top;
        padding:0 20px;
        height:40px;
        color:#fff;
        text-decoration:none;
        font-family:Arial, sans-serif;
        font-size:14px;
        line-height:40px;
        font-weight:bold;
        letter-spacing:0.05em;
        text-transform:uppercase;
        background:#00B98B;
        text-align:center;
        position:relative;
    }
    .button-skew p:hover {
        opacity:0.8;
    }
    .button-skew p:before {
        content:'';
        display:block;
        clear:both;
        width:0;
        height:0;
        border-left:30px solid transparent;
        border-bottom:40px solid #00B98B;
        position:absolute;
        top:0;
        left:-30px;
    }
    .button-skew p:after {
        content:'';
        display:block;
        clear:both;
        width:0;
        height:0;
        border-right:30px solid transparent;
        border-top:40px solid #00B98B;
        position:absolute;
        top:0;
        right:-30px;
    }
</style>