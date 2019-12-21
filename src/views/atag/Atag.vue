<template>
 <div id="atag">
   <el-tabs v-model="activeName">
    <!--      动态绑定-->
      <el-tab-pane :label="unRead" name="first"></el-tab-pane>
      <el-tab-pane :label="alreadyRead" name="second"></el-tab-pane>
      <el-tab-pane :label="stationBack" name="third"></el-tab-pane>
    </el-tabs>

    <!--    未读-->
    <div v-if="activeName === 'first'">
      <div v-for="(item, index) in notread" :key="index" id="notread">
        <div>{{ item.msg }}</div>
        <div id="ncontrol">
          <div>{{ item.time }}</div>
          <el-button @click="notice(item, index)">标记已读</el-button>
        </div>
      </div>
      <div v-if="notread.length === 0" class="content">暂无消息</div>
      <el-button @click="noticeAll" v-if="notread.length > 0"
        >全部标为已读</el-button
      >
    </div>
    <!--    已读-->
    <div v-if="activeName === 'second'">
      <div v-for="(item, index) in read" :key="index" id="read">
        <div>{{ item.msg }}</div>
        <div id="rcontrol">
          <div>{{ item.time }}</div>
          <el-button @click="del(item, index)">删除</el-button>
        </div>
      </div>
      <div v-if="read.length === 0" class="content">暂无消息</div>
      <el-button @click="delAll" v-if="read.length > 0">全部删除</el-button>
    </div>
    <!--    回收站-->
    <div v-if="activeName === 'third'">
      <div v-for="(item, index) in backrubish" :key="index" id="backrubish">
        <div>{{ item.msg }}</div>
        <div id="bcontrol">
          <div>{{ item.time }}</div>
          <el-button @click="back(item, index)">恢复</el-button>
        </div>
      </div>
      <div v-if="backrubish.length === 0" class="content">暂无消息</div>
      <el-button class="but" @click="delteAll" v-if="backrubish.length > 0"
        >全部清空</el-button
      >
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      activeName: "first",
      notread: [
        {
          msg: "[系统通知]该系统将于今晚凌晨2点到5点进行维护更新",
          time: "2018-04-19 20:00"
        },
        { msg: "今晚12点整发大红包，先到先得", time: "2018-04-19 21:00" }
      ],
      read: [
        {
          msg: "[系统通知]该系统将于今晚凌晨2点到5点停机维护",
          time: "2018-04-19 20:00"
        }
      ],
      backrubish: [
        { msg: "[系统通知]您的优惠券已经过期", time: "2018-04-19 20:00" }
      ]
     }
   },
   components: {

   },
   methods: {
     //单个标记已读
    notice(item, index) {
      this.notread.splice(index, 1);
      this.read.push(item);
    },
    //所有标记已读
    noticeAll() {
      this.read.push(...this.notread);
      this.notread.splice(0);
    },
    //单个标记删除
    del(item, index) {
      this.backrubish.push(item);
      this.read.splice(index, 1);
    },
    //全部删除
    delAll() {
      this.backrubish.push(...this.read);
      this.read.splice(0);
    },
    //单个恢复
    back(item, index) {
      this.backrubish.splice(index, 1);
      this.read.push(item);
    },
    //全部删除
    delteAll() {
      this.backrubish.splice(0);
    }
   },
   mounted() {

   },
   watch: {

   },
   computed: {
      unRead() {
      return `未读消息(${this.notread.length})`;//计算属性
    },
    alreadyRead() {
      return `已读消息(${this.read.length})`;
    },
    stationBack() {
      return `已读消息(${this.backrubish.length})`;
    }
   }
 }
</script>

<style scoped lang='scss'>
#atag{
  min-width: 1080px;
}
#notread {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  line-height: 50px;
  height: 50px;
  padding: 20px;
  margin-bottom: 20px;
  #ncontrol {
    display: flex;
    div {
      padding-right: 10px;
    }
  }
}
#read {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  line-height: 50px;
  height: 50px;
  padding: 20px;
  margin-bottom: 20px;
  #rcontrol {
    display: flex;
    div {
      padding-right: 10px;
    }
  }
}
#backrubish {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  line-height: 50px;
  height: 50px;
  padding: 20px;
  margin-bottom: 20px;
  #bcontrol {
    display: flex;
    div {
      padding-right: 10px;
    }
  }
}
.content {
  text-align: center;
}
</style>