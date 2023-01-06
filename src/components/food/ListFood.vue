<template>
  <div>
    <!-- <div v-for="food in foods" :key="food.id">
      <card-food :food="food"></card-food>
    </div> -->
    <el-row>
    <div v-for="food in foods" :key="food.id">
      <el-col span="6">
        <card-food :food="food"></card-food>
      </el-col>
    </div>
    </el-row>
  </div>
</template>

<script>
import CardFood from './CardFood.vue';
import foodService from '@/services/food.service';    
export default {
  components: { CardFood },
  data() {
    return {
      foods: null
    }
  },
  methods: {
    getAllFood() {
      foodService.getAll()
        .then(response => {
          this.foods = response.data;
          console.log(this.foods);
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  created() {
    this.getAllFood();
  }
}
</script>

