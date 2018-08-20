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
                this.showFullInfo(item)
            }else{

            }
        },
        showFullInfo(){

        },
        showFullInfo(){

        }
    }
}
</script>

<style lang="scss">

</style>
