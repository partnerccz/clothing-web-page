<template>
  <div id="order-title">
    <div class="order-title">
      <!--<img src="../../images/title/title01.jpg" width="100%" height="150"/>-->
      <div class="order-title-headImg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style scoped>
.order-title{
  width:100%;
  height: 150px;
  background-image: url("../../images/title/title01.jpg");
}
  .order-title-headImg {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    position: relative;
    top:25px;
    left: 25px;
    background-color: white;
  }
</style>
