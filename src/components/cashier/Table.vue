<template>
    <el-row>
			<h3>Phòng bàn</h3>
			<el-radio-group v-model="radio1">
			<el-col v-for="item in tables" :key="item.id" :span="4" >
					<!-- <div @click="clickSelectTable(item.id)" class="table-item" :class="{ table_actived: item.active }">
						<img src="../../../public/static/icon/table.png"  />
						{{ item.name }}
					</div> -->
					
						<el-radio-button :label="item.name" class="table-item" :disabled="item.active">
							<div class="table-text">
								<img src="../../../public/static/icon/table.png"  />
								{{ item.name }}
							</div>
						</el-radio-button>
			</el-col>
		</el-radio-group>
    </el-row>
</template>

<script>

import tableService from '@/services/table.service';

export default {
	name: 'SelectTable',
	data() {
		return {
			tables: null,
			radio1: null
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

<style >
.table-item {
	display: grid;
	justify-items: center;
	align-content: center;
	padding: 10px;
  border-radius: 10px;
	margin: 10px;
	/* cursor: -webkit-grab; cursor: grab; */
}

.table_selected {
	background: #0066cc;
}

/* .table_actived {
	background: #c2e0ff;
} */

.el-radio-button__orig-radio:disabled+.el-radio-button__inner {
  background-color: #c2e0ff !important;
  /* border-color: #c2e0ff; */
}

.table-text {
	display: grid;
}

</style>