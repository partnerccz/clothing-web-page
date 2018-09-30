<template>
  <div id="slide" class="swipe-wrapper">
    <mt-swipe :auto="3000" class="slide-common">
      <mt-swipe-item class="slide1 item" v-for="(banner, index) in banners" :key="index">
        <img src="../../images/title/title01.jpg"/>
      </mt-swipe-item>
      <!--<mt-swipe-item class="slide2 item">-->
        <!--<img src="../../images/title/title01.jpg"/>-->
      <!--</mt-swipe-item>-->
      <!--<mt-swipe-item class="slide3 item">-->
        <!--<img src="../../images/title/title01.jpg"/>-->
      <!--</mt-swipe-item>-->
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Slide'
}
</script>

<style scoped>
  .slide-common {
    width: 100%;
    height: 150px;
  }

  .slide1 {
    /*background-color: yellow;*/
  }

  .slide2 {
    /*background-color: green;*/
  }

  .slide3 {
    /*background-color: blue;*/
  }

  .item {
    text-align: center;
    line-height: 150px;
    font-size: 40px;
    color: white;
  }
</style>
