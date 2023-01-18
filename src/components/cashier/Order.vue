<template>
    <el-row>
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane label="Bàn">
            <Table></Table>
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
  components: {
    Table,
    Food
  }
}
</script>