<template>
  <el-row>
<<<<<<< HEAD
    <el-col :span="12">
      <request-order></request-order>
    </el-col>
    <el-col :span="12"></el-col>
=======
    <el-col span="12"></el-col>
    <el-col span="12"></el-col>
>>>>>>> 17d109488731ee53de9049fc634b00896b49deb1
  </el-row>
</template>

<script>
<<<<<<< HEAD
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
=======
export default {
  name: 'kitchenOrder',
  data() {
    return {
      requestOrder: []
    }
  }
}
</script>
>>>>>>> 17d109488731ee53de9049fc634b00896b49deb1
