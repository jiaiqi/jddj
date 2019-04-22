<template>
    <div>
        <fl-header />
        <fl-item-box />
    </div>
</template>

<script>

    import flHeader from './fl-head.vue'
    import flItemBox from './fl-itembox.vue'
    export default {
        components:{
             'fl-header':flHeader,
        'fl-item-box':flItemBox
        }
    }
</script>

<style scoped>

</style>