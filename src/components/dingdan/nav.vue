<template>
  <div class="my_nav">
        <div class="nav_item_link ada">所有订单</div>
        <div class="nav_item_link">待付款</div>
        <div class="nav_item_link">待收货</div>
        <div class="nav_item_link">已完成</div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.my_nav {
  margin: auto;
  padding: 0 20px;
  height: 50px;
  display:flex;
  height: 44px;
  background-color: #fff;
}
.nav_item_link{
  text-align: center;
  height: 100%;
  line-height: 44px;
  flex:1;
  box-sizing: border-box;
  font-size: 14px;
}
.my_nav .ada{
  color: red;
  border-bottom: 3px red solid;
}
</style>