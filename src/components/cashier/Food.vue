<template>
  <el-row :gutter="40">
    <el-col :span="8" v-for="item in foods" :key="item.id">
      <el-card>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>{{ item.name }}</span>
        </div>
      </el-card>
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
    }
  },
  created() {
    this.getFoods();
  }
}
</script>

<style scoped>
  
</style>