<template>
  <el-table
    :data="tables"
    stripe
    style="width: 100%"
    :cell-class-name="classStatus">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Tên"
      width="180">
    </el-table-column>
    <el-table-column
      prop="slot"
      label="Chỗ ngồi"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Trạng thái">
      <template slot-scope="scope">
        <span>
          {{ getStatus(scope.row.status)}}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

import tableService from '@/services/table.service';

export default {
  name: 'tableItem',
  data() {
    return {
      tables: null
    }
  },
  methods: {
    getTables() {
      tableService.getAll()
        .then(response => {
          this.tables = response.data;
          // this.tables = response.data.map((item => {
          //   return {
          //     name: item.name,
          //     slot: item.slot,
          //     status: item.status == 1 ? 'Hoạt động' : 'Tạm dừng'
          //   }
          // }))
        })
        .catch(error => {
          console.log(error);
        })
    },
    classStatus({ row, column }) {
      if (column.property === 'status') {
        const val = row[column.property];
        if (val == 1) {
          return 'text-active';
        } else {
          return 'text-notactive';
        }
      }
    },
    indexMethod(index) {
      return index + 1;
    },
    getStatus(data) {
      console.log(1, data);
      return data ? 'Hoạt động' : 'Không hoạt động'
    }
  },
  created() {
    this.getTables();
  }
}
</script>

<style>
  .text-active {
    color: green;
  }

  .text-notactive {
    color: red;
  }
</style>