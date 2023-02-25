<template>
  <el-row class="container-fluid" :gutter="20">
    <el-col :span="12">
      <request-order></request-order>
    </el-col>
    <el-col :span="12"></el-col>
  </el-row>
</template>

<script>
import RequestOrder from './RequestOrder.vue'

export default {
  name: 'kitchenIndex',
  components: {
    RequestOrder
  }
}
</script>

<style>

</style>
