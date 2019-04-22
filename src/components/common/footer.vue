<template>
  <footer class="navigation">
    <router-link to="/" class="navigation-items">
      <i class="iconfont icon-home1"></i>
      <span class="nav-foot">首页</span>
    </router-link>
    <router-link to="/fuli" class="navigation-items">
      <i class="iconfont icon-libao1"></i>
      <span class="nav-foot">福利</span>
    </router-link>
    <router-link to="/cart" class="navigation-items">
      <i class="iconfont icon-cart1"></i>
      <span class="nav-foot">购物车</span>
    </router-link>
    <router-link to="/dingdan" class="navigation-items">
      <i class="iconfont icon-dingdan1"></i>
      <span class="nav-foot">订单</span>
    </router-link>
    <router-link to="/user" class="navigation-items">
      <i class="iconfont icon-mine1"></i>
      <span class="nav-foot">我的</span>
    </router-link>
  </footer>
</template>



<script>
import "../../assets/font/iconfont.css";
export default {};
</script>

<style scoped>
html,
body {
  height: 100%;
}
body {
  position: relative;
}
.foot-dj-active{
  color: #51d15a!important;
}

footer {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  background-color: #fff;
  display: flex;
  font-size: 12px;
  left: 0;
  bottom: 0;
  z-index: 1001;
  background-repeat: no-repeat;
  background-position: 0 0;
}

footer .navigation-items {
  display: flex;
  color: #555;
  flex: 1;
  flex-direction: column;
  font-size: 12px;
  height: 100%;
  text-align: center;
  justify-content: center;
}

footer .navigation-items i {
  font-size: 18px;
}

footer .nav-foot {
  padding-top: 5px;
}
</style>

