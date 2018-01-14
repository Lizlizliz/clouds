<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in data">
               <img :src="item" alt="" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';//会直接找到dist下的swiper.js
    import 'swiper/dist/css/swiper.css';//引入css样式
    export default {
        props: ['data'],//会挂在当前组建的实例上
        data() {
            return {}
        },
        mounted() {
             new Swiper('.swiper-container', {
                // Optional parameters
                loop: true,
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>
    img{width:100%;}
</style>