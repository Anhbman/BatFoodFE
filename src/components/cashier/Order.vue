<template>
  <div :key="index">
    <h1>Món ăn</h1>
    <!-- {{ foods }} -->
    <!-- <el-row v-for="(item) in getFoods" :key="item.id">
      {{ item.name }} - {{ item.amount }}
    </el-row> -->
    <el-table
      :data="getFoods"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Tên"
        width="100">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="Số lượng"
        >
        <template v-slot="scope">
          <el-input-number v-model="scope.row.amount" @change="handleChangeAmount(scope.$index, scope.row)" :min="1" :max="10"></el-input-number>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OrderCashier',
  data() {
    return {
      orderFood: [],
      index: 0
    }
  },
  props: {
    foods: {
      type: Array,
      default: () => null
    }
  },
  methods: {
    changeIndex() {
      this.index++;
    },
    handleChangeAmount(index, val) {
      console.log(index, val);
    }
  },
  computed: {
    getFoods() {
      this.changeIndex();
      return this.foods;
    }
  }
}
</script>