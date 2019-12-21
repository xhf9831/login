<template>
 <div class="sumall">
   <top></top>
   <div class="chart">
     <bing class="bing"></bing>
     <ring class="ring"></ring>
   </div>
   <water></water>
 </div>
</template>

<script>
import top from '../../components/sumallconstructure/Top'
import ring from '../../components/sumallconstructure/Ring'
import bing from '../../components/sumallconstructure/Bing'
import water from '../../components/sumallconstructure/Water'
 export default {
   data () {
     return {

     }
   },
   components: {
     top,
     ring,
     bing,
     water
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
.sumall{
  min-width: 1080px;
  .chart{
    display: flex;
    .bing{
      width: 50%;
    }
    .ring{
      width: 50%;
    }
  }
}
</style>