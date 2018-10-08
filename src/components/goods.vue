<template>
	<div class="goods">
		
		
		
		
		
		
		
		<el-row class="btn">
		  <el-button class="btn-add">添加</el-button>
		</el-row>
		
		
		<el-table
	      :data="tableData"
      		style="width:100%">
		   <el-table-column
		      prop="number"
		      label=""
		      width="80">
		  </el-table-column>
		  <el-table-column
		      prop="id"
		      label="ID"
		      width="150">
		  </el-table-column>
		  <el-table-column
	        prop="sort"
	        label="分类名"
	        >
	      </el-table-column>
	      <el-table-column label="操作"
	      	>
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
		          type="text" size="small">移除</el-button>
		      </template>
		    </el-table-column>
		  
		    
		</el-table>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableData:[{
					number:'1',
					id:'001',
					sort:'美食'
				}],
				
			}
		},
		methods:{
			deleteRow(index, rows) {
		        rows.splice(index, 1);
		     },
		     handleEdit(index, row) {
        		console.log(index, row);
      },
		}
	}
</script>

<style>
	.goods{width:1380px;padding:19px;border: 1px solid black;}
	.cell{text-align:left;}
	.btn{float:left;padding: 15px 0;}
	.btn-add{width: 100px;height:50px;background: #42B983;color: #fff;font-size: 16px;}
	.el-table{border: 1px solid #ccc;border-collapse: collapse;}
	th{font-size: 16px;color: #333;}
	th,td{border: 1px solid #ccc;}
	
</style>