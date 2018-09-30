<template>
  <div>
    <div  class="product-item">
      <div class="product-item-left">
        <img :src="product.img" width="80" height="80"/>
      </div>
      <div class="product-item-right">
        <div  style="margin-top:5px; ">{{product.pName}}</div>
        <div style="margin-top:10px; "><span style="color:red;">￥{{product.sell_price}}</span> <span
          style="color:#999;">销量: {{product.total_sell_num}} </span><span style="position: absolute; right: 30px;"><img src="../../images/order/buy-car-2.png" width="25"
                                                          height="25"/></span></div>
      </div>
    </div>
    <!--<div  class="product-item">-->
      <!--<div class="product-item-left">-->
        <!--<img src="../../images/classify/classify01.jpg" width="80" height="80"/>-->
      <!--</div>-->
      <!--<div class="product-item-right">-->
        <!--<div>dressbook韩国创意家用懒人叠衣板成人儿童衣服收纳神器防皱衬衣</div>-->
        <!--<div style="margin-top:10px;"><span style="color:red;">￥123.00</span> <span-->
          <!--style="color:#999;">销量: 22174 </span><span><img src="../../images/footer-icon/myIcon0.png" width="25"-->
                                                          <!--height="25"/></span></div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div  class="product-item">-->
      <!--<div class="product-item-left">-->
        <!--<img src="../../images/classify/classify01.jpg" width="80" height="80"/>-->
      <!--</div>-->
      <!--<div class="product-item-right">-->
        <!--<div>dressbook韩国创意家用懒人叠衣板成人儿童衣服收纳神器防皱衬衣</div>-->
        <!--<div style="margin-top:10px;"><span style="color:red;">￥123.00</span> <span-->
          <!--style="color:#999;">销量: 22174 </span><span><img src="../../images/footer-icon/myIcon0.png" width="25"-->
                                                          <!--height="25"/></span></div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div  class="product-item">-->
      <!--<div class="product-item-left">-->
        <!--<img src="../../images/classify/classify01.jpg" width="80" height="80"/>-->
      <!--</div>-->
      <!--<div class="product-item-right">-->
        <!--<div>dressbook韩国创意家用懒人叠衣板成人儿童衣服收纳神器防皱衬衣</div>-->
        <!--<div style="margin-top:10px;"><span style="color:red;">￥123.00</span> <span-->
          <!--style="color:#999;">销量: 22174 </span><span><img src="../../images/footer-icon/myIcon0.png" width="25"-->
                                                          <!--height="25"/></span></div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div  class="product-item">-->
      <!--<div class="product-item-left">-->
        <!--<img src="../../images/classify/classify01.jpg" width="80" height="80"/>-->
      <!--</div>-->
      <!--<div class="product-item-right">-->
        <!--<div>dressbook韩国创意家用懒人叠衣板成人儿童衣服收纳神器防皱衬衣</div>-->
        <!--<div style="margin-top:10px;"><span style="color:red;">￥123.00</span> <span-->
          <!--style="color:#999;">销量: 22174 </span><span><img src="../../images/footer-icon/myIcon0.png" width="18"-->
                                                          <!--height="18"/></span></div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product']
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
