<template>
    <div class="hhh">
        <ddHead/>
        <search />
        <nava />
        <gridBox />
        
    </div>
</template>

<script>
import ddHead from '../components/dingdan/dj-head'

import search from '../components/dingdan/sousuo'
import nava from '../components/dingdan/nav'
import gridBox from '../components/dingdan/gridBox'

    export default {
        components:{
            ddHead,
            search,
            nava,
            gridBox
        }
    }
</script>

<style lang="css">
.hhh{
    background-color: #fafafa;
}

</style>