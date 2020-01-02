<template>
 <div id="top">
   <div id="content">
      <div id="left">欢迎{{user.name}}来到小萧后台管理系统</div>
      <div id="right">
        <div class="good">{{hoursTip}}，亲爱的{{user.name}}</div>
        <div>上次登录时间：{{day}}</div>
      </div>
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       user:{},
       date:'',
       today:'',
       date:'',
       day:'',
       hoursTip:''
     }
   },
   components: {

   },
   methods: {
     getMycount: function() {
      let self = this;
      let date = new Date();
      if (date.getHours() >= 6 && date.getHours() < 10) {
        self.hoursTip = "早上好";
      } else if (date.getHours() >= 10 && date.getHours() < 13) {
        self.hoursTip = "上午好";
      } else if (date.getHours() >= 13 && date.getHours() < 17) {
        self.hoursTip = "下午好";
      } else if (date.getHours() >= 17 && date.getHours() < 22) {
        self.hoursTip = "晚上好";
      } else {
        self.hoursTip = "夜深了该休息了~~~";
      }
    }
   },
   mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
    this.today = new this.$dayjs().hour(0).minute(0).second(0).millisecond(0);
    console.log(this.today);
    this.date = Math.floor(this.$dayjs().diff(this.today) / 1000 / 3600);
    console.log(this.date);
    this.day = this.$dayjs(this.user.date).format("YYYY年MM月DD日 HH:mm:ss");
    console.log(this.day);
    this.getMycount()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
#top {
  line-height: 60px;
  background-color: #2e5e85;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 6;
  #content {
    display: flex;
    min-width: 1080px;
    justify-content: space-between;
    padding: 0 45px;
    #right {
      display: flex;
      justify-content: space-between;
      .good {
        margin-right: 20px;
      }
    }
  }
}
</style>