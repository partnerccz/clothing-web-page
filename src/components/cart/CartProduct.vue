<template>
  <div>
    <div class="product-item">
      <div class="product-item-left">
        <img :src="cartProduct.default_img" width="80" height="80"/>
      </div>
      <div class="product-item-right">
        <div>{{cartProduct.product_standard_name}}</div>
        <div style="margin-top:10px;"><span style="color:red;">￥{{cartProduct.sell_price}}</span> <span
          style="color:#999;">销量: 22174 </span><span><img src="../../images/footer-icon/myIcon0.png" width="18"
                                                          height="18"/></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart-product',
  props: ['cartProduct']
}
</script>

<style scoped>
  .product-item {
    height: 90px;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #c0c0c0;
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
