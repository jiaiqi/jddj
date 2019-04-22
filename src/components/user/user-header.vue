<template>
    <header>
        <label class="a1c">
            <label class="a1d">

            </label>
        </label>
        <a class="a1b" href="#message">
            <i class="hideDot">
                
            </i>
        </a>
    </header>
</template>



<script>
export default {
  
}
</script>



<style scoped>
header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 50px;
  z-index: 20;
}
header .a1c {
  z-index: 2;
  display: inline-block;
  position: absolute;
  right: 40px;
  top: -5px;
  padding: 20px 0 20px 20px;
}

header .a1c .a1d {
  float: left;
  margin-right: 12px;
  width: 22px;
  height: 22px;
  background: url(/static/images/icon_er.png) no-repeat;
  background-size: 22px;
}

header .a1b {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(/static/images/user_message_icon.png) no-repeat;
  background-position: center center;
  background-size: 22px;
  position: absolute;
  right: 0;
  top: -5px;
  padding: 20px 10px 20px 20px;
}
</style>

