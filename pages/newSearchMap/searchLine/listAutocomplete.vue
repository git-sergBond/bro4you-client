<template>
    <div>
        <div v-for="item in listData">
            <p>тип: {{item.type}}, {{item.name}}, {{item.type=="point" ? item.address : "" }}  
                <button @click="itemClick(item)">Посмотреть</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "listAutocomplete",
    props: [
        "listData"
    ],
    methods: {
        itemClick(item){
            if(item.type == "point"){
                alert("точки не показываем")
            }else{
                this.$emit('event_getServices',{
                    typeQuery:2,
                    type: item.type,
                    id: item.id,
                });
            }
        }
    }
}
</script>

<style lang="scss">

</style>
