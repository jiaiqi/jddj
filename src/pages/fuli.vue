<template>
  <section class="fl-sec">
    <fl-items/>
    <fl-items/>
  </section>
</template>

<script>
import flItems from "../components/fuli/fl-items.vue";
export default {
  components: {
    "fl-items": flItems
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-style: normal;
}
body {
  background-color: #f8f8f8;
  display: flex;
  /* justify-content: center; */
}
a {
  text-decoration: none;
  color: #555;
}
.fl-sec {
  width: 95%;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 150px;
  background-color: #fff;
  border-radius: 15px;
}
.fl-header {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 5px 10px;
}
.fl-section {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.fl-list-item-store {
  width: 95%;
  flex-direction: row;
  position: relative;
  height: 42px;
  display: flex;
  overflow: hidden;
  flex: 1 1;
}

.item-store-logo {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 40px;
}

.item-title-box {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  overflow: hidden;
}

.item-store-title {
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}

.item-store-sub-title {
  height: 15px;
  font-size: 12px;
  line-height: 15px;
  color: #999;
  margin-top: 3px;
}

.item-store-sub-title,
.item-store-title {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.fl-section .slogan {
  width: 95%;
  margin-top: 5px;
  line-height: 24px;
  font-size: 16px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
}
.faxian-list-item-imgs-box {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
}
.faxian-goodslist-link {
  display: inline-block;
  position: relative;
  width: calc((100vw - 60px) / 3);
  height: calc((100vw - 60px) / 3);
  margin-right: 2px;
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
}
.faxian-goodslist-img {
  display: block;
  width: 100%;
  height: 100%;
}
.faxian-list-item-price {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 26px;
  background: hsla(0, 0%, 100%, 0.9);
  line-height: 26px;
  padding-left: 5px;
  font-size: 14px;
  color: #ff5757;
}
.faxian-goodslist-link .promotion-tag {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 10px;
  width: auto;
  height: 14px;
  line-height: 14px;
  text-align: center;
  z-index: 1;
}
.promotion-tags span {
  display: inline-block;
  height: 10px;
  line-height: 10px;
  white-space: nowrap;
}
</style>