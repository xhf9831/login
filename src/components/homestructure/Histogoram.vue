<template>
 <div>
   <el-card>
    <ve-histogram :data="chartData"></ve-histogram>
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
     gettext() {
        this.$axios
          .req("/homeChat")
          .then(res => {
            this.chartData.columns = Object.keys(res.data[0])
            this.chartData.rows = res.data
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

</style>