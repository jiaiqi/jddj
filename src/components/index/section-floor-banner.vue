<template>
  <div>
    <div class="floor-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="swiper-imgs" src="/static/images/01.jpg">
        </div>
        <div class="swiper-slide">
          <img class="swiper-imgs" src="/static/images/02.jpg">
        </div>
        <div class="swiper-slide">
          <img class="swiper-imgs" src="/static/images/03.png">
        </div>
        <div class="swiper-slide">
          <img class="swiper-imgs" src="/static/images/04.png">
        </div>
        <div class="swiper-slide">
          <img class="swiper-imgs" src="/static/images/05.png">
        </div>
        <div class="swiper-slide">
          <img class="swiper-imgs" src="/static/images/06.png">
        </div>
        <div class="swiper-slide">
          <img class="swiper-imgs" src="/static/images/07.png">
        </div>
        <div class="swiper-slide">
          <img class="swiper-imgs" src="/static/images/08.png">
        </div>
      </div>
    </div>
    <div class="allcon"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
     var mySwiper = new Swiper(".floor-banner", {
      loop: true, // 循环模式选项
      autoplay: true
    });       
  }
}
</script>

<style scoped>
</style>