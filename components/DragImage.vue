<template>
    <div>
        <input class="" type="file">
        <div v-if="images.length == 0" 
            @dragenter.prevent='handlerDragenter'
            @dragleave.prevent='handlerDragleave'
            >
            <p ref="fileform">Нажмите сюда, для добавления фото, или перетащите файлы</p>
        </div>
        
        <div v-else>
            <div v-for="img in images">
                <button>X</button>
                <!--img-->
            </div>
            <div>
                Добавть
                <!--img-->
            </div>
        </div>
    </div>
</template>
<script>
function handlerDrop (event) {
    console.log(123)
}
export default {
    name: "DragImage",
    data(){
        return {
            images: []
        }
    },
    mounted(){
        this.$refs.fileform.addEventListener('drop', function(e){
            e.stopPropagation();
            e.preventDefault();
            console.log(123)
            for( let i = 0; i < e.dataTransfer.files.length; i++ ){
                console.log(dataTransfer.files[i].name)
            }
        }.bind(this),false);
    },
    methods: {
        handlerDragenter(){
            console.log("handlerDragenter")
        },
        handlerDragleave(){
            console.log("handlerDragleave")
        },
        handlerDrop(event){
            event.stopPropagation();
            event.preventDefault();
            alert(1123)
            console.log("handlerDrop")
        }
    }
}
</script>
<style lang="scss">

</style>
