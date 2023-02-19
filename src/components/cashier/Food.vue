<template>
  <el-row :gutter="20" class="crollbar">
      <el-col :span="6" v-for="item in foods" :key="item.id">
        <div @click="selectFood(item)">
          <el-card>
            <img :src="'http://localhost:8080/image/'+ item.image" class="image">
            <div style="padding: 14px;">
              <span>{{ item.name }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    <!-- <el-col :span="6" v-for="item in foods" :key="item.id">
      <div @click="selectFood(item)">
        <el-card>
          <img :src="'http://localhost:8080/image/'+ item.image" class="image">
          <div style="padding: 14px;">
            <span>{{ item.name }}</span>
          </div>
        </el-card>
      </div>
    </el-col> -->
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

.image {
    width: 100%;
    display: block;
  }

.crollbar {
  overflow-y: auto;
  height: 100vh;
}
  
</style>