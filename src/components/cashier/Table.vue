<template>
    <el-row>
			<h3>Phòng bàn</h3>
			<el-col v-for="item in tables" :key="item.id" :span="4" >
				<!-- <font-awesome-icon icon="fa-solid fa-table-cells-large"/> -->
				<!-- <svg xmlns="http://www.w3.org/2000/svg"> -->
					<div @click="clickSelectTable(item.id)" class="table-item">
						<img src="../../../public/static/icon/table.png"  />
						{{ item.name }}
					</div>
			</el-col>
    </el-row>
</template>

<script>

import tableService from '@/services/table.service';

export default {
	name: 'SelectTable',
	data() {
		return {
			tables: null,
		}
	},
	methods: {
		getTables() {
			tableService.getAll()
				.then(response => {
					this.tables = response.data;
				})
				.catch(error => {
					console.log(error);
				})
		},
		clickSelectTable(val) {
			this.$emit('selectTable', val);
		}
	},
	created() {
		this.getTables();
	}
}
</script>

<style scoped>
.table-item {
	display: grid;
	justify-items: center;
	align-content: center;
}

.table-selected {
	background: #c2e0ff;
}

.table-actived {
	background: #0066cc;
}

</style>