<template>
  <div>
    首页
  </div>
</template>

<script>
  import { getSliders } from 'api'

  export default {
    data() {
      return {}
    },
    created(){
      getSliders().then(res=>{
        console.log(res);
      })
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>

<style>
</style>