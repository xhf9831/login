<template>
 <div id="bg">
    <el-card>
      <ve-line :data="chartData"></ve-line>
    </el-card>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      chartData: {
        columns: [],
        rows: []
      }
     }
   },
   components: {

   },
   methods: {
     getData () {
      this.$axios
      .req("/homeChat")
      .then(res => {
        this.chartData.columns = Object.keys(res.data[0])
        this.chartData.rows = res.data
      }).catch(err => {
        console.log(err)
      })
    }
   },
   mounted() {
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
#bg{
  margin-top: 20px;
}
</style>