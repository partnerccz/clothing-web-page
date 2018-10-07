<template>
  <div id="home">
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="home2">
        <search style="margin-bottom: 5px;"></search>
        <slide :banners="banners"></slide>
        <classify></classify>
        <product-item :product="product" v-for="product in products" :key="product.id"></product-item>
      </mt-tab-container-item>
      <mt-tab-container-item id="buyCar" style="background-color: #F8F8F8;">
        <cart-product :cart-product="cartProduct" v-for="cartProduct in cartProducts" :key="cartProduct.cart_id"></cart-product>
        <div style="display:flex;flex-direction: row;height: 60px;line-height: 60px;text-align: center;background-color: white;margin:3px 0;">
          <check-box v-model="checkedAll" style="display: inline-block;margin-left:10px;color:#666;flex:2;text-align: left;">全选</check-box>
          <span style="color:red;flex:1;">合计：1234</span>
          <div style="flex:1;background-color:#FF6000;color:white;height: 46px;line-height: 46px;margin:7px 5px 7px 5px; border-radius: 5px;">结算</div>
        </div>
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
import CartProduct from './cart/CartProduct'
import CheckBox from 'vant/lib/checkbox'
import 'vant/lib/vant-css/base.css'
import 'vant/lib/vant-css/checkbox.css'

export default {
  name: 'Home',
  components: {
    Footed,
    Slide,
    Search,
    Classify,
    ProductItem,
    OrderTitle,
    OrderStatus,
    CartProduct,
    CheckBox
  },
  data: function () {
    return {
      selected: 'home2',
      banners: {},
      products: [],
      cartProducts: [],
      checkedAll: true
    }
  },
  methods: {
    getBanner: function () {
      this.$http.post('/banner/getBanners', {groupKey: 'GROUP_HOME'}).then((response) => {
        this.banners = response.data
      })
    },
    getProducts: function () {
      this.$http.post('/product/getProductPage', {pageSize: 10, pageNum: 1}).then((response) => {
        this.products = response.data.list
      })
    },
    getCartProduct: function () {
      this.$http.get('/cartProduct/getCartProductByMid', {params: {pageSize: 10, pageNum: 1, memberId: 1}}).then((response) => {
        console.log(response)
        this.cartProducts = response.data.list
      })
    }
  },
  mounted: function () {
    this.getBanner()
    this.getProducts()
    this.getCartProduct()
  },
  watch: {
    checkedAll: function (newVal, oldVal) {
      console.log(newVal)
      if (newVal) {
        for (let p of this.products) {
          p.checked = true
        }
      } else {
        for (let p of this.products) {
          p.checked = false
        }
      }
    }
  }
}
</script>

<style scoped>
#footed{
  padding-top: 60px;
}
</style>
