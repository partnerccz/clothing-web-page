<template>
  <div style="padding-bottom: 50px;">
  <div class="buy-footer" style="position: fixed;left: 0;bottom:0;">
    <div class="buy-common buy-home" style="background-color: white;"><router-link to="/" style="text-decoration: none;color:#333;">首页</router-link></div>
    <div class="buy-common buy-none"></div>
    <div class="buy-common buy-car" @click="addCartProduct">加入购物车</div>
    <div class="buy-common buy-buy">立即购买</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'cart-bottom',
  components: {},
  props: ['addUrl', 'params'],
  methods: {
    addCartProduct: function () {
      console.log(this.params)
      this.$http.post(this.addUrl, this.params).then((response) => {
        console.log(response)
      })
    }
  },
  watch: {
    params (newValue, oldValue) {
      console.log(oldValue)
    }
  }
}
</script>

<style scoped>
  .buy-footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
  }
  .buy-home {
    flex: 2;
  }

  .buy-car {
    color: white;
    background-color: #3EA3FF;
    flex: 2;
  }

  .buy-buy {
    color: white;
    background-color: #FF6000;
    flex: 2;
  }
</style>
