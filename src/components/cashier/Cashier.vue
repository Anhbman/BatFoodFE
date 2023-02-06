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
        <Order :foods="selectedFood" v-on:updateAmount="handleUpdateAmount"></Order>
      </el-col>
    </el-row>
</template>

<script>

import Table from './Table.vue';
import Food from './Food.vue';
import Order from './Order.vue';
import Vue from 'vue'  

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
        Vue.set(this.selectedFood, this.selectedFood.length, val)
      } else {
        let val = this.selectedFood[index];
        val.amount++;
        Vue.set(this.selectedFood, index, val)
      }
    },
    isFoodSelected(val) {
      let i = null;
      this.selectedFood.forEach((value, index) => {
        if (val.id === value.id) {
          i = index;
        }
      })
      return i;
    },
    handleUpdateAmount({index, val}) {
      Vue.set(this.selectedFood, index, val)
    }
  },
  components: {
    Table,
    Food,
    Order
  }
}
</script>