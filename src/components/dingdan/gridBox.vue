<template>
    <div class="my_order_wrap">
        <div class="order-list">
            <div class="order-list-item">
                <!-- <div class="order_head">
                    <div class="order_head_left">
                        <span class="title" style="font-size:14px">京东</span>
                    </div>
                    <div class="order_head_right">
                        <div class="order_state" style="font-size:14px">已签收</div>
                    </div>
                </div> -->
                <div class="order_content">
                    <img src="/static/images/xiaomierji.jpg">
                    <div class="title"> 小米活塞耳机 清新版 银色 入耳式手机耳机 通用耳麦</div>
                </div>
                <div class="order_total_bar">
                    <div class="total_num">共一件商品</div>
                    <div class="total_price">实付金额:
                        <span class="price">$28.00</span>
                    </div>
                </div>
                <div class="order_bottom">
                    <button class="pingjia">评价</button>
                    <button class="buyagain">再次购买</button>
                </div>
            </div>
            <div class="order-list-item">
                <!-- <div class="order_head">
                    <div class="order_head_left">
                        <span class="title" style="font-size:14px">京东</span>
                    </div>
                    <div class="order_head_right">
                        <div class="order_state" style="font-size:14px">已签收</div>
                    </div>
                </div> -->
                <div class="order_content">
                    <img src="/static/images/xiaomierji.jpg">
                    <div class="title"> 小米活塞耳机 清新版 银色 入耳式手机耳机 通用耳麦</div>
                </div>
                <div class="order_total_bar">
                    <div class="total_num">共一件商品</div>
                    <div class="total_price">实付金额:
                        <span class="price">$28.00</span>
                    </div>
                </div>
                <div class="order_bottom">
                    <button class="pingjia">评价</button>
                    <button class="buyagain">再次购买</button>
                </div>
            </div>
            <div class="order-list-item">
                <!-- <div class="order_head">
                    <div class="order_head_left">
                        <span class="title" style="font-size:14px">京东</span>
                    </div>
                    <div class="order_head_right">
                        <div class="order_state" style="font-size:14px">已签收</div>
                    </div>
                </div> -->
                <div class="order_content">
                    <img src="/static/images/xiaomierji.jpg">
                    <div class="title"> 小米活塞耳机 清新版 银色 入耳式手机耳机 通用耳麦</div>
                </div>
                <div class="order_total_bar">
                    <div class="total_num">共一件商品</div>
                    <div class="total_price">实付金额:
                        <span class="price">$28.00</span>
                    </div>
                </div>
                <div class="order_bottom">
                    <button class="pingjia">评价</button>
                    <button class="buyagain">再次购买</button>
                </div>
            </div>
            <div class="order-list-item">
                <!-- <div class="order_head">
                    <div class="order_head_left">
                        <span class="title" style="font-size:14px">京东</span>
                    </div>
                    <div class="order_head_right">
                        <div class="order_state" style="font-size:14px">已签收</div>
                    </div>
                </div> -->
                <div class="order_content">
                    <img src="/static/images/xiaomierji.jpg">
                    <div class="title"> 小米活塞耳机 清新版 银色 入耳式手机耳机 通用耳麦</div>
                </div>
                <div class="order_total_bar">
                    <div class="total_num">共一件商品</div>
                    <div class="total_price">实付金额:
                        <span class="price">$28.00</span>
                    </div>
                </div>
                <div class="order_bottom">
                    <button class="pingjia">评价</button>
                    <button class="buyagain">再次购买</button>
                </div>
            </div>
            <div class="order-list-item">
                <!-- <div class="order_head">
                    <div class="order_head_left">
                        <span class="title" style="font-size:14px">京东</span>
                    </div>
                    <div class="order_head_right">
                        <div class="order_state" style="font-size:14px">已签收</div>
                    </div>
                </div> -->
                <div class="order_content">
                    <img src="/static/images/xiaomierji.jpg">
                    <div class="title"> 小米活塞耳机 清新版 银色 入耳式手机耳机 通用耳麦</div>
                </div>
                <div class="order_total_bar">
                    <div class="total_num">共一件商品</div>
                    <div class="total_price">实付金额:
                        <span class="price">$28.00</span>
                    </div>
                </div>
                <div class="order_bottom">
                    <button class="pingjia">评价</button>
                    <button class="buyagain">再次购买</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.my_order_wrap{
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
    border-radius: 8px;
}
.order-list-item{
    display: flex;
    flex-direction: column;
     background: #fff;
  margin: 20px 10px 10px 10px;
    padding-top: 15px;
    
    padding-bottom: 15px;
}
/* .order_head{
    display: flex;
    height: 25px;
} */
.order_content{
    display: flex;
    
}
.order_content img{
    width: 75px;
    height: 75px;
}
.order_content .title{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333;
    line-height: 21px;
    padding-top: 15px;
    padding-left: 15px;
}
.order_total_bar .total_num{
    font-size: 12px;
    color: #999;
    text-align: right;
    line-height: 21px;
}
.order_total_bar .total_price{
    margin-left: 10px;
    font-size: 14px;
    color: #999;
    line-height: 21px;
    margin-bottom: 5px;
}
.order_total_bar .total_price .price{
    color: #151515;
}
.order_bottom{
    display: flex;
    height: 45px;
    align-items: center;
    border-top: 1px solid #fafafa;
    justify-content: flex-end;
}
.order_bottom button{
    text-align: center;
    width: 86px;
    height: 30px;
    border-radius: 4px;
    margin-left: 8px;
    flex-shrink: 0;
    box-sizing: border-box;
}
.order_bottom .pingjia{
    background-color: #fff;
    color: #333;
    border: 1px solid #ccc;
}
.order_bottom .buyagain{
        background-color: #e93b3d;
    color: #fff;
    border: none;
}
</style>