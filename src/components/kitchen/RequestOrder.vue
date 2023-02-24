<template>
  <el-row>
    <el-collapse  v-model="activeNames">
      <el-collapse-item v-for="item in foods" :key="item.id" :title="item.table.name" :name="item.table.name">
        <el-table
          :data="item.orderFoods"
          style="width: 100%">
          <el-table-column
            prop="food.name">
          </el-table-column>
          <el-table-column
            prop="amount">
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-row>
</template>

<script>

import orderService from '@/services/order.service';

export default {
  name: "RequestKitchen",
  data() {
    return {
      foods: [],
      activeNames: []
    }
  },
  methods: {
    getFoods() {
      orderService.getRequestOrders()
        .then(response => {
          this.foods = response.data;
          this.activeNames = this.foods.map((value) => {
            return value.table.name;
          })
          console.log(this.foods);
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  created() {
    this.getFoods();
  }
}
</script>

<style>

</style>