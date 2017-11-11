<template>
  <section >
    <div class="mb-icon-box">
      <div class="mb-icon"></div>
    </div>
    <div class="text">共享躺椅  <span>一元起睡</span></div>
  </section>
</template>

<script>
  export default {
    name: 'homeOne',
    data() {
      return {
        number:""
      }
    },
     
    mounted() {
       setTimeout(() => {
         this.home=false
         this.number=''
          this.number=this.$utils.getUrlKey("number")
         this.$axios.post('http://mibei.mayiclub.cc/index/Member/fault',{number:this.number})
          .then((res) => {
               if(res.data.error=='2020101'){
                  this.$router.push({ path:'/Login',query:{number:this.number}})
              }else{
                 this.$router.push({ path:'/Home',query:{number:this.number}})
              }
          })
       },1000)
    },
    methods: {
     
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/common.scss';
  section {
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height: 100%;
    background: #fff;
    z-index: 10000;
    @include flex();
    @include flex-flow(column);
    .text{
        bottom:pxToRem(170px);
        position: absolute;
        font-size:pxToRem(46px);
        color:#474747;
        text-align: center;
        width:100%;
        span{
            padding-left:pxToRem(60px);
        }
    }
    .mb-icon-box{
        padding-top:pxToRem(196px);
        .mb-icon{
            width:pxToRem(330px);
            margin:0 auto;
            height:pxToRem(434px);
            background: url(../assets/images/logo-one.png) no-repeat center top;
            background-size: contain;
        }
    }
  }
</style>