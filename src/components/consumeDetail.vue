<template>
  <section>
    <div class="tab-box">
      <div class="tabitem"><router-link :to="{ path:'/consumeDetail' }" class="active">消费明细</router-link></div>
      <div class="tabitem"><router-link :to="{ path:'/Detail' }" >充值明细</router-link></div>
    </div>
    <div class="scroll" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="10">
      <div class="list" v-for="(list,index) of listdetail">
          <div class="detail">
            <div class="details">睡眠消费</div>
            <div class="time">{{list.create_time}}</div>
          </div>
          <div class="money">¥{{list.amount}}</div>
      </div>
       <div class="nsr-card-loading">
            <nsr-loading
             :hide-loading="isloadingComplete"
            :is-end-text="endText">
             </nsr-loading>
       </div>
    </div>
  </section>
</template>

<script>
import loaDing from './loading.vue';
  export default {
    name: 'consumeDetail',
    components: {
        'nsr-loading': loaDing,
     },
    data() {
      return {
         busy:false,
         page: 0,
         endText:"",
         isloadingComplete:true,
         listdetail:[]
      }
    },
    mounted() {
      //this.getinformationlist()
    },
    methods: {
      getinformationlist(){
         this.$axios.post('http://mibei.mayiclub.cc/index/Member/consume',{page:this.page,limit:10})
         .then((res) => {
               console.log(res)
               this.listdetail=this.listdetail.concat(res.data.data.list)
                if(res.data.data.list.length<10){
                            this.endText="没有数据啦·～～·"    
                            this.isloadingComplete=true          
                            this.busy = true;
                        }else{
                            this.endText="加载中" 
                            this.isloadingComplete=false   
                            this.busy = false
                        }
                    })
         },
        loadMore() {
           this.busy =true;
           this.page++;
           this.getinformationlist();
           console.log('load')
                
        },

    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/common.scss';
  .scroll{
    position: absolute;
    left: 0;
    width:100%;
    bottom:0;
    overflow: auto;
    top:pxToRem(88px);
  }
  section {
    height: 100%;
    overflow: hidden;
    @include flex();
    @include flex-flow(column);
    background:#f7f7f7;
    .list{
      border-top: pxToRem(20px) solid #f7f7f7;
      height:pxToRem(142px);
      display: flex;
      background: #fff;
      padding: 0 pxToRem(20px);
      .detail{
        flex:1;
        padding-top: pxToRem(24px);
        padding-bottom:pxToRem(16px);
        line-height: 1;
        text-align:left;
        .time{
          color:#b0b0b0;
          font-size:pxToRem(30px);
        }
        .details{
          font-size:pxToRem(30px);
          color:#474747;
          padding-bottom:pxToRem(20px);
        }
      }
      .money{
        line-height:pxToRem(122px);
        width:pxToRem(200px);
        text-align:right;
        font-size:pxToRem(34px);
        color:#000000;
      }
    }
    .tab-box{
      height:pxToRem(88px);
      line-height:pxToRem(88px);
      width:100%;
      background: #fff;
      font-size:pxToRem(30px);
      @include flex();
      .tabitem{
        color:#474747;
        flex:1;
        .active{
           border-bottom:2px solid #43e9bf;
           color:#43e9bf;
        }
        a{
          width:pxToRem(214px);
          display: block;
          margin:0 auto;
          color:#474747;
        }
      }
    }
    
  }
</style>