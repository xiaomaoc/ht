<template>
	<div class="users">
		<el-row class="inputs">
		  <el-col :span="6"><div class="grid-content bg-purple">
		  	<div class="demo-input-suffix">
			  登录名&nbsp;&nbsp;
			  <el-input
			    placeholder="请输入"
			    v-model="input21"
			    class="input1">
			  </el-input>
			</div>
		  	
		  </div></el-col>
		  
		  
		  
		  
		  <el-col :span="6"><div class="grid-content bg-purple-light">
		  	<div class="demo-input-suffix">
			  手机&nbsp;&nbsp;
			  <el-input
			    placeholder="请输入"
			    v-model="input21"
			    class="input1">
			  </el-input>
			</div>
		  </div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple">
		  	<div class="demo-input-suffix">
			  邮箱&nbsp;&nbsp;
			  <el-input
			    placeholder="请输入"
			    v-model="input21"
			    class="input1">
			  </el-input>
			</div>
		  </div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light">
		  	角色&nbsp;&nbsp;
		  	<el-select v-model="value8" filterable placeholder="管理者">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
  			</el-select>
		  </div></el-col>
		</el-row>
		
		<el-row class="btn">
		  <el-button class="btn-delete">删除</el-button>
		  <el-button class="btn-add">添加</el-button>
		</el-row>
		<el-table
	      ref="multipleTable"
		    :data="tableData"
		    tooltip-effect="dark"
		    style="width: 100%">
		    <el-table-column
		      type="selection"
		      width="56">
		    </el-table-column>
	      <el-table-column
		      prop="id"
		      label="ID"
		      width="180"
		      text-align="center">
		  </el-table-column>
		  <el-table-column
	        prop="username"
	        label="登录名">
	      </el-table-column>
	      <el-table-column
	        prop="phone"
	        label="手机">
	      </el-table-column>
	      <el-table-column
	        prop="email"
	        label="邮箱">
	      </el-table-column>
	      <el-table-column
	        prop="role"
	        label="角色">
	      </el-table-column>
	      <el-table-column
	        prop="dateline"
	        label="加入时间">
	      </el-table-column>
	      <el-table-column
	        prop="status"
	        label="审核状态">
	      </el-table-column>
	      <el-table-column label="操作">
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
  				input21: '',
  				input10: '',
  				tableData:[{
  					checked:'true',
  					id:'1001',
  					username:'admin',
  					phone:'11111111111',
  					email:'111@qq.com',
  					role:'超级管理员',
  					dateline:'20150217',
  					status:'未审核'
  					
  					
  					
  					
  					
  				}],
  				 options: [{
			          value: '选项1',
			          label: '超级管理者'
			        }],
  				 multipleSelection: [],
  				 value8: ''
  			}
  		},
  		 methods: {
	      toggleSelection(rows) {
	        if (rows) {
	          rows.forEach(row => {
	            this.$refs.multipleTable.toggleRowSelection(row);
	          });
	        } else {
	          this.$refs.multipleTable.clearSelection();
	        }
	      },
	      handleSelectionChange(val) {
	        this.multipleSelection = val;
	      }
	    },
	     methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
     
  }
</script>

<style>
	.users{width:1380px;padding:18px;}
	.inputs{padding: 20px 0 30px 0;border-bottom: 1px solid #ccc;}
	.btn{float:left;padding: 15px 0;}
	.btn-delete,.btn-add{width: 100px;height:50px;background: #42B983;color: #fff;font-size: 16px;}	
	.cell{text-align: center;}
	.input1{width:200px;}
	
	
	
	
</style>