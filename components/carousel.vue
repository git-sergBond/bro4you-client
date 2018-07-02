<template>
  <div class="carousel">
    <button class="btn" @click="before_image"><</button>

    <img 
    v-for="(img, index) in images" 
    v-show="index == cur_image" 
    :src='img'
    :width="Cwidth">

    <button class="btn" @click="after_image">></button>
  </div>
</template>

<script>
module.exports = {
  props: ['images', 'Cwidth', 'Cheight'],
  data: function() {
    return {
      cur_image: 0
    }
  },
  methods: {
    before_image: function(){
      if(this.cur_image == 0) return;
      this.cur_image--;
    },
    after_image: function(){
      if(this.cur_image == this.images.length-1) return;
      this.cur_image++;
    }
  }
}
</script>

<style>
.carousel{
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn{
  margin: 2px;
  border-radius: 50%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

