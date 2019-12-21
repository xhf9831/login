<template>
 <div class="already">
    <el-card>
      <div v-if="list.length > 0">
        <el-table :data="list" border style="width: 100%">
          <el-table-column prop="number" label="#" type="index" align="center">
          </el-table-column>
          <el-table-column prop="date" label="标题" width="140" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="作者" width="85" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.author }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="类目" width="120" align="center">
            <template slot-scope="scope">
              <el-tag type="info" v-if="scope.row.category === 'React'">
                {{scope.row.category}}</el-tag>
              <el-tag type="success" v-if="scope.row.category === 'Vue'">
                {{scope.row.category }}</el-tag>
              <el-tag type="warning" v-if="scope.row.category === 'Javasscript'">
                {{ scope.row.category }}
              </el-tag>
              <el-tag type="info" v-if="scope.row.category === '小程序'">
                {{ scope.row.category }}
              </el-tag>
              <el-tag type="warning" v-if="scope.row.category === '工具类'">
                {{ scope.row.category }}
              </el-tag>
              <el-tag
                v-if="scope.row.category === '其他'">
                {{ scope.row.category }}
              </el-tag>
              <el-tag type="danger" v-if="scope.row.category === '性能优化'">
                {{scope.row.category }}
              </el-tag>
              <el-tag v-if="scope.row.category === 'Node.js'">
                {{scope.row.category }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="来源" width="100" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.source }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="date"
            label="重要性"
            width="150"
            align="center"
          >
            <template slot-scope="scope">
              <el-rate
                v-model="scope.row.star"
                disabled
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="发布时间" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini "
                @click="handleEdit(scope.row)"
              >
                编辑
              </el-button>

              <el-button
                size="mini "
                type="danger"
                @click="handleDelete(scope.row)"
              >
                删除</el-button
              >
              <el-button
                size="mini "
                type="success"
                @click="handleNotice(scope.row)"
              >
                查看</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-else>暂时没有发表的文章</div>
    </el-card> 
 </div>
</template>

<script>
 export default {
   data () {
     return {
       list:[],
     }
   },
   components: {

   },
   methods: {
     gettext() {
        this.$axios
          .req("/article/allArticle")
          .then(res => {
            this.list = res.data
              this.list.map((item)=>{
                item.date = this.$dayjs(item.date).format("YYYY年MM月DD号HH时mm分ss秒")
                item.star = Number(item.star)
              })
          })
          .catch(err => {
            console.log(err);
        });
     },
     handleDelete(row){
       this.$axios.
       req("/article/delete",{_id:row._id})
       .then(res =>{
         if(res.code === 200){
           this.gettext()
         }
       })
     },
     handleNotice(row){
       this.$router.push({name:'notice',query:{_id:row._id}})
     },
     handleEdit(row){
       this.$router.push({name:'edit',query:{_id:row._id}})
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
.akready{
  min-width: 1080px;
}
</style>