<template>
 
  <router-view/>
</template>


<script setup>
  import * as echarts from "echarts"
  import {provide,Provider} from "vue"
  provide("echarts",echarts)
</script>


<style lang="scss">
 *{padding: 0%;
 margin: 0%;}

</style>
