<template>
  <div>
    <mheader title="首页"></mheader>
    <div v-if="sliders.length">
      <slider :data="sliders"></slider>
      <!--不能直接渲染slider，可能数据没过来，导致轮播图不能用-->
    </div>
    <h3>最新上架</h3>
    <ul class="hot">
      <li v-for="hot in hots">
        <img :src="hot.bookCover" alt="">
        <span>{{hot.bookName}}</span>
      </li>
    </ul>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
  import { getSliders, getHot } from 'api';
  import Slider from 'components/Slider';
  import Loading from 'components/Loading';
  import Mheader from 'components/Mheader';
  export default {
    data() {
      return {
        sliders: [],
        hots: [],
        isLoading: true
      }
    },
    created() {
      getSliders().then(res => {
        this.sliders = res.data;
      }).catch(err => {
        console.log(err);
      });
      getHot().then(res => {
        this.hots = res.data;
        this.isLoading = false;//加载完成隐藏loading
      })
    },
    computed: {},
    components: {
      Slider,
      Loading,
      Mheader
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  h3 {
    color: #666666;
    padding-left: 2%;
    margin: 10px 0;
    font-weight: normal
  }

  .hot {
    display: flex;
    flex-wrap: wrap;
    li {
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 33.333%;
      img {
        width: 80%;
      }
    }
  }
</style>