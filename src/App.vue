<template>
  <div>
    <transition  name='bounce'>
      <router-view class="center"></router-view>
    </transition>
    <dj-foot/>
  </div>
</template>

<script>
import "./assets/css/reset.css";

import footer from "./components/common/footer.vue";
export default {
  components: {
    "dj-foot": footer
  }, 
};

</script>

<style scoped>
html {
  font-size: 26.66667vw;
  height: 100%;
}
.bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>