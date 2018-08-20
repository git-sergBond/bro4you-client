<template>
<div>
    <div v-if="!child">
        <p>Выберите категорию</p>
        <ul>
            <li v-for="item in model.child">
                <button @click="clickOnItem(item)">{{ item.name }}</button>
            </li>
        </ul> 
    </div>
    <div v-if="!!child"> 
        <p>{{child.name}} <button @click="close">Вернуться</button></p>
        <ul>
            <li v-for="item in child.child">
                <button @click="getServices(item)">{{ item.name }}</button>
            </li>
        </ul> 
    </div>
</div>
</template>

<script>
export default {
    name: "categories",
    props: {
        model: Object,

    },
    data(){
        return {
            child: null
        }
    },
    methods: {
        clickOnItem(child){
            this.child = child
        },
        getServices(item){
            let obj = {
                typeQuery: 3,
                categoriesId: [item.id]
            }
            this.$emit('event_getServices',123)
        },
        close(){
            this.child = null
        }
    }
}
</script>
