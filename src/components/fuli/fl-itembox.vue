<template>
    <div class="fl-section">
        <fl-slogan />
        <fl-items />
    </div>
</template>

<script>
import slogan from './fl-slogan'
import items from './fl-itembox-items'
    export default {
        components:{
            'fl-items':items,
        'fl-slogan':slogan
        }
    }
</script>

<style scoped>

</style>