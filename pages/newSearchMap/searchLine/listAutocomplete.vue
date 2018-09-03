<template>
    <div class="win-autocomplete">
        <div class="item" v-for="item in listData" @click="itemClick(item)">
            <img class="image" v-if="item.type == 'category'" src="images/icons/asd">
            <img class="image" v-if="item.type == 'company'" src="images/icons/visitor.png">
            <img class="image" v-if="item.type == 'service'" src="images/icons/ikonki-rabotaem-pod-klyuch_18_prev.png">
            <p >{{item.name}}</p>
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

<style scoped>
.win-autocomplete{
    width: 522px;
    height: 300px;
    margin-top: 10px;
    overflow-y: scroll;
    --btn-color: rgba(171,211,226,1);
    background-color: white;
    box-shadow: -1px -2px 20px -2px;
}
.win-autocomplete .item{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
}
.win-autocomplete .item{
    vertical-align: center;
}
.win-autocomplete .item:hover{
    background-color: rgba(171,211,226,1)
}
.win-autocomplete .item .image{
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 2px;
    margin-top: 2px;
}
.win-autocomplete::-webkit-scrollbar{
    width: 20px;
    padding: 3px;
    background-color: transparent;
}
.win-autocomplete::-webkit-scrollbar-thumb{
    background-color: var(--btn-color);
}
</style>
