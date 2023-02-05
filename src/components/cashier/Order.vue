<template>
  <div>
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
        width="100">
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
    }
  },
  props: {
    foods: {
      type: Array,
      default: () => null
    }
  },
  methods: {
  },
  computed: {
    getFoods() {
      return this.$store.state.order.orderFoods;
    }
  },
  watch: {
    foods() {
      console.log('Food');
      this.addFood();
    }
  }
}
</script>