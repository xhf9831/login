<template>
 <div id="bg">
    <div class="kuang">
      <div class="title">
        欢迎来到小萧后台管理系统
      </div>
      <div class="reg">
        <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        >
          <el-form-item label="用户名称" prop="username">
            <el-input
              v-model="ruleForm.username"
              onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即注册</el-button
            >
            <el-button type="danger" @click="resetForm('/login')">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   data () {
     var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
   }
     return {
        ruleForm: {
        username: "", 
        pass: "" 
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符" }
        ],
        pass: [
          { required: true, message: "密码不能为空" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符" },
          { validator: validatePass, trigger: "blur" }
        ]
      }
     }
   },
   components: {

   },
   methods: {
     submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .req("user/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.pass
            })
            .then(res => {
              if (res.code !== 1) {
                localStorage.setItem(
                  //自定义的名字，存到localStorage里面
                  "user",
                  //stringify里面是一个对象
                  JSON.stringify({
                    //获取到的对象转换成字符串
                    name: this.ruleForm.username
                  })
                );
                //将输入的用户名存到state.js里面
                this.$store.state.username = this.ruleForm.username;
                this.$message({
                  message: "注册成功",
                  type: "success"
                });
                //成功后跳转页面
                this.$router.push("/login");
              } else if (res.code === 1) {
                this.$message.error("用户已存在！请重新取名");
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    resetForm(path) {
      this.$router.push(path);
    }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
#bg {
  min-width: 1080px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("../../assets/bg.jpg") no-repeat;
  background-size: 100%;
  .kuang {
    margin: 8% auto;
    background-color: white;
    padding: 20px;
    width: 25%;
    .titile {
      font-size: 18px;
      border-bottom: 1px solid #b4b4b4;
      line-height: 60px;
    }
    .reg{
      text-align: left;
    }
  }
  
  .el-form {
    margin: 40px 0
  }
}
</style>