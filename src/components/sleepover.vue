<template>
  <section>
      <div class="boxlist">
        <div class="list sleep">睡眠时间 ：{{list.time}}</div>
        <div class="list consume"><span class="mob" @click="Illustrate">消费金额 ： {{list.money}}元</span></div>
        <div class="list main">恢复体力 ： {{list.tili}}点</div>
      </div>
      <div class="bottsub"><div class="button"><router-link :to="{ path:'/',query:{number:this.$route.query.number} }">再睡一觉</router-link></div></div>
  </section>
</template>

<script>
  export default {
    name: 'sleepOver',
    data() {
      return {
        list:{}
      }
    },
    mounted() {
      this.getinformation()
    },
    methods: {
      Illustrate(){
         this.$vux.alert.show({
          title: '价格说明',
          content:"<div class='form-box'><div class='form-top-box'><div class='form-top-time'>时间区域</div><div class='form-top-money'>价格</div>"+
                  "</div><div class='list-form-item'><div class='form-top-time'>0点到24点</div><div class='form-top-money'>1元／小时，五元封顶</div>"+
                  "</div>"+
                  "</div><div class='bot-text'>最终解释权归本公司所有</div>",
          buttonText:"知道了",
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
      },
        getinformation(){
          this.$axios.post('http://mibei.mayiclub.cc/index/Order/findOrder',{number:this.$route.query.number})
          .then((res) => {
              console.log(res)
             this.list=res.data.data
          })
        }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/common.scss';
  section {
    height: 100%;
    @include flex();
    @include flex-flow(column);
    background:#f7f7f7;
    .boxlist{
      height:pxToRem(470px);
      background: #fff;
      padding:pxToRem(110px) pxToRem(100px) 0;
      .main{
        background: url(../assets/images/huifutili@2x.png) no-repeat left center;
        background-size: contain;
      }
      .consume{
         background: url(../assets/images/money@2x.png) no-repeat left center;
         background-size: contain;
         position: relative;
      }
      .mob{
        position: relative;
      }
      .mob:after{
        content: "";
        position: absolute;
        background: url(../assets/images/problem-icon.png) no-repeat left center;
        background-size: contain;
        height:pxToRem(30px);
        width:pxToRem(30px);
        top:pxToRem(7px);
        right: pxToRem(-60px);
      }
      .sleep{
        background: url(../assets/images/ciock@2x.png) no-repeat left center;
        background-size: contain;
      }
      .list{
        padding-left:pxToRem(84px);
        margin-bottom:pxToRem(40px);
        height:pxToRem(44px);
        text-align: left;
        color: #474747;
        font-size: pxToRem(32px);
        line-height:pxToRem(44px);
      }
    }
    .bottsub{
        padding-top:pxToRem(480px);
        display: flex;
        justify-content:  center;
        .button{
            width:pxToRem(379px);
            height:pxToRem(96px);
            line-height:pxToRem(96px);
            background:#5ae8be;
            color:#fff;
            font-size:pxToRem(34px);
            border-radius: 50px;
            box-shadow: 1px 1px 6px #888888;
            a{
              color:#fff;
            }
        }
    }
    
  }
</style>