<template>
 <div>
  <el-container class="el__element">
    <el-header><top></top></el-header>
    <el-container>
      <el-aside width="200px"><left></left></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
 </div>
</template>

<script>
import top from './top/Top'
import left from './left/Left'
 export default {
   data () {
     return {

     }
   },
   components: {
    top,
    left
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

</style>