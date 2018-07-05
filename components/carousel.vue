<template>
  <div class="carousel">
    <img 
    v-for="(img, index) in images" 
    v-show="index == cur_image" 
    :src='img'
    :width="Cwidth"
    height="170px">
    <div class="btn left" @click="before_image"></div>
    <div class="btn right" @click="after_image"></div>
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
  position: relative;
}
.carousel img{
  z-index: 1;
}
.btn{
  position: absolute;
  height: 100%;
  width: 20px;
  margin: 0;
  text-align: center;
  background-color: rgba(128, 128, 128, 0.3);
}
.btn:hover{
  background-color: rgba(128, 128, 128, 0.6);
}
.left{
  z-index: 2;
  left: 0px;
  top: 0;
  line-height: 0;
}
.right{
  z-index: 2;
  right: 0;
  top: 0;
  line-height: 0;
}
.left::after {
  content: '';
  position: absolute;
  top:50%;
  left: 0;
  width: 0; 
  height: 0; 
  border-width: 0;
  border: 10px solid transparent;
  border-right: 10px solid white; 
}
.right:after {
  content: '';
  position: absolute;
  top:50%;
  right: 0;
  width: 0; 
  height: 0; 
  border: 10px solid transparent;
  border-left: 10px solid white; 
}
</style>

