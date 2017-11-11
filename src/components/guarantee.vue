<template>
  <section>
      <div class="list">
          <div class="detail">
              躺椅编号
          </div>
          <div class="money">{{list.number}}</div>
      </div>
      <div class="list">
          <div class="detail">
             躺椅位置
          </div>
          <div class="money">{{list.address}}</div>
      </div>
      <div class="textbox">
          <textarea class="text" v-model="explain" maxlength="500"  placeholder="问题补充说明（最多不超过500字）" name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="bottsub"><div class="button" @click="submit">提交故障</div></div>
  </section>
</template>

<script>
  export default {
    name: 'guaranTee',
    data() {
      return {
          list:{},
          explain:''
      }
    },
    mounted() {
        this.getinformation()
    },
    methods: {
       getinformation(){
          this.$axios.post('http://mibei.mayiclub.cc/index/Member/fault',{number:this.$route.query.number})
          .then((res) => {
              console.log(res)
             this.list=res.data.data
          })
        },
        submit(){
            this.$axios.post('http://mibei.mayiclub.cc/index/Member/addFault',{
                number:this.$route.query.number,adress:this.list.number,type:this.$route.query.type,explain:this.explain})
          .then((res) => {
              if(res.data.error==0){
                     this.$router.push({ path:'/',query:{number:this.$route.query.number}})
              }else{
                  let _this=this
                  this.$vux.confirm.show({
                       title:"",
                       content:res.data.message,
                       onConfirm () {
                         _this.$router.push({ path:'/Home',query:{number:_this.$route.query.number}})
                      }
                   })
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
           // box-shadow: 1px 1px 6px #888888;
        }
    }
    .textbox{
        margin-top: pxToRem(20px);
        height:pxToRem(284px) ;
        background:#fff;
        padding:pxToRem(30px) pxToRem(40px); 
        .text{
            width:100%;
            height:pxToRem(200px);
            font-size:pxToRem(28px);
            border:1px solid #e6e6e6;
            background: #f7f7f7;
            resize:none;
            border-radius: 10px;
            box-sizing: border-box;
            padding: 20px;
        }
    }
    .list{
      height:pxToRem(90px);
      display: flex;
      background: #fff;
      padding: 0 pxToRem(20px);
      font-size:pxToRem(30px);
      color:#474747;
      margin-bottom:1px;
      .detail{
        width:pxToRem(160px);
        padding-top: pxToRem(24px);
        padding-bottom:pxToRem(16px);
        line-height: 1;
        text-align:left;
       }
      .money{
        flex:1;
        line-height:pxToRem(90px);
        text-align:right;
        font-size:pxToRem(30px);
        color:#000000;
      }
    }
    
  }
</style>