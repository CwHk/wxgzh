<template>
  <section>
      <div class="top-logo">
        <div class="log-box"><div class="photo"><img src="../assets/images/photoimg.png" class="logo" alt=""><!--<img :src="list.headumgurl" alt="" class="logo">--></div></div>
      </div>
      <div class="tell-num">{{list.mobile}}</div>
      <div class="num-all">
         <div class="num bord">
           <div class="number ">{{list.use_time}}</div>
           <div class="mackclear">时间（分)</div>
         </div>
         <div class="num">
           <div class="number">{{list.use_time*10}}点</div>
           <div class="mackclear">体力</div>
         </div>
      </div>
      <div class="list">
        <div class="list-item">
          <router-link :to="{ path:'/balance' }">
            <div class="list-test purse">我的钱包</div>
            <div class="right"></div>
          </router-link>
        </div>
        <div class="list-item">
          <router-link :to="{ path:'/Mysleep' }">
            <div class="list-test sleepicon">我的睡眠</div>
            <div class="right"></div>
          </router-link>
        </div>
        <div class="list-item">
          <router-link :to="{ path: '/Questions'}">
            <div class="list-test problem">常见问题</div>
            <div class="right"></div>
          </router-link>
        </div>
      </div>
      <div class="bottom"></div>
  </section>
</template>

<script>
  export default {
    name: 'Mypersonal',
    data() {
      return {
        list:{}
      }
    },
    mounted() {
      this.getinfoemation()
    },
    methods: {
       getinfoemation(){
          this.$axios.get('http://mibei.mayiclub.cc/index/Member/index')
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
    .bottom{
      flex:1;
      background:#f7f7f7;
    }
    .list{
      @include flex();
      @include flex-flow(column);
      .list-item{
          border-top:1px solid #f0f0f0;
          height:pxToRem(108px);
          line-height:pxToRem(108px);
          @include flex();
          padding:0 pxToRem(32px);
          font-size:pxToRem(30px);
          color:#474747;
          a{
            @include flex();
            width:100%;
            color:#474747;
          }
          .right{
            width:pxToRem(18px);
            background: url(../assets/images/jiantou.png) no-repeat right center;
            background-size: pxToRem(18px) pxToRem(24px);
          }
          .problem{
            background: url(../assets/images/wenti.png) no-repeat left center;
            background-size: pxToRem(44px);
          }
          .sleepicon{
            background: url(../assets/images/shuimian.png) no-repeat left center;
            background-size: pxToRem(44px);
          }
          .purse{
            background: url(../assets/images/qianbao.png) no-repeat left center;
            background-size: pxToRem(44px);
          }
          .list-test{
            flex:1;
            text-align:left;
            padding-left:pxToRem(80px);
           
          }
      }
    }
    .num-all{
       display: flex;
       padding:0 pxToRem(100px);
       .bord:after{
         content: "";
         height:pxToRem(80px);
         right: 0;
         top:pxToRem(10px);
         width:0px;
         position: absolute;
         border:1px solid #efefef;
       }
       .num{
         display: flex;
         line-height: 1;
         flex:1;
         position:relative;
         @include flex-flow(column);
         padding-bottom:pxToRem(80px);
         .mackclear{
           text-align:center;
           color:#474747;
           font-size:pxToRem(34px)
         }
         .number{
           text-align:center;
           color:#27cb65;
           padding-bottom:pxToRem(25px);
           font-size:pxToRem(36px);
         }
       }
    }
    .tell-num{
      font-size:pxToRem(34px);
      color:#000;
      padding: pxToRem(38px) 0;
    }
    .top-logo{
      height:pxToRem(250px);
      width:100%;
      background: url(../assets/images/yuanhu.png) no-repeat center center;
      background-size: 100% 100%;
      @include flex();
      justify-content: center;
      .log-box{
        margin-top:pxToRem(48px);
        background: url(../assets/images/photo-box.png) no-repeat center center;
        background-size: cover;
        height:pxToRem(202px);
        width:pxToRem(202px);
        border-radius:100%;
        box-shadow: 0 0 12px rgba(186, 186, 187, 0.35);
        @include flex();
        justify-content: center;
        align-items:center;
        .photo{
          height:pxToRem(148px);
          width:pxToRem(148px);
          border-radius:100%;
          background: #fff;
          box-shadow: 0 0 4px rgba(17, 34, 51, 0.29);
          overflow: hidden;
          .logo{
            width:100%;
            min-height:100%;
          }
        }
      }
    }
  }
</style>