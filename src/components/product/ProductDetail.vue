<template>
  <div style="position: relative;">
    <mt-swipe :auto="3000" class="slide-common">
      <mt-swipe-item class="slide1 item" v-for="(banner, index) in banners" :key="index">
        <img :src="banner.img_url" width="100%" height="100%"/>
      </mt-swipe-item>
    </mt-swipe>
    <div>
    </div>
    <div >
      <span style="display: block;" class="padding-common">{{productStandardS.psName}}</span>
      <span style="display: block;" class="padding-common border-common">销量：{{productStandardS.total_sell_num}}</span>
      <span style="display: block; color:red;" class="padding-common border-common">
        售价：<span style="font-size:20px;">￥{{productStandardS.sell_price}}</span>
        <span style="color:gray;text-decoration: line-through;" class="padding-common">原价：￥{{productStandardS.original_price}}</span>
      </span>
      <div class="padding-common border-common">
        <router-link to="/" style="text-decoration: none;">
          规格： 颜色、尺寸
        </router-link>
      </div>
      <div  class="padding-common">
        小羽毛服装店<br/>
        <div style="padding: 5px 0 5px 0;">
          <span>正品保障</span>
          <span>发货售后</span>
          <span>七天退货</span>
        </div>
      </div>
    </div>
    <div style="text-align: center; margin-top: 10px;">
      <img src="//img.weidiango.com/Frg-H63BfEed6zjPYq3jQkyJaZb-?imageMogr2/gravity/center/thumbnail/828x"
           width="100%" height="450px"/>
      <img src="//img.weidiango.com/FiDiT89v300C7wHtCPsy0xnLdPPR?imageMogr2/gravity/center/thumbnail/828x"
           width="100%" height="450px"/>
      <img src="//img.weidiango.com/FvFUXQu9gRamEVB8-nAhWsFcOegy?imageMogr2/gravity/center/thumbnail/828x"
           width="100%" height="450px"/>
    </div>
    <cart-bottom :addUrl="addUrl" :params="cartProduct"></cart-bottom>
  </div>
</template>

<script>
import CartBottom from '../common/CartBottom'
export default {
  components: {
    CartBottom
  },
  name: 'ProductDetail',
  props: ['productId'],
  data: function () {
    return {
      banners: [],
      productStandardS: {},
      cartProduct: {
        memberId: 0,
        productStandardId: 0,
        buyNum: 0,
        remark: '备注'
      },
      addUrl: '/cartProduct/addCartProduct'
    }
  },
  methods: {
    getProductsImgById: function () {
      this.$http.get('/productImg/getProductPage', {params: {productId: this.$route.query.pId}}).then((response) => {
        console.log(response)
        this.banners = response.data
      })
    },
    getProductStandard: function () {
      this.$http.get('/productStandard/getProductStandardById', {params: {psId: this.$route.query.psId}}).then((response) => {
        this.productStandardS = response.data
        this.cartProduct.memberId = 1
        this.cartProduct.productStandardId = this.$route.query.psId
        this.cartProduct.buyNum = 1
      })
    }
  },
  mounted: function () {
    this.getProductsImgById()
    this.getProductStandard()
  }
}
</script>

<style scoped>
  .padding-common{
    padding: 5px 0 5px 10px;
  }
  .border-common{
    border-bottom:1px solid #c3c3c3;
  }
  .slide-common {
    width: 100%;
    height: 240px;
  }
</style>
