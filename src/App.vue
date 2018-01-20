<template>
  <div>
    <transition name="tran">
      <keep-alive>
        <!--保持缓存-->
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
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

<style lang="scss" scoped>
  .view {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 65px;
  }

  .tran-enter {
    transform: translate(100%);
  }

  .tran-enter-active {
    transition: 1s linear;
  }

  .tran-leave-active {
    transform: translate(-100%);
    transition: 1s linear;
  }
</style>