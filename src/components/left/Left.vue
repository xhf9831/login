<template>
 <div>
   <el-menu
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="/home" @click="go('/home')">
        <i class="el-icon-house"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/excel" @click="go('/excel')">
        <i class="el-icon-menu"></i>
        <span slot="title">分页表格</span>
      </el-menu-item>
      <el-menu-item index="/atag" @click="go('/atag')">
        <i class="el-icon-document"></i>
        <span slot="title">标签页</span>
      </el-menu-item>
      <el-menu-item index="/upload" @click="go('/upload')">
        <i class="el-icon-picture-outline-round"></i>
        <span slot="title">图片上传</span>
      </el-menu-item>
      <el-menu-item index="/already" @click="go('/already')">
        <i class="el-icon-check"></i>
        <span slot="title">已发表</span>
      </el-menu-item>
      <el-menu-item index="/editwork" @click="go('/editwork')">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/sumall" @click="go('/sumall')">
        <i class="el-icon-s-data"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item index="/goexel" @click="go('/goexel')">
        <i class="el-icon-s-marketing"></i>
        <span slot="title">导出excel</span>
      </el-menu-item>
      <el-menu-item index="/exit" @click="go('/exit')">
        <i class="el-icon-close"></i>
        <span slot="title">退出登录</span>
      </el-menu-item>
    </el-menu>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        // list:[
        //   {icon:'el-icon-house',title:'首页'},
        //   ]
          
     }
   },
   components: {

   },
   methods: {
     go(text){
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
div{
    position: fixed;
    width: 170px;
    height: 100%;
    .el-menu-vertical-demo{
      height: 100%;
    }
  }
</style>