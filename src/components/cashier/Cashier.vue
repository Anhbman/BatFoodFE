<template>
    <el-row>
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane label="Bàn">
            <Table v-on:selectTable="handleSelectTable"></Table>
          </el-tab-pane>
          <el-tab-pane label="Thực đơn">
            <Food v-on:selectFood="handleSelectFood"></Food>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="12">
        <Order :foods="selectedFood"></Order>
      </el-col>
    </el-row>
</template>

<script>

import Table from './Table.vue';
import Food from './Food.vue';
import Order from './Order.vue';  

export default {
  name: 'cashierOder',
  data() {
    return {
      selectedFood: [],
    }
  },
  methods: {
    handleSelectTable(val) {
      console.log(val);
    },
    handleSelectFood(val) {
      let index = this.isFoodSelected(val);
      if ( index === null) {
        val.amount = 1;
        this.$store.dispatch('order/addFood', val);
      } else {
        this.$store.dispatch('order/updateFood', index);
      }
    },
    isFoodSelected(val) {
      let i = null;
      this.$store.state.order.orderFoods.forEach((value, index) => {
        if (val.id === value.id) {
          i = index;
        }
      })
      return i;
    }
  },
  components: {
    Table,
    Food,
    Order
  }
}
</script>