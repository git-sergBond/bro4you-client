<template>
    <div class="static-map">
        <img :src=query class="static-map__image">
        <div class="static-map__info">
            <p >
                <b>{{info.name}}</b>
                <br>{{info.address}}
                <br>{{info.phoneNumber}}
                <br>{{info.price}} (Руб.)
            </p>   
        </div>
    </div>
</template>

<script>
export default {
    props: ['z', 'info', 'W', 'H'],
    data: function(){
        return {
            query: `https://static-maps.yandex.ru/1.x/?ll=${this.info.coords[0]},${this.info.coords[1]}&size=${this.W},${this.H}&z=${this.z}&l=map&pt=${this.info.coords[0]},${this.info.coords[1]},org`
        }
    }
}
</script>

<style>
.static-map{
    display: flex;
}
.static-map__image{
    -webkit-user-select: none;
}
.static-map__info p{
    margin-left: 0.3rem;
}
</style>
