<template>
    <div class="header">
        {{title}}
    </div>
</template>

<script>
    export default {
        props: ["title"],
        data() {
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>
    .header {
        height: 40px;
        line-height: 40px;
        background: #f1f2f1;
        text-align: center;
        color:#666;
    }
</style>