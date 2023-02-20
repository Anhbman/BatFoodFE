<template>
    <el-row class="full-display">
      <el-col :span="12"  class="full-display">
        <el-tabs type="border-card"  class="full-display">
          <el-tab-pane label="Bàn"  class="full-display">
            <Table v-on:selectTable="handleSelectTable"></Table>
            <!-- <Table v-on:selectTable="handleSelectTable"></Table> -->
          </el-tab-pane>
          <el-tab-pane label="Thực đơn"  class="full-display">
            <Food v-on:selectFood="handleSelectFood"></Food>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="12" class="full-display">
          <Order :table="table" :foods="selectedFood" v-on:updateAmount="handleUpdateAmount"></Order>
        <!-- <Order :foods="selectedFood" v-on:updateAmount="handleUpdateAmount"></Order> -->
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
      table: null
    }
  },
  methods: {
    handleSelectTable(val) {
      console.log(val);
      this.table = val;
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

<style>

.full-display {
  /* height: 100%s; */
  height: 100%;
}
</style>