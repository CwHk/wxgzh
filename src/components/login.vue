<template>
   <section>
      <div class="header-container">
         <div class="form-nan">
           <form action="" class="rorm-clar">
             <div class="input-box">
               <label for="" class="laberl-box">帮会:</label>
               <select name="" id="selectbox">
                 <option value="" >请选择您的帮会</option>
                 <option value="">2</option>
                 <option value="">3</option>
               </select>
             </div>
             <div class="input-box">
               <label for="">QQ:</label>
               <input type="text" placeholder=" 请输入您的帮会">
             </div>
             <div class="input-box">
               <label for="">游戏Id:</label>
               <input type="text" placeholder=" 请输入您的帮会">
             </div>
             <div class="input-box">
               <label for="">体型:</label>
               <input type="text" placeholder=" 请输入您的帮会">
             </div>
           </form>
           <div class="input-boxs">
             <span class="btn">保存</span>
          </div>
         </div>
      </div>
   </section>
</template>

<script>
  import {Confirm} from 'vux'
	export default {
   name: 'Login',
   components: {
      Confirm,
    },
	  data () {
	    return {
        
	    }
     },
     mounted(){
       
      
      
     },
     beforeCreate(){
       
     },
     methods:{
         
         
        
    }
	}
</script>
<style lang="scss" scoped>
@import '../assets/css/common.scss';
section{
  width:100%;
  height:100%;
}
    .header-container{
       height:100%;
       background:url(../assets/images/loginbig-logo.png) no-repeat center center;
       background-size:100% 100%;
       @include flex();
       @include justify-content(center);
       position:relative;
        width: pxToRem(640px);
       margin:0 auto;
       
       .form-nan{
         height:pxToRem( 588px);
         width:pxToRem(509px);
         box-sizing: border-box;
        background: rgba(234, 218, 218, 0.5);
         border-radius: 8px;
         padding-top:pxToRem(86px);
         padding-left:pxToRem(44px);
         padding-right:pxToRem(44px);
         margin:pxToRem(258px) auto 0 auto;
         border: 0.15625rem solid rgba(255, 255, 255, 0.24);
       }
       .input-box{
         background: #fff;
         height: pxToRem(54px);
         text-align: left;
         border-radius: 5px;
          margin-top:pxToRem(24px);
         font-size: pxToRem(24px);
         padding-left:18px;
         line-height: pxToRem(54px);
         color: #373737;
         #selectbox{
            background: #fff;
            color: #797878;
         }
         .laberl-box{
           padding-right: pxToRem(20px);
         }
       }
       
       .input-boxs{
          background: #f06f20;
          color:#fff;
         height: pxToRem(54px);
         text-align: left;
         border-radius: 5px;
          margin-top:pxToRem(36px);
         font-size: pxToRem(24px);
         padding-left:18px;
         line-height: pxToRem(54px);
         text-align: center;
       }
  }
</style>