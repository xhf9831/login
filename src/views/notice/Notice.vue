<template>
 <div class="notice">
  <el-button @click="go('/already')" type="primary">返回</el-button>
    <div class="top">
      <div class="tit">{{ list.title }}</div>
      <div class="zy">摘要：{{ list.abstract }}</div>
      <div class="date">发表于：{{ list.date }}</div>
    </div>
    <el-card class="text">{{list.text}}</el-card>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      list:[],
      id:''
     }
   },
   components: {

   },
   methods: {
     getData() {
      console.log(this.id); 
      this.$axios
        .req("/article/article", { _id: this.id })
        .then(res => {
          this.list = res.data;
          this.list.date = this.$dayjs(this.list.date).format("YYYY年MM月DD日HH时mm分ss秒")//改变时间样式
        })
        .catch(arr => {
          console.log(arr);
        });
    },
    go(text){
      this.$router.push(text)
    }
   },
   mounted() {
     this.id = this.$route.query._id;
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.notice{
  min-width: 1080px;
}
.top{
    text-align: center;
    .tit{
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 30px;
    }
    .zy{
      font-size: 15px;
    }
    .date{
      color: #CFCED2;
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
</style>