<template>
 <div>
   <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
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
        columns: ["name", "length"],
        rows: []
      },
      list: [],
      obj: {}
    };
  },
  methods: {
    gettext() {
      this.$axios
        .req("/article/allArticle")
        .then(res => {
          console.log(res);
          this.list = res.data;
          this.obj = this.$lodash.groupBy(this.list, "source");
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