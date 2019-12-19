<template>
 <div>
   <el-card>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="num"
        label="Order_No"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price"
        >
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status">
        <template slot-scope="scope">
          <el-tag type="danger" v-if="scope.row.status === 0">pending</el-tag>
          <el-tag type="success" v-if="scope.row.status ===1">success</el-tag>
        </template>
      </el-table-column>
    </el-table>
   </el-card>  
 </div>
</template>

<script>
 export default {
   data () {
     return {
       tableData:[]
     }
   },
   components: {

   },
   methods: {
      gettext() {
        this.$axios
          .req("/orderData ")
          .then(res => {
            this.tableData=res.data
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