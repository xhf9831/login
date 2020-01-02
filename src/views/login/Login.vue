<template>
 <div id="bg">
    <div class="kuang">
      <div class="title">
        欢迎来到小萧后台管理系统
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <div class="code">
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
          </el-form-item>
          <!--          验证码-->
          <div v-html="code" class="code" @click="codes"></div>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
          <el-button type="danger" @click="resetForm('/register')">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
 export default {
   data () {
     let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      //装请返回的值
      use: [],
      //拿验证数据
      code: "",
      ruleForm: {
        pass: "",
        code: "",
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符" }
        ],
        pass: [
          { required: true, message: "密码不能为空" },
          { min: 6,max: 18, message: "长度在 6 到 18 个字符",validator: validatePass,trigger: "blur"}
        ],
        code: [{ required: true, message: "验证码不能为空" }]
      }
    };
   },
   components: {

   },
   methods: {
     codes() {
      this.getCheck();
    },
    //拿验证码
    getCheck() {
      this.$axios
        .req("/captcha")
        .then(res => {
          this.code = res;
        })
        .catch(err => {
          console.log(err);
        });
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .req("/user/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.pass,
              code: this.ruleForm.code
            })
            .then(res => {
              if (res.code === 200) {
                this.$message({
                  message: "登录成功",
                  type: "success"
                });
                this.$store.state.username = this.ruleForm.username;
                //将用户登录时间存下来
                this.$store.state.date = this.$dayjs(res.data[0].date).format(
                  "YYYY年MM月DD日hh:mm:ss"
                );
                //把收到的数据上传到LocalStorage
                localStorage.setItem(
                  //自定义的名字，存到localStorage里面
                  "user",
                  //stringify里面是一个对象
                  JSON.stringify({
                    //获取到的对象转换成字符串
                    name: this.ruleForm.username
                  })
                );
                localStorage.setItem(
                  //自定义的名字，存到localStorage里面
                  "time",
                  //stringify里面是一个对象
                  JSON.stringify({
                    //获取到的对象转换成字符串
                    time: this.$dayjs(res.data[0].date).format(
                      "YYYY年MM月DD日hh:mm:ss"
                    )
                  })
                );
                //成功后跳转页面
                this.$router.push("/home");
              } else {
                this.$message({
                  message: "用户名或者密码错误",
                  type: "error"
                });
                this.ruleForm.username=""
                this.ruleForm.pass=""
                this.ruleForm.code=""
                this.getCheck();
              }
            })
            .catch(err => {
              console.log(err);
            });

          //将输入的用户名存到state.js里面
          this.$store.state.user = this.ruleForm.username;
        } else {
          console.log("登录失败");
          return false;
        }
      });
    },
    resetForm(path) {
      this.$router.push(path);
    }
   },
   mounted() {
     this.getCheck();
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
    width: 35%;
    .code {
      display: flex;
      justify-content: space-between;
      .code {
        width: 150px;
        height: 55px;
        border: 1px solid #dcdfe6;
      }
    }
    .titile {
      font-size: 18px;
      border-bottom: 1px solid #b4b4b4;
      line-height: 60px;
    }
    .el-form {
      margin: 40px 20px;
    }
  }
}
</style>