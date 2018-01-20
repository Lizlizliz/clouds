<template>
  <nav>
    <router-link to="/home">
      <i class="fa fa-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="fa fa-heart"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="fa  fa-file-text"></i>
      <span>收藏</span>

    </router-link>
    <router-link to="/add">
      <i class="fa fa-plus-circle "></i>
      <span>添加</span>

    </router-link>
  </nav>
</template>

<script>
  export default {
    data() {
      return {};
    },
    computed: {},
    components: {},
    methods: {}
  };

</script>

<style lang="scss" scoped>
  nav {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ccc;
    background: #fff;
    a {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
    }
  }

  .active {
    color: red;
  }

</style>
