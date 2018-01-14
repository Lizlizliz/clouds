<template>
  <div>
    <keep-alive><!--保持缓存-->
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
  import Tab from 'components/Tab'
  export default {
    components: {
      Tab
    }
  }
</script>

<style scoped>
</style>