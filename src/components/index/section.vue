<template>
  <section class="index-sec">
      <indexHeader/>
      <indexSearchBox/>
      <indexZoneWrap/>
      <indexFloorBanner/>
      <indexFloorBox/>
      <indexMs/>
      <indexFj/>
  </section>

</template>


<script>
import '../../assets/css/reset.css'
import '../../assets/css/style.css'
import '../../assets/css/swiper.css'
import '../../assets/js/swiper.js'
import indexHeader from './header'

import indexSearchBox from './section-search'
import indexZoneWrap from './section-zone-wrap'
import indexFloorBanner from './section-floor-banner'
import indexFloorBox from './section-floorBox'
import indexMs from './section-ms'
import indexFj from './section-fjdp'

export default {
    components:{
        indexHeader,
        indexSearchBox,
        indexZoneWrap,
        indexFloorBanner,
        indexFloorBox,
        indexMs,
        indexFj
    }
}
</script>

<style>

</style>