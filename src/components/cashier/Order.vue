<template>
  <div :key="index"  class="full-display order">
    <h1>Món ăn</h1>
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
            <font-awesome-icon icon="fa-regular fa-trash-can" class="note-item"/>
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
        <el-button type="primary" class="order-request-btn-item" @click="onSubmit">
          <font-awesome-icon icon="fa-solid fa-bell" />
          Thông báo
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import orderService from '@/services/order.service';

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
    },
    table: {
      type: Number,
      default: () => null
    }
  },
  methods: {
    changeIndex() {
      this.index++;
    },
    handleChangeAmount(index, val) {
      this.$emit("updateAmount", {index, val});
    },
    onSubmit() {
      // console.log(this.foods[0]);
      console.log(11, this.table);
      let order = {
        orderFood: [],
        table: {
          id: null
        }
      };
      order.orderFood = this.foods.map((item) => {
        return {
          food: {
            id: item.id},
          amount: item.amount
        }
      })
      order.table.id = this.table;
      console.log(order);
      orderService.create(order)
        .then(data => {
          console.log(data);
          this.$swal({
            title: 'Thành công!',
            text: 'Order thành công!!!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        })
        .catch(error => {
          console.log(error);
          this.$swal({
            title: 'Thất bại!',
            position: 'top-end',
            text: 'Order thất bại!!!',
            icon: 'error',
            // confirmButtonText: 'Cool',
            showConfirmButton: false,
            timer: 1500
          })
        })
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