<template>
 <div id="top">
   <div id="content">
      <div id="left">欢迎*******来到小萧后台管理系统</div>
      <div id="right">
        <div class="good">*******，亲爱的*******</div>
        <div>上次登录时间：*******</div>
      </div>
    </div>
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
#top {
  line-height: 60px;
  background-color: #2e5e85;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 6;
  #content {
    display: flex;
    min-width: 1080px;
    justify-content: space-between;
    padding: 0 45px;
    #right {
      display: flex;
      justify-content: space-between;
      .good {
        margin-right: 20px;
      }
    }
  }
}
</style>