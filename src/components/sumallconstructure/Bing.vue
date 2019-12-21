<template>
 <div>
   <ve-pie :data="chartData"></ve-pie>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      obj: {},
      list: [],
      chartData: {
        columns: ["name", "length"],
        rows: []
      }
     }
   },
   components: {

   },
   methods: {
    gettext() {
    this.$axios
      .req("/article/allArticle")
      .then(res => {
        console.log(res);
        this.list = res.data;
        this.obj = this.$lodash.groupBy(this.list, "category");
        for (let i in this.obj) {
          this.chartData.rows.push({ name: i, length: this.obj[i].length });
        }
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