<template>
  <div>
    <mt-swipe :auto="3000" class="slide-common">
      <mt-swipe-item class="slide1 item" v-for="(banner, index) in banners" :key="index">
        <img :src="banner.imgUrl" :alt="banner.des" width="100%" height="100%"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail'
}
</script>

<style scoped>

</style>
