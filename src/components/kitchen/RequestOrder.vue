<template>
  <div class="container">
    <el-row>
    <el-collapse  v-model="activeNames">
      <el-collapse-item v-for="item in foods" :key="item.id" :title="item.table.name" :name="item.table.name">
        <template slot="title">
          <span class="kitchen-title">{{ item.table.name }}: </span> <span>{{ getTotalAmount(item) }}</span>
        </template>
        <el-table
          :data="item.orderFoods"
          style="width: 100%"
          :show-header="false">
          <el-table-column
            prop="food.name">
          </el-table-column>
          <el-table-column
            prop="amount">
          </el-table-column>
          <el-table-column>
            <template v-slot="scope">
              <div class="kitchen-btn">
                 <button  @click="handleClickFood(scope.row)" class="kitchen-btn-item">
                <font-awesome-icon icon="fa-solid fa-angle-right" />
                </button>
                <button  @click="handleClickAllFood(scope.row)" class="kitchen-btn-item">
                  <font-awesome-icon icon="fa-solid fa-angles-right" />
                </button>
              </div>
              <!-- <font-awesome-icon icon="fa-solid fa-angle-right" @click="handleClickFood(scope.row)" /> -->
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-row>
  </div>
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
        })
        .catch(error => {
          console.log(error);
        })
    },
    getTotalAmount(item) {
      let total = item.orderFoods.reduce((total, currentVal) => {
        return total + currentVal.amount;
      }, 0)
      return total;
    },
    handleClickFood(val) {
      console.log(val);
      orderService.responseFood(val.id)
        .then(response => {
          console.log(1, response.data);
          this.getFoods();
        })
        .catch(error => {
          console.log(error);
        })
    },
    handleClickAllFood(val) {
      console.log(val);
    }
  },
  computed: {
  },
  created() {
    this.getFoods();
  }
}
</script>

<style>

.kitchen-title {
  font-size: 1.5rem;
}

.kitchen-btn {
  display: flex;
  justify-content: space-evenly;
}

.kitchen-btn-item {
  border-radius: 5px;
  width: 20%;
  background-color: white;
  border: 1px solid #f4557e;
  color: #f4557e;
}

.kitchen-btn-item:hover {
  background-color: #f4557e;
  border: 1px solid white;
  color: white;
}

</style>