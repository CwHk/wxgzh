<template>
  <section>
      <div class="boxlist">
          <div class="list">
              <div class="itembox one">
                  <router-link :to="{ path:'/guaranTee',query:{number:this.$route.query.number,type:1} }">
                     <div class="box"><img src="../assets/images/sunhuai.png" alt=""></div>
                     <p>躺椅损坏</p>
                  </router-link>
              </div>
              <div class="itembox two">
                  <router-link :to="{ path:'/guaranTee',query:{number:this.$route.query.number,type:2} }">
                    <div class="box"><img src="../assets/images/suiyibaifang.png" alt=""></div>
                    <p>随意摆放</p>
                 </router-link>
              </div>
              
          </div>
          <div class="list">
              <div class="itembox three">
                  <router-link :to="{ path:'/guaranTee',query:{number:this.$route.query.number,type:3} }">
                    <div class="box"><img src="../assets/images/busufu.png" alt=""></div>
                    <p>不舒服</p>
                  </router-link>
              </div>
              <div class="itembox four">
                  <router-link :to="{ path:'/guaranTee',query:{number:this.$route.query.number,type:4} }">
                    <div class="box"><img src="../assets/images/qita.png" alt=""></div>
                    <p>其他问题</p>
                  </router-link>
              </div></div>
      </div>
  </section>
</template>

<script>
  export default {
    name: 'reportingFailure',
    data() {
      return {}
    },
    mounted() {},
    methods: {
  
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/common.scss';
  section {
    height: 100%;
    @include flex();
    @include flex-flow(column);
    background:#fff;
    .boxlist{
       padding:pxToRem(178px) pxToRem(108px);
       .list{
           display: flex;
           justify-content:space-between;
           padding-bottom:pxToRem(50px);
           .one{
               background:#f7f7ff;
           }
           .two{
               background: #fef6ff;
           }
           .three{
               background: #fff7f5;
           }
           .four{
             background: #f5ffee;
           }
           .itembox{
              height:pxToRem(238px);
              width:pxToRem(238px);
              border-radius: 100%;
              display: flex;
              @include flex-flow(column);
              align-items:center;
              a{
                height:pxToRem(238px);
                width:pxToRem(238px);
                border-radius: 100%;
                display: flex;
                @include flex-flow(column);
                align-items:center;
              }
              p{
                  color:#474747;
                  font-size:pxToRem(34px);
              }
              .box{
                  height:pxToRem(144px);
                  padding-top:pxToRem(52px);
                  padding-bottom:pxToRem(32px);
                  width:pxToRem(62px);
                  img{
                      width:100%;
                      height:100%;
                  }
              }
           }
       }
    }
}
</style>