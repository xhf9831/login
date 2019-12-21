<template>
 <div id="exit">
   <el-button type="primary" @click="exit('/login')">退出登录</el-button>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
     exit(text){
      localStorage.clear()
      this.$router.push(text)
     }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
#exit{
  text-align: center;
  margin-top: 40vh;
}
</style>