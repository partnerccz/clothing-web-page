<template>
  <div id="classify">
    <ul class="classify-ul">
      <li class="classify-ul-li">
        <router-link to="/">
          <img src="https://img.alicdn.com/imgextra/i4/1966626512/O1CN011xyXdycvnGQrbrh_!!1966626512.jpg_430x430q90.jpg" width="100%" height="100%"/>
        </router-link>
      </li>
      <li class="classify-ul-li">
        <router-link to="/">
          <img src="//img.alicdn.com/imgextra/i1/1966626512/TB2qu5GwsUrBKNjSZPxXXX00pXa_!!1966626512.jpg_430x430q90.jpg" width="100%" height="100%"/>
        </router-link>
      </li>
      <li class="classify-ul-li">
        <router-link to="/">
          <img src="https://img.alicdn.com/imgextra/i3/2946751039/TB2tryjX6rguuRjy0FeXXXcbFXa_!!2946751039-0-item_pic.jpg_430x430q90.jpg" width="100%" height="100%"/>
        </router-link>
      </li>
      <li class="classify-ul-li">
        <router-link to="/">
          <img src="//gd2.alicdn.com/imgextra/i4/1850048901/TB26DyusrZnBKNjSZFKXXcGOVXa_!!1850048901.jpg_400x400.jpg" width="100%" height="100%"/>
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
