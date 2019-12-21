<template>
 <div>
   <el-card>
     <div id="top">
            <div class="photo">
                <img @click="checkAll" src="../../assets/箭头.png" alt="" />
            </div>
            <div class="title">Todo&nbsp;List</div>
        </div>
        <!--      All界面-->
        <div class="check" v-if="num === 0">
            <div v-for="(item, index) in list" :key="index" class="content">
                <div class="left">
                    <div class="circle" @click="clickCheck(item, index)">
                        <img v-if="item.checked" src="../../assets/勾选.png" alt="" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                </div>
                <div class="right">
                    <img
                            class="del"
                            @click="clickDelete(index)"
                            src="../../assets/错.png"
                            alt=""
                    />
                </div>
            </div>
            <div v-if="this.list.length === 0">暂无数据</div>
        </div>
        <!--      Active界面-->
        <div class="check" v-if="num === 1">
            <div v-for="(item, index) in Activelist" :key="index" class="content">
                <div class="left">
                    <div class="circle" @click="CheckActive(item, index)">
                        <img v-if="item.checked" src="../../assets/勾选.png" alt="" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                </div>
                <div class="right">
                    <img
                            class="del"
                            @click="DeleteActive(item, index)"
                            src="../../assets/错.png"
                            alt=""
                    />
                </div>
            </div>
            <div v-if="this.list.length === 0">暂无数据</div>
        </div>
        <!--      Complete界面-->
        <div class="check" v-if="num === 2">
            <div v-for="(item, index) in Completelist" :key="index" class="content">
                <div class="left">
                    <div class="circle" @click="CheckComplete(item, index)">
                        <img v-if="item.checked" src="../../assets/勾选.png" alt="" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                </div>
                <div class="right">
                    <img
                            class="del"
                            @click="DeleteComplete(item, index)"
                            src="../../assets/错.png"
                            alt=""
                    />
                </div>
            </div>
            <div v-if="this.list.length === 0">暂无数据</div>
        </div>
        <div id="finally">
            <div class="count">{{ sum }}item</div>
            <div :class="{ num: this.num === 0 }" @click="set(0)">All</div>
            <div :class="{ num: this.num === 1 }" @click="goActive(1)">Active</div>
            <div :class="{ num: this.num === 2 }" @click="goComplete(2)">
                Complete
            </div>
    </div>
   </el-card> 
 </div>
</template>

<script>
 export default {
   data () {
     return {
      list:[],
      Completelist: [],
      Activelist: [],
      num: 0,
      checkall: false
     }
   },
   components: {

   },
   methods: {
     getData () {
      this.$axios
      .req("/todoList")
      .then(res => {
       this.list=res.data
      }).catch(err => {
        console.log(err)
      })
    },
     clickDelete(index) {
                this.list.splice(index, 1);
            },
            DeleteActive(item, index) {
                this.Activelist.splice(index, 1);
                this.list.splice(this.list.indexOf(item), 1);
            },
            DeleteComplete(item, index) {
                this.Completelist.splice(index, 1);
                this.list.splice(this.list.indexOf(item), 1);
            },
            checkAll() {
                this.checkall = !this.checkall;
                this.list.map(item => {
                    item.checked = this.checkall;
                });
                this.Activelist.splice(0)
                this.Completelist.splice0
            },
            clickCheck(item, index) {
                this.list[index].checked = !this.list[index].checked;
                this.checkall = this.list.every(item => {
                    return item.checked === true;
                }); //全部选中的情况，全选才会被选中
            },
            CheckActive(item, index) {
                this.Activelist[index].checked = !this.Activelist[index].checked
                if(this.Activelist[index].checked !== false){
                    this.Activelist.splice(index,1)
                }
            },
            CheckComplete(item, index) {
                this.Completelist[index].checked = !this.Completelist[index].checked;
                if(this.Completelist[index].checked !== true){
                    this.Completelist.splice(index,1)
                }
            },
            set(data) {
                this.num = data;
            },
            goActive(data) {
                this.num = data;
                this.Activelist = this.list.filter(item => {
                    return item.checked !== true;
                });
                this.checkall = this.Activelist.every(item => {
                    return item.checked === true;
                });//重新返回当前全选状态的布尔值
            },
            goComplete(data) {
                this.num = data;
                this.Completelist = this.list.filter(item => {
                    return item.checked === true;
                });
                this.checkall = this.Completelist.every(item => {
                    return item.checked === true;
                });//重新返回当前全选状态的布尔值
            }
   },
   mounted() {
     this.getData()
   },
   watch: {

   },
   computed: {
     sum() {
                let sum = this.list.length;
                this.list.map(item => {
                    if (item.checked) {
                        sum -= 1;
                    }
                });
                return sum;
            }
   }
 }
</script>

<style scoped lang='scss'>
#top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgrey;
        line-height: 30px;
    }
    .check {
        border-bottom: 1px solid lightgrey;
        .content {
            display: flex;
            justify-content: space-between;
            margin: 24px 0;
            &:hover {
                .del {
                    display: block;
                }
            }
            .left {
                display: flex;
                .circle {
                    border: 1px solid lightgrey;
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                }
                .name {
                    line-height: 36px;
                    margin-left: 20px;
                }
            }
            .right {
                img {
                    display: none;
                }
            }
        }
    }
    #finally {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>