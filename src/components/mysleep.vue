<template>
  <section>
     <div class="scrollbox" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="10">
         <div class="list-item" v-for="(list,index) of listdetail">
           <div class="time">
             <div class="time-box">
               <div class="year">{{list.start_time}}</div>
             </div>
             <div class="sleep_time">睡眠时间: {{list.sleeping_time}}分钟</div>
           </div>
           <div class="money-num">
            <div class="time-box">
              躺椅编号：{{list.chair_number}}
            </div>
            <div class="money">消费金额：{{list.consumption}}元</div>
           </div>
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
    name: 'Mysleep',
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
    mounted() {},
    methods: {
       getinformationlist(){
         this.$axios.post('http://mibei.mayiclub.cc/index/Member/sleeping',{page:this.page,limit:10})
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
  section {
    height: 100%;
    background:#f7f7f7;
    position:relative;
    .scrollbox{
        position:absolute;
        top:0;
        left:0;
        overflow:auto;
        right:0;
        bottom:0;
        .list-item{
            width:100%;
            box-sizing:border-box;
            padding:pxToRem(22px) pxToRem(38px);
            display:flex;
            line-height: 1;
            text-align:left;
            background:#fff;
            margin-bottom:pxToRem(20px);
            .money-num{
              flex:1;
              display:flex;
              @include flex-flow(column);
              font-size:pxToRem(22px);
              .time-box{
                color:#474747;
                padding-bottom:pxToRem(22px);
                text-align: right;
                font-size:pxToRem(28px);

              }
              .money{
                color:#b0b0b0;
                font-size:pxToRem(28px);
                text-align:right;
              }
            }
            .time{
              flex:1;
              display:flex;
              @include flex-flow(column);
              font-size:pxToRem(22px);
              .sleep_time{
                color:#b0b0b0;
                text-align:left;
                font-size:pxToRem(28px);
              }
              .time-box{
                color:#474747;
                padding-bottom:pxToRem(22px);
                display:flex;
                .year{
                  font-size:pxToRem(28px);
                  padding-right:pxToRem(30px);
                 }
              }
            }
        }
   }

  }
</style>