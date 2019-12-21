<template>
 <div>
  <count></count>
  <zechart></zechart>
  <div id="chart">
    <randa class="randa"></randa>
    <ring class="ring"></ring>
    <histogoram class="hist"></histogoram>
  </div>
  <div class="content">
    <order class="order"></order>
    <todo class="todo"></todo>
    <progressp class="progress"></progressp>
  </div>
 </div>
</template>

<script>
import count from '../../components/homestructure/Count'
import zechart from '../../components/homestructure/Zechart'
import randa from '../../components/homestructure/Randa'
import ring from '../../components/homestructure/Ring'
import histogoram from '../../components/homestructure/Histogoram'
import order from '../../components/homestructure/Order'
import todo from '../../components/homestructure/Todo'
import progressp from '../../components/homestructure/Progressp'
 export default {
   data () {
     return {

     }
   },
   components: {
     count,
     zechart,
     randa,
     ring,
     histogoram,
     order,
     todo,
     progressp
   },
   methods: {
     
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
#chart{
  margin-top: 20px;
  display: flex;
  min-width: 1080px;
  justify-content: space-around;
  .randa{
    width: 33%;
  }
  .ring{
    width: 33%;
  }
  .hist{
    width: 33%;
  }
}
.content{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .order{
    width: 50%;
  }
  .todo{
    width: 25%;
  }
  .progress{
    width: 25%;
  }
}
</style>