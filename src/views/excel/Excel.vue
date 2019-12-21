<template>
 <div id="excel">
    <div class="content">
      <input type="text" class="form-control" v-model="keywords"/>
    </div>
    <el-table
      :data="arr.slice(allPages * (nowPages - 1), nowPages * allPages)"
      style="width: 100%">
      <el-table-column prop="NAME" label="名称"> </el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号">
      </el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价"> </el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="产品信息修改" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="产品名称" :label-width="formLabelWidth">
          <el-input v-model="val.NAME" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="原价" :label-width="formLabelWidth">
          <el-input v-model="val.ORI_PRICE" autocomplete="off"> </el-input>
          <!--          获取初始值-->
        </el-form-item>
        <el-form-item label="现价" :label-width="formLabelWidth">
          <el-input v-model="val.PRESENT_PRICE" autocomplete="off"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editBack">取 消</el-button>
        <el-button type="primary" @click="editGo">确 定</el-button>
      </div>
    </el-dialog>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 60, 80, 100]"
        :page-size="40"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arr.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
 export default {
   data () {
     return {
      currentPage: 1,
      allPages: 40,
      nowPages: 1,
      num: 0,
      tableData: [],
      formLabelWidth: "100px",
      dialogFormVisible: false, //默认不出现
      val: {}, //接受选中的值
      keywords: "", // 搜索的关键字
      arr: []
     }
   },
   components: {
     
   },
   methods: {
     gettext() {
      this.$axios
        .req("/tableData")
        .then(res => {
          console.log(res);
          this.tableData = res.data;
          this.arr = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleDelete(row) {
      this.arr.splice(this.arr.indexOf(row),1)
    },
    handleEdit(row) {
      this.dialogFormVisible = true; //点击触发事件
      this.val = row; //使获取的值等于这个参数
    },
    editGo() {
      this.dialogFormVisible = false;
      this.$message({
        message: "修改信息成功",
        type: "success"
      });
    },
    editBack() {
      this.dialogFormVisible = false;
      this.$message({
        message: "修改失败",
        type: "warning"
      });
    },
    changeColor(index) {
      this.num = index;
    },
    handleSizeChange(val) {
      this.allPages = val;
    },
    handleCurrentChange(val) {
      this.nowPages = val;
    }
   },
   mounted() {
     this.gettext()
     this.tableData = this.arr
   },
   watch: {
     keywords(val) {
      // 说明输入框有值
      if (val.trim() !== "") {
        this.nowPages = 1;
        this.arr = this.tableData.filter(item => {
          return JSON.stringify(item).includes(val);
        });
      } else {
        this.arr = this.tableData;
      }
    }
   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
#excel{
  min-width: 1080px;
  .content{
    margin-bottom: 20px;
    .form-control{
      padding: 5px
    }
  }
}
</style>