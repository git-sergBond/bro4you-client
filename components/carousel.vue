<template>
  <div class="carousel">
    <img 
    v-for="(img, index) in images" 
    v-show="index == cur_image" 
    :src='img'
    :width="Cwidth"
    height="170px">
    <div class="btn left" @click="before_image">
      <img src="images/icons/arrow-left.png">
    </div>
    <div class="btn right" @click="after_image">
      <img src="images/icons/arrow-right.png">
    </div>
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
  display: block;
}
.btn{
  position: absolute;
  height: 100%;
  width: 30px;
  margin: 0;
  text-align: center;
  background-color: rgba(128, 128, 128, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
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

</style>

