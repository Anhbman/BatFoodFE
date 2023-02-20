<template>
  <el-row :gutter="20" class="crollbar">
      <el-col :span="6" v-for="item in foods" :key="item.id">
        <div @click="selectFood(item)">
          <el-card class="card" :body-style="{ padding: '0px' }">
            <img :src="'http://localhost:8080/image/'+ item.image" class="image card-img">
            <div style="padding: 14px;" class="card-body">
              <!-- <span>{{ item.name }}</span> -->
              <p class="card-title" slot="header">{{item.name}}</p>
              <p class="card-text">{{ item.price | toCurrency }}</p>
            </div>
          </el-card>
        </div>
      </el-col>
  </el-row>
</template>

<script>

import foodService from '@/services/food.service';

export default {
  name: 'cashierFood',
  data() {
    return {
      foods: null
    }
  },
  methods: {
    getFoods() {
      foodService.getAll()
        .then(response => {
          this.foods = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    selectFood(val) {
      this.$emit('selectFood', val)
    }
  },
  created() {
    this.getFoods();
  }
}
</script>

<style scoped>

.crollbar {
  /* overflow-y: auto; */
  height: 90vh;
  /* height: 100%; */
  /* overflow: hidden; */
  overflow: scroll;
}

.card {
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.card-img {
  width: 100%;
  height: 100px;
  object-fit: contain; 
  display: block;
}

.card-title {
  /* height: 80px; */
  overflow-y: auto;
  font-weight: bold;
}
  
</style>