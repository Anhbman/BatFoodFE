<template>
    <el-row>
			<el-col v-for="item in tables" :key="item.id" span="4">
				<font-awesome-icon icon="fa-solid fa-table-cells-large" />
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
		}
	}
}
</script>