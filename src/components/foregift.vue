<template>
  <section>
    <div class="rechangeBtn">
       <div class="money">¥99</div>
       <div class="product">押金随时可退</div>
    </div>
    <div class="go" @click="goRechange">去充值</div>
    <div class="text">点击去充值，即表示已阅读并同意<span>充值协议</span></div>

  </section>
</template>

<script>
  export default {
    name: 'Foregift',
    data() {
      return {
        
      }
    },
    mounted() {},
    methods: {
      gochange (index){
        this.choosetabs=index 
        },
         jsApiCall()
        {
             WeixinJSBridge.invoke(
                'getBrandWCPayRequest',
                JSON.parse(this.jsApiParameters),
                function(res){
                    WeixinJSBridge.log(res.err_msg);
                    //alert(res.err_code+res.err_desc+res.err_msg);
                    // this.$router.push({ path:'/Mypersonal'})
                    if(res.err_msg == "get_brand_wcpay_request:ok"){
                   //alert(res.err_code+res.err_desc+res.err_msg);
                       window.location.href="http://wx.mibei.mayiclub.cc/#/Mypersonal";
                   }else{
                       //返回跳转到订单详情页面
                       alert(支付失败);
                         
                   }
                }
            );
        },
         callpay()
        {
            if (typeof WeixinJSBridge == "undefined"){
                if( document.addEventListener ){
                    document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
                }else if (document.attachEvent){
                    document.attachEvent('WeixinJSBridgeReady', this.jsApiCall); 
                    document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
                }
            }else{
                this.jsApiCall();
            }
        },
        goRechange(){
         this.$axios.post('http://mibei.mayiclub.cc/index/Money/deposit_create',{total_fee:"99"})
          .then((res) => {
              console.log(res)
               if(res.data.error==0){
                 // this.$router.push({ path:'/',query:{number:this.$route.query.number}})
                 this.jsApiParameters=res.data.data.jsApiParameters
                 this.callpay()
              }else if(res.data.error==4140302){
                  window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0f87239ccff3ac79&redirect_uri=http%3a%2f%2fmibei.mayiclub.cc%2findex%2foauth2%2fcallback%3fcallback%3dhttp%3a%2f%2fwx.mibei.mayiclub.cc%2f%3f%23%2fforegift%3fnumber%3d"+this.number+"&response_type=code&scope=snsapi_base&state=#wechat_redirect"
               // window.loaction.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0f87239ccff3ac79&redirect_uri=http://mibei.mayiclub.cc/index/oauth2/callback?callback=http://wx.mibei.mayiclub.cc/#/foregift?number="+this.number+"&response_type=code&scope=snsapi_base&state=#wechat_redirect"
             
             }
          })
       }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/common.scss';
  section {
    height: 100%;
    background:#f7f7f7;
    position:relative;
    .text{
        width:100%;
        position: absolute;
        bottom:pxToRem(34px);
        text-align:center;
        font-size:pxToRem(26px);
        color:#616161;
        span{
            color:#43e9bf;
        }
    }
    .go{
         margin:pxToRem(574px) auto 0 auto;
        background:url(../assets/images/btn-icon.png) no-repeat center center;
        background-size:cover;
        width:pxToRem(638px);
        height:pxToRem(92px);
        line-height:pxToRem(92px);
        background:#5ae8be;
        color:#fff;
        font-size:pxToRem(34px);
        border-radius: 50px;
        //box-shadow: 1px 1px 6px #888888;
    }
   .rechangeBtn{
       height:pxToRem(346px);
       background: #fff;
       .money{
           line-height:pxToRem(228px);
           font-size: pxToRem(90px);
           color:#797979;
       }
       .product{
           font-size: pxToRem(28px);
           color:#797979;
       }
   }

  }
</style>