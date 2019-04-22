<template>
    <div>
        <index-header/>
        <index-section/>
    </div>
</template>

<script>
    import '../assets/css/swiper.css';
    import '../assets/css/reset.css';
    import '../assets/css/style.css';   
    import header from '../components/index/header.vue'
    import section from '../components/index/section.vue'
    export default {
        components:{
        "index-header":header,
        "index-section":section,
        },
}

</script>

<style lang="css">


</style>