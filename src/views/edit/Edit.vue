<template>
 <div id="edit">
    <div id="but">
      <el-button type="danger" @click="go('/already')">返回</el-button>
      <el-button type="primary" @click="getup">发布</el-button>
    </div>
    <el-form :model="list" ref="list" label-width="100px" class="demo-list">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="list.title"></el-input>
      </el-form-item>

      <el-form-item label="文章摘要" prop="abstract">
        <el-input v-model="list.abstract"></el-input>
      </el-form-item>

      <div class="xinxi">
        <div class="shuru">
          <el-form-item label="作者" prop="author">
            <el-input v-model="list.author"></el-input>
          </el-form-item>
        </div>
        <div class="shuru">
          <el-form-item label="类目" prop="category">
            <el-select v-model="list.category" placeholder="请选择">
              <el-option label="Vue" value="Vue"></el-option>
              <el-option label="React" value="React"></el-option>
              <el-option label="Node.js" value="Node.js"></el-option>
              <el-option label="性能优化" value="性能优化"></el-option>
              <el-option label="Javasscript" value="Javasscript"></el-option>
              <el-option label="性能优化" value="性能优化"></el-option>
              <el-option label="小程序" value="小程序"></el-option>
              <el-option label="工具类" value="工具类"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="shuru">
          <el-form-item label="来源" prop="source">
            <el-select v-model="list.source" placeholder="请选择">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="分享" value="分享"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="shuru">
          <el-form-item label="重要性" prop="star">
            <el-select v-model="list.star" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="shuru">
          <el-form-item label="发布时间:" prop="time">
            <el-date-picker
              v-model="list.date"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <div>
      <mavon-editor v-model="list.text" />
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
       id:'',
       list:{
        title:'',
        abstract:'',
        author:'',
        category:'',
        source:'',
        star:'',
        date:'',
        text:''
       }
     }
   },
   components: {

   },
   methods: {
     go(text) {
      this.$router.push(text);
    },
    getup() {
      this.$axios
        .req("/article/update", {
          id: this.id,
          title: this.list.title,
          abstract: this.list.abstract,
          author: this.list.author,
          category: this.list.category,
          source: this.list.source,
          star: this.list.star,
          text: this.list.text,
          date: this.list.date
        })
        .then(res => {
          console.log(res)
          if (res.code ===200) {
            this.$message({
              showClose: true,
              message: "数据传送成功",
              type: "success"
            });
            
          }
        });
        this.$router.push("/already");
      
    },
     getData() {
      this.$axios
        .req("article/article", { _id: this.id }) //先获取再发布编辑后的文件
        .then(res => {
          console.log(res);
          this.list = res.data;
        })
        .catch(arr => {
          console.log(arr);
        });
    }
   },
   mounted() {
     this.id = this.$route.query._id
     this.getData()
   },
   watch: {
     "ruleForm.date": {
      handler(val) {
        if (val > new Date()) {
          this.ruleForm.date = new Date();
          this.$message({
            type: "error",
            message: "不能超过当前时间!"
          });
        }
      },
      deep: true
    }
   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
#edit{
  min-width: 1080px;
  #but{
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }
    .xinxi{
      display: flex;
    }
}
</style>