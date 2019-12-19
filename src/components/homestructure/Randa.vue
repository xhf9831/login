<template>
 <div>
   <el-card class="el__dispa">
     <ve-radar :data="chartData"></ve-radar>
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
          .req("/radarChat")
          .then(res => {
            Object.keys(res.data[0]).map(item => {
              this.chartData.columns.push(item);
            })
            (this.chartData.rows = res.data);
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