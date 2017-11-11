<template>
  <section>
      <div class="boxlist">
          <div class="box">
              <div class="money-item">
                <div class="sre">账户余额（元）</div>
                <div class="money-detail">{{list.money}}</div>
              </div>
              <div class="detail"><router-link :to="{ path:'/Detail' }">明细>></router-link></div>
          </div>
      </div>
      <div class="bottsub"><div class="button"><router-link :to="{ path:'/recharge'}">去充值</router-link></div></div>
      <!--<div class="yajin" @click="gobacks" v-if="ajaxsutus==2">押金99元  <a class="goback">退还押金</a></div>
      <div class="yajin" @click="gobac" v-if="ajaxsutus==1">未缴纳押金 <a class="goback">支付押金</a></div>-->
  </section>
</template>

<script>
import {Confirm} from 'vux'
import { Toast} from 'vux'
  export default {
    name: 'balance',
    components: {
      Toast,Confirm
    },
    data() {
      return {
          list:{},
          ajaxsutus:1,
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
               if(this.list.deposit<99){
                   this.ajaxsutus==1
               }else{
                   this.ajaxsutus==2
               }
          })
       },
       gobac(){
         this.$router.push({ path:'/foregift'})
       },
       gob(){
             this.$axios.get('http://mibei.mayiclub.cc/index/Money/refundDeposit')
          .then((res) => {
              console.log(res)
              if(res.data.error==0){
                  this.$router.push({ path:'/Mypersonal'})
                  this.$vux.toast.show({
                  text:res.data.message,
                  type:"text",
                  position:'middle'
              })
              }else{
                 this.$vux.toast.show({
                 text:res.data.message,
                 type:"text",
                 position:'middle'
              })
            }
              
          })
       },
       gobacks(){
           this.$vux.confirm.show({
                       title:"",
                       content:"退押金后将无法使用躺椅，您确定退还躺椅吗？",
                       onConfirm () {
                         this.gob()
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
    @include flex();
    @include flex-flow(column);
    background:#f7f7f7;
    .yajin{
        width:100%;
        position: absolute;
        bottom:pxToRem(34px);
        text-align:center;
        font-size:pxToRem(26px);
        color:#616161;
        .goback{
            color:#43e9bf;
        }
    }
    .boxlist{
      height:pxToRem(440px);
      background: url(../assets/images/beijing-balance.png) no-repeat left top;
      background-size:100% 100%;
      padding-top:pxToRem(58px);
      .box{
          display: flex;
          padding:0 pxToRem(50px);
          .money-item{
            flex:1;
            .money-detail{
                font-size:pxToRem(100px);
                line-height:pxToRem(210px);
                text-align:left;
                color:#fff;
            }
            .sre{
                font-size:pxToRem(30px);
                color:#fff;
                text-align:left;
            }
          }
      }
      .detail{
          color:#fff;
          flex:1;
          font-size: pxToRem(32px);
          text-align: right;
          a{
              color:#fff;
          }
      }
    }
    .bottsub{
        padding-top:pxToRem(480px);
        display: flex;
        justify-content:  center;
        .button{
            width:pxToRem(638px);
            height:pxToRem(92px);
            line-height:pxToRem(92px);
            background:#5ae8be;
            color:#fff;
            font-size:pxToRem(34px);
            border-radius: 50px;
            //box-shadow: 1px 1px 6px #888888;
            a{
                color:#fff;
            }
        }
    }
    
  }
</style>