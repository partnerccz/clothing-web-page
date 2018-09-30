<template>
  <div>
    <ul class="order-status-ul">
      <li class="order-status-ul-li-1 list-item">
        <!--<table>-->
          <!--<tr>-->
            <!--<td><img src="../../images/order/waitPay.png" width="40" height="40"/></td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td><span>代付款</span></td>-->
          <!--</tr>-->
        <!--</table>-->
        <img src="../../images/order/waitPay.png" width="35" height="35" style="margin:0 auto;"/>
        <span  class="list-item-span">代付款</span>
      </li>
      <li class="order-status-ul-li-2 list-item">
        <img src="../../images/order/deliver.png" width="35" height="35" style="margin:0 auto;"/>
        <span  class="list-item-span">代发货</span>
      </li>
      <li class="order-status-ul-li-3 list-item">
        <img src="../../images/order/shipment.png" width="35" height="35" style="margin:0 auto;"/>
        <span  class="list-item-span">已发货</span>
      </li>
      <li class="order-status-ul-li-4 list-item">
        <img src="../../images/order/finish.png" width="35" height="35" style="margin:0 auto;"/>
        <span class="list-item-span">已完成</span>
      </li>
    </ul>
    <ul class="order-manage-list">
      <li class="manage-item"><img src="../../images/order/address.png" width="25" height="25" class="manage-item-img"/>地址管理</li>
      <li class="manage-item"><img src="../../images/order/kefu.png" width="25" height="25" class="manage-item-img"/>联系客服</li>
      <li class="manage-item"><img src="../../images/order/setting.png" width="25" height="25" class="manage-item-img"/>账号设置</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Status'
}
</script>

<style scoped>
.order-status-ul{
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  margin-top:10px;
  padding-top: 10px;
  border-top:1px solid #c3c3c3;
}
.list-item{
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size:14px;
}
.list-item-span{
  margin-top:8px;
}
 .order-status-ul-li-1 {
 }
.order-status-ul-li-2 {
}
.order-status-ul-li-3 {
}
.order-status-ul-li-4 {
}
  .order-manage-list {
    margin:20px 0 0 0;
    line-height: 30px;
    text-align: left;
    text-indent: 20px;
  }
.order-manage-list li {
  border-bottom: 1px solid #c3c3c3;
}
  .manage-item{
    display: flex;
    flex-direction: row;
  }
  .manage-item-img{
    margin-left:20px;
    margin-right:10px;
  }
</style>
