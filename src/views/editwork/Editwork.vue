<template>
 <div id="edit">
   <div class="top">
     <div class="but">
      <el-button type="danger" @click="go('/already')">查看</el-button>
      <el-button type="primary" @click="getup">发布</el-button>
     </div>
   </div>
   <div class="input">
      <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm">
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>

        <div class="content">
          <div class="inp">
            <el-form-item label="作者" prop="author">
              <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
          </div>
          <div class="inp">
            <el-form-item label="类目" prop="category">
              <el-select v-model="ruleForm.category" placeholder="请选择">
                <el-option label="Vue" value="Vue"></el-option>
                <el-option label="React" value="React"></el-option>
                <el-option label="Node.js" value="Node.js"></el-option>
                <el-option label="性能优化" value="性能优化"></el-option>
                <el-option label="小程序" value="小程序"></el-option>
                <el-option label="工具类" value="工具类"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="inp">
            <el-form-item label="来源" prop="source">
              <el-select v-model="ruleForm.source" placeholder="请选择">
                <el-option label="原创" value="原创"></el-option>
                <el-option label="转载" value="转载"></el-option>
                <el-option label="与他人合作" value="与他人合作"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="inp">
            <el-form-item label="重要性" prop="star">
              <el-select v-model="ruleForm.star" placeholder="请选择">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
                <el-option label="3" value="3"></el-option>
                <el-option label="4" value="4"></el-option>
                <el-option label="5" value="5"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="inp">
            <el-form-item label="发布时间:" prop="time">
              <el-date-picker
                  v-model="ruleForm.date"
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
   </div>
   <div class="main">
    <mavon-editor v-model="ruleForm.text"/>
   </div>
   <div class="btm">
    <el-button type="primary" @click="getup">发布</el-button>
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
       ruleForm:{
        title:'',
        abstract:'',
        author:'',
        category:'',
        source:'',
        star:'',
        date:'',
        text:''
       },
       rules:{
        title: [{ required: true,message:"请输入标题", trigger: "blur" }],
        abstract: [{ required: true, message:"请输入摘要", trigger: "blur" }],
        author: [{ required: true, message:"请输入作者", trigger: "blur" }],
        category: [{ required: true, trigger: "change" }],
        source: [{ required: true, trigger: "change" }],
        star: [{ required: true, trigger: "change" }]
       }
     } 
   },
   
   components: {

   },
   methods: {
     getup(){
       this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$axios.req("/article/create",{
            title: this.ruleForm.title,
            abstract: this.ruleForm.abstract,
            author: this.ruleForm.author,
            category: this.ruleForm.category,
            source: this.ruleForm.source,
            star: this.ruleForm.star,
            text: this.ruleForm.text,
            date: this.ruleForm.date
          })
        .then(res=>{
          if(res.code === 200){
            this.$message({
              showClose: true,
              message: "数据传送成功",
              type: "success"
            })
          }
        })
        this.$router.push('/already')
     }
    })
    },
    go(text){
      this.$router.push(text)
    }
   },
   mounted() {

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
  .top{
  background: #59A586;
  width: 100%;
  height: 50px;
  text-align: right;
  line-height: 50px;
  .but{
    margin-right: 20px;
  }
}
.input{
  margin-top: 20px;
  .content {
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    .inp {
      display: flex;
      line-height: 40px;
    }
  }
}
}
.btm{
  margin-top: 20px;
  text-align: center;
}
</style>