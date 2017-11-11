<template>
   <section>
      <div class="header-container">
         <div class="form-nan"></div>
      </div>
   </section>
</template>

<script>
  import {Confirm} from 'vux'
	export default {
   name: 'Home',
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
  }
</style>