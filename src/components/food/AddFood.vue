<template>
  <div>
    <el-row>
      <el-col :offset="8" :span="8">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" id="add-blog" enctype="multipart/form-data">
      <el-form-item label="Tên món ăn" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off" name="name"></el-input>
      </el-form-item>
      <el-form-item label="Giá tiền" prop="price">
        <el-input type="text" v-model.number="ruleForm.price" autocomplete="off" name="price"></el-input>
      </el-form-item>
      <el-form-item label="Thể loại">
        <el-select v-model="selectedCategory" placeholder="Select">
          <el-option
            v-for="item in categories"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Ảnh">
       <input type="file" name="image"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>

import categoryService from '@/services/category.service';
import foodService from '@/services/food.service';

export default {
  data() {
    var checkPrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Hãy nhập giá tiền'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Hãy nhập số'));
        } else {
          callback();
        }
      }, 500);
    };
    return {
      categories: null,
      selectedCategory: null,
      ruleForm: {
        name: '',
        price: '',
        fileList: null,
      },
      rules: {
        price: [
          { validator: checkPrice, trigger: 'blur' },
          { required: true, message: 'Hãy nhập giá món ăn', trigger: 'blur'}
        ],
        name: [
          { required: true, message: 'Hãy nhập tên món ăn', trigger: 'blur' }
        ],
        category: [
          { required: true, message: 'Hãy chọn loại món ăn', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let form = document.getElementById('add-blog');
          let formData = new FormData(form);
          formData.append('category.id', this.selectedCategory);
          // console.log(this.selectedCategory);
          foodService.create(formData)
            .then(response => {
              console.log(response.data);
              alert('Thành công');
            })
            .catch(error => {
              console.log(error);
            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getAllCategories() {
      categoryService.getAll()
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  created() {
    this.getAllCategories();
  }
}
</script>