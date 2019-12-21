<template>
 <div>
   <ve-waterfall :data="chartData"></ve-waterfall>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      list: [],
      obj: {},
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
        .req("article/allArticle")
        .then(response => {
          console.log(response);
          this.list = response.data;
          this.list.map(item => {
            item.date = this.$dayjs(item.date).format("YYYY年MM月DD日");
          });//这里先将时间格式转换掉
          this.obj = this.$lodash.groupBy(this.list, "date");//根据时间分组
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