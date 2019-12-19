<template>
 <div>
   <div class="top">
      <el-card class="box">
        <div class="box1">
          <div>
            <img src="../../assets/people.svg" alt="" />
          </div>
          <div class="num">
            <div>News &nbsp; Visits</div>
            <div>
              <countTo
                :startVal="startVal"
                :endVal="visits"
                :duration="3000"
              ></countTo>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box">
        <div class="box1">
          <div><img src="../../assets/news.svg" alt="" /></div>
          <div class="num">
            <div>Messages</div>
            <div>
              <countTo
                  :startVal="startVal"
                  :endVal="message"
                  :duration="3000"
              ></countTo>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box">
        <div class="box1">
          <div><img src="../../assets/money.svg" alt="" /></div>
          <div class="num">
            <div>Purchases</div>
            <div>
              <countTo
                  :startVal="startVal"
                  :endVal="purchases"
                  :duration="3000"
              ></countTo>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box">
        <div class="box1">
          <div><img src="../../assets/car.svg" alt="" /></div>
          <div class="num">
            <div>Shoppings</div>
            <div>
              <countTo
                  :startVal="startVal"
                  :endVal="shopping"
                  :duration="3000"
              ></countTo>
            </div>
          </div>
        </div>
      </el-card>
    </div>
 </div>
</template>

<script>
import countTo from "vue-count-to";
 export default {
   data () {
     return {
      visits: 0,
      message: 0,
      purchases: 0,
      shopping: 0,
      startVal: 0,
      endVal: 0
     }
   },
   components: {
      countTo
   },
   methods: {
     getData () {
      this.$axios
      .req("/homeData")
      .then(res => {
        this.shopping = res.data.shopping;//使vue的值等于data中的数据
        this.visits = res.data.visits;
        this.message = res.data.messages;
        this.purchases = res.data.purchases;
      }).catch(err => {
        console.log(err)
      })
    }
   },
   mounted() {
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.top {
  display: flex;
  min-width: 1080px;
  justify-content: start;
  .box {
    flex: 1;
    margin-right: 5px;
    .box1 {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      color: #8f8f8f;
    }
  }
}
</style>