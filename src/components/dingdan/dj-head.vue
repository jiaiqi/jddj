<template>
    <div class="header_bar">
      <div class="header_bar_back"></div>
      <div class="header_bar_title">我的订单</div>
      <div class="header_bar_menu"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header_bar{
    display: flex;
    width: 100%;
    height: 44px;
    background-color: #fff;
    position: relative;
    position: fixed;
    left: 0;
    top: 0;
}
.header_bar_back{
    display: block;
    width: 44px;
    height: 44px;
    background: url(/static/images/left.png) no-repeat 50%;
    background-size: 20px 20px;
}
.header_bar_title {
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    color: #333;
    text-align: center;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.header_bar_menu{
    display: block;
    width: 44px;
    height: 44px;
    background: url(/static/images/menu.png) no-repeat 50%;
    background-size: 20px;
}
</style>