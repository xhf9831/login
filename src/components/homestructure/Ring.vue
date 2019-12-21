<template>
 <div>
   <el-card>
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
   </el-card>
 </div>
</template>

<script>
 export default {
   data () {
     this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: [],
        rows: []
      }
    };
   },
   components: {

   },
   methods: {
     getData () {
      this.$axios
      .req("/ringChat ")
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

</style>