<template>
    <el-row>
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane label="Bàn">
            <Table v-on:selectTable="handleSelectTable"></Table>
          </el-tab-pane>
          <el-tab-pane label="Thực đơn">
            <Food></Food>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
</template>

<script>

import Table from './Table.vue';
import Food from './Food.vue';

export default {
  name: 'cashierOder',
  methods: {
    handleSelectTable(val) {
      console.log(val);
    }
  },
  components: {
    Table,
    Food
  }
}
</script>