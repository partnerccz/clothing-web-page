<template>
  <div id="classify">
    <ul class="classify-ul">
      <li class="classify-ul-li">
        <router-link to="/">
          <img src="../../images/classify/classify01.jpg" width="100%" height="100%"/>
        </router-link>
      </li>
      <li class="classify-ul-li">
        <router-link to="/">
          <img src="../../images/classify/classify01.jpg" width="100%" height="100%"/>
        </router-link>
      </li>
      <li class="classify-ul-li">
        <router-link to="/">
          <img src="../../images/classify/classify01.jpg" width="100%" height="100%"/>
        </router-link>
      </li>
      <li class="classify-ul-li">
        <router-link to="/">
          <img src="../../images/classify/classify01.jpg" width="100%" height="100%"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Classify'
}
</script>

<style scoped>
  .classify-ul{
    display: flex;
    flex-direction:row;
  }
  .classify-ul-li {
    margin:15px 5px 0 5px;
    flex:1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .classify-ul-li img{
    border-radius: 50%;
  }
</style>
