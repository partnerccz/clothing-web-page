<template>
  <div id="search">
    <mt-search
      v-model="searchValue"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: function () {
    return {
      searchValue: ''
    }
  }
}
</script>

<style scoped>

</style>
