<template>
  <div class="hd_bar">
    <div action="#" class="hd_search_frm">
      <input id name type="text" maxlength="140" placeholder="商品名称/商品编号/订单号" class="hd_search_txt">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hd_bar{
  width: 90%;
  padding: 10px 0;
  margin: .44rem auto 0 auto;
}
.hd_search_frm{
  display: flex;
    position: relative;
    height: 30px;
}
.hd_search_txt{
  text-align: center;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    border-radius: 15px;
    border: none;
    font-size: 14px;
}
</style>