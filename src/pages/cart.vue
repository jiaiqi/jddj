<template>
    <div class="bod">
       <cHeader />
       <cSection />
    
    </div>
</template>

<script>
import cHeader from '../components/cart/cart-head'
import cSection from '../components/cart/cart-section'
    export default {
        components:{
            cHeader,
            cSection
        }
    }
</script>

<style lang="css">
    html {
  font-size: 26.66667vw;
  height: 100%;
}

.bod{
  height: 100%;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #F4F4F4;
}

ul, li {
  list-style: none;
}

.cart-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 15px 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  background-color: #F4F4F4;
  align-items: center;
}

.cart-header .poi-wrap {
  padding: 6px 7px;
  border-radius: 32px;
  background-color: #d1e7d3;
  display: flex;
}

.cart-header .poi-wrap .position-poi {
  line-height: 22px;
  padding: 0 14px 0 31px;
  border-radius: 22px;
  font-size: 14px;
  color: #fff;
  background: #47b34f url(/static/images/dz.png) 13px no-repeat;
  background-size: 10px 12px;
}

.allcon {
  width: 100%;
  height: 65px;
}

section {
  margin-bottom: 65px;
}

section .pos-cart {
  position: relative;
  margin: 0 6px 7px;
  text-align: left;
  height: 141px;
  overflow: hidden;
  padding: 3px 4% 10px 1.6%;
  background: url(/static/images/gc.16e813d0.png) 0 0 no-repeat;
  background-size: 100% 154px;
}

section .pos-cart a {
  color: #555;
  font-size: 14px;
}

section .pos-cart .contsty {
  overflow: hidden;
  padding-left: 2.4%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;
  width: 97.6%;
}

section .pos-cart .contsty .title {
  height: 44px;
  font-size: 15px;
  line-height: 44px;
}

section .pos-cart .contsty .content-list {
  position: relative;
  z-index: 2;
  height: 92px;
  padding: 1px 0 0;
}

section .pos-cart .contsty .content-list .productItem {
  padding-right: 30px;
  height: 100%;
  display: flex;
}

section .pos-cart .contsty .content-list .product {
  display: flex;
  height: 100%;
  width: 52px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-right: 32px;
}

section .pos-cart .contsty .content-list .product .pic {
  vertical-align: top;
  width: 52px;
}

footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 0.5rem;
  background: #fff;
  display: flex;
  border-top: 1px solid #d9d9d9;
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
  padding-bottom: 2px;
}


</style>