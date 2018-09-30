<template>
  <div id="footed">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home2">
        <img slot="icon" src="../../images/footer-icon/home0.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="buyCar">
        <img slot="icon" src="../../images/footer-icon/home0.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="../../images/footer-icon/home0.png">
        我的订单
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'footed',
  props: {
    selected: this.selected
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
#footed{
  padding-top: 60px;
}
</style>
