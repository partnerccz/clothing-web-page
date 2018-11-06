<template>
  <div class="order-index">
    <mt-navbar v-model="selected">
      <mt-tab-item id="waitPay">
        <div class="subTitleItem">待付款</div>
      </mt-tab-item>
      <mt-tab-item id="waitDeliver">
        <div class="subTitleItem">待发货</div>
      </mt-tab-item>
      <mt-tab-item id="waitShipment">
        <div class="subTitleItem">待收货</div>
      </mt-tab-item>
      <mt-tab-item id="finish">
        <div class="subTitleItem">已完成</div>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="waitPay">
      </mt-tab-container-item>
      <mt-tab-container-item id="waitDeliver">
      </mt-tab-container-item>
      <mt-tab-container-item id="waitShipment">
      </mt-tab-container-item>
      <mt-tab-container-item id="finish">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'OrderIndex',
  data: function () {
    return {
      selected: 'waitPay'
    }
  }
}
</script>

<style scoped>
  .order-index{
    margin:0;
    padding:0;
    background-color: #FAFAFA;
  }
  .subTitleItem{
    font-size:14px;
  }
</style>
