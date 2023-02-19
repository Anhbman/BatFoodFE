<template>
  <div :key="index"  class="full-display order">
    <h1>Món ăn</h1>
    <!-- {{ foods }} -->
    <!-- <el-row v-for="(item) in getFoods" :key="item.id">
      {{ item.name }} - {{ item.amount }}
    </el-row> -->
    <el-table
      :data="getFoods"
      style="width: 100%"
      height="80%"
      >
      <el-table-column
        prop="name"
        label="Tên">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Đơn giá">
        <template v-slot="scope">
          {{ scope.row.price | toCurrency }}
        </template>
      </el-table-column>
      <el-table-column
        prop="amount"
        label="Số lượng"
        >
        <template v-slot="scope">
          <div class="combo-text-number">
            <el-input-number size="mini" v-model="scope.row.amount" @change="handleChangeAmount(scope.$index, scope.row)" :min="1" :max="10"></el-input-number>
            <font-awesome-icon icon="fa-regular fa-note-sticky" class="note-item"/>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-row :gutter="20" class="order-request">
      <el-col :span="12" class="order-request-btn">
        <el-button type="success" class="order-request-btn-item" >
          <font-awesome-icon icon="fa-solid fa-dollar-sign" />
          Thanh toán
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" class="order-request-btn-item" >
          <font-awesome-icon icon="fa-solid fa-bell" />
          Thông báo
        </el-button>
      </el-col>
    </el-row>
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
      this.$emit("updateAmount", {index, val});
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

<style scoped>
.note-item {
  font-size: 25px;
}

.combo-text-number {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

/* .order {
  position: relative;
} */

.order-request {
  /* bottom: 15px; */
  /* position: absolute; */
  width: 100%;
  /* height: 20%; */
}

.order-request-btn-item {
  width: 90%;
  height: 50px;
}

.order-request-btn {
  text-align: center;
}
</style>