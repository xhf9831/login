<template>
 <div>
   <div id="top">
      <el-card class="box s1">
        <i class="el-icon-check"></i>
        <div>今日发布</div>
        <div>
          <countTo
            :startVal="startVal"
            :endVal="today"
            :duration="3000"
          ></countTo>
        </div>
      </el-card>
      <el-card class="box s2">
        <i class="el-icon-document"></i>
        <div>原创文章</div>
        <div><countTo
            :startVal="startVal"
            :endVal="myself"
            :duration="3000"
        ></countTo></div>
      </el-card>
      <el-card class="box s3">
        <i class="el-icon-bell"></i>
        <div>新消息</div>
        <div>0</div>
      </el-card>
      <el-card class="box s4">
        <i class="el-icon-phone-outline"></i>
        <div>新留言</div>
        <div>0</div>
      </el-card>
    </div>
 </div>
</template>

<script>
import countTo from "vue-count-to";
 export default {
   data () {
     return {
      startVal: 0,
      endVal1: 0,
      today: 0,
      myself: 0
     }
   },
   components: {
     countTo
   },
   methods: {
     gettext(){
       this.$axios
       .req("/article/allArticle")
       .then(res=>{
         console.log(res)
         let nowtime = Date.now();
          nowtime = this.$dayjs(nowtime).format("YYYY年MM月DD日"); //将当前时间节点格式转变
          res.data.map(item => {
            item.date = this.$dayjs(item.date).format("YYYY年MM月DD日"); //将文章的发布时间格式转变
            if (item.source === "原创") {
              this.myself++;
            }
            if (item.date === nowtime) {
              this.today++; //如果相等就递增
            }
          });
       }).catch(err=>{
         console.log(err);
       })
     }
   },
   mounted() {
     this.gettext()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
#top {
  text-align: center;
  display: flex;
  justify-content: start;
  .box {
    flex: 1;
    i {
      position: relative;
      left: 100px;
      top: 20px;
    }
  }
  .s1 {
    background: #7ccabf;
  }
  .s2 {
    background: #e88a87;
  }
  .s3 {
    background: #8375a3;
  }
  .s4 {
    background: #9fcec1;
  }
}
</style>