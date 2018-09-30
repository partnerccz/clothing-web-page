<template>
  <div id="home">
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="home2">
        <search style="margin-bottom: 5px;"></search>
        <slide></slide>
        <classify></classify>
        <product-item></product-item>
      </mt-tab-container-item>
      <mt-tab-container-item id="buyCar">
        byCfasdfa
      </mt-tab-container-item>
      <mt-tab-container-item id="order">
        <order-title></order-title>
        <order-status></order-status>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--<footed :selected.sync="selected"></footed>-->
    <div id="footed">
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home2">
          <img slot="icon" src="../images/footer-icon/home0.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="buyCar">
          <img slot="icon" src="../images/footer-icon/home0.png">
          购物车
        </mt-tab-item>
        <mt-tab-item id="order">
          <img slot="icon" src="../images/footer-icon/home0.png">
          我的订单
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import Search from './home/Search'
import Footed from './common/Footer'
import Slide from './home/Slide'
import Classify from './home/Classify'
import ProductItem from './product/ProductItem'
import OrderTitle from './order/Title'
import OrderStatus from './order/Status'

export default {
  name: 'Home',
  components: {
    Footed,
    Slide,
    Search,
    Classify,
    ProductItem,
    OrderTitle,
    OrderStatus
  },
  data: function () {
    return {
      selected: 'home2'
    }
  }
}
</script>

<style scoped>
#footed{
  padding-top: 60px;
}
</style>
