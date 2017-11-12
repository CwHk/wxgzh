<template>
  <section>
    <div class="container">
      <div class="list">
        <div class="item">
          <div class="left">
            <img src="../assets/images/jfdhzj.png">
          </div>
          <div class="center">
            <p>兑换极品套装一套,花费积分5分</p>
            <div class="info">时间： <span class="date">2017-12-1</span></div>
          </div>
          <div class="right">
            <div class="status">已发送</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="left">
            <img src="../assets/images/jfdhzj.png">
          </div>
          <div class="center">
            <p>兑换极品套装一套,花费积分5分</p>
            <div class="info">时间： <span class="date">2017-12-1</span></div>
          </div>
          <div class="right">
            <div class="status">已发送</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="left">
            <img src="../assets/images/jfdhzj.png">
          </div>
          <div class="center">
            <p>兑换极品套装一套,花费积分5分</p>
            <div class="info">时间： <span class="date">2017-12-1</span></div>
          </div>
          <div class="right">
            <div class="status">已发送</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="left">
            <img src="../assets/images/jfdhzj.png">
          </div>
          <div class="center">
            <p>兑换极品套装一套,花费积分5分</p>
            <div class="info">时间： <span class="date">2017-12-1</span></div>
          </div>
          <div class="right">
            <div class="status">已发送</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="left">
            <img src="../assets/images/jfdhzj.png">
          </div>
          <div class="center">
            <p>兑换极品套装一套,花费积分5分</p>
            <div class="info">时间： <span class="date">2017-12-1</span></div>
          </div>
          <div class="right">
            <div class="status">已发送</div>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Alert} from 'vux'
  export default {
    name: 'Recharge',
    title: '积分兑换',
    components: {
      Alert,
    },
    data() {
      return {
      }
    },
    mounted() {},
    methods: {
      goReDuiHuan(){
        //路由到兑换页
      },
      Illustrate(){
         this.$vux.alert.show({
          title: '价格说明',
          content:"<div class='form-box'><div class='form-top-box'><div class='form-top-time'>时间区域</div><div class='form-top-money'>价格</div>"+
                  "</div><div class='list-form-item'><div class='form-top-time'>0点到24点</div><div class='form-top-money'>1元／小时，5元封顶</div>"+
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
      contact(){
         this.$vux.alert.show({
          title: '联系我们',
          content: "联系电话:<a class='telnum' href='tel:027-51231140'>027-51231140</a>",
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
      },
      explain(){
        this.$vux.alert.show({
          title: '使用说明',
          content: "<p class='detail-title'>本公司全球首发眯呗共享躺椅，专注解决办公室午休难问题。您只需扫码，1元钱即可拥有一个美好午觉。</p>",
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/common.scss';
  a{
    color: #bdbdbf;
  }
  section {
    height: 100%;
    @include flex();
    @include flex-flow(column);
    background: #ffeae2;
    .container{
      height: 100%;
      box-sizing: border-box;
      margin: pxToRem(8px) pxToRem(28px) 0;
      border-radius: pxToRem(8px) pxToRem(8px) 0 0;
      background: #fff;
      padding: 0 pxToRem(7px) 0 pxToRem(31px)
    }
    .list{
      height: auto;
      // padding: 0 ;
      // text-align:left;
      background: #fff;
      .item{
        padding: pxToRem(15px) 0;
        height: pxToRem(102px);
        @include flex();
        @include align-items(center);

        // @include justify-content(center);
        position: relative;
        .left{
          width: pxToRem(72px);
          height: pxToRem(72px);
          img{
            border-radius: 50%;
          }
        }
        .center{
          text-align: left;
          width: pxToRem(354px);
          height: pxToRem(72px);
          @include flex3(1);
          padding: 0 pxToRem(62px) 0 pxToRem(22px) ;
          font-size: 18px;  //pxToRem(18px);
          p{
            height: pxToRem(18px);
            line-height: pxToRem(18px);
            margin-top: pxToRem(12px);
            margin-bottom: pxToRem(16px);
            color: #000;
            font-weight: 600;
            font-size: pxToRem(18px);
          }
          .info{
            height: pxToRem(18px);
            line-height: pxToRem(18px);
            color: #999;
            span{
              color: #999;
            }
          }
        }
        .right{
          height: pxToRem(72px);
          // width: 92px;
          margin-right: pxToRem(50px);
          padding-top: pxToRem(10px);
          color: #ff9900;
          line-height: 27px;
          font-size: 18px;
          .status{
            height: pxToRem(20px);
            line-height: pxToRem(20px);
            font-size: pxToRem(20px);
          }
        }
        .line{
          height: 1px;
          width: calc(100% - 0.25rem);
          background: #d6d6d6;
          position: absolute;
          left: pxToRem(18px);
          bottom: 0;
          z-index: 99;
        }
      }
      // .right-icon{
      //   width:pxToRem(24px);
      //   height:100%;
      //   background: url(../assets/images/jiantou.png) no-repeat center center;
      //   background-size: pxToRem(16px) pxToRem(24px);
      // }
      // .text{
      //   @include flex3(1);
      //   font-size:pxToRem(30px);
      //   color:#474747;
      // }
    }
  }
</style>