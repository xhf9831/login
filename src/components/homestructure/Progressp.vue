<template>
 <div id="bg">
   <el-card>
    <div id="content">
      <div class="hp">
        <img src="../../assets/s1.png" alt="">
      </div>
      <div v-for="(item,index) in list" :key="index">
        <div>{{item.name}}</div>
        <template>
          <el-progress :percentage="item.progress*100" v-if="item.progress===1" status="success"></el-progress>
          <el-progress :percentage="item.progress*100" v-if="item.progress!==1"></el-progress>
        </template>
      </div>
    </div>
   </el-card> 
  </div>
</template>

<script>
 export default {
   data () {
     return {
       list:[]
     }
   },
   components: {

   },
   methods: {
     gettext() {
        this.$axios
          .req("/progress")
          .then(res => {
            console.log(res);
            this.list=res.data
            })
          .catch(err => {
            console.log(err);
        });
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
#bg{
    background-color: white;
    #content{
      padding: 10px;
      .hp{
        text-align: center;
        img{
          width: 100%;
        }
      }
    }
}       
</style>