<template>
  <div style="display: flex;flex-direction: row;padding:15px 0;margin:5px 0px;background-color:white;border-radius: 5px;">
    <check-box v-model="cartProduct.checked" style="display: inline-block;width: 40px;line-height: 90px;margin-left:10px;"></check-box>
    <div class="product-item" style="position: relative;">
      <div class="product-item-left">
        <img :src="cartProduct.default_img" width="80" height="80"/>
      </div>
      <div class="product-item-right">
        <div>{{cartProduct.product_standard_name}}</div>
        <div style="margin-top:10px;"><span style="color:red;">￥{{cartProduct.sell_price}}</span></div>
      </div>
      <stepper v-model="cartProduct.buyNum"  style="position: absolute;right: 10px;top:70px;display: inline-block;display: flex;flex-direction: row;"></stepper>
    </div>
  </div>
</template>

<script>
import CheckBox from 'vant/lib/checkbox'
import Stepper from 'vant/lib/stepper'
import 'vant/lib/vant-css/base.css'
import 'vant/lib/vant-css/checkbox.css'
import 'vant/lib/vant-css/stepper.css'
export default {
  name: 'cart-product',
  props: ['cartProduct'],
  components: {
    CheckBox,
    Stepper
  },
  data: function () {
    return {
      checked: true
    }
  },
  watch: {
    checked (newValue, oldValue) {
      console.log(newValue)
    }
  }
}
</script>

<style scoped>
  .product-item {
    height: 90px;
    display: flex;
    flex-direction: row;
  }

  .product-item-left {
    height: 80px;
    width: 80px;
    padding: 5px;
  }

  .product-item-right {
    margin-left: 5px;
    height: 100%;
    text-align: left;
    font-size: 16px;
  }
</style>
