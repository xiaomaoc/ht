<template>
	<div class="modifydata">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			
			<el-form-item label="我的角色" prop="region">
			    <el-select v-model="ruleForm.region" placeholder="超级管理员">
				    <el-option label="超级管理员" value="shanghai"></el-option>
				    <el-option label="普通管理员" value="beijing"></el-option>
			    </el-select>
		  	</el-form-item>
			<el-form-item label="用户名" prop="name">
		    	<el-input v-model="ruleForm.name" placeholder="xianxin"></el-input>
			</el-form-item>
			
			<el-form-item label="用户名" prop="name">
		    	<el-input v-model="ruleForm.name" placeholder="贤心"></el-input>
			</el-form-item>
			
			<el-form-item label="性别" prop="resource">
			    <el-radio-group v-model="ruleForm.resource">
			      <el-radio label="男"></el-radio>
			      <el-radio label="女"></el-radio>
			    </el-radio-group>
		  	</el-form-item>
		  	
		  	<el-form-item label="头像" prop="name">
		    	<el-input v-model="ruleForm.name" ></el-input>
			</el-form-item>
		  	
		  	
		  	<el-form-item label="手机" prop="name">
		    	<el-input v-model="ruleForm.name" ></el-input>
			</el-form-item>
			  	
		
		    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
		    	<el-form-item
				    prop="email"
				    label="邮箱"
				    :rules="[
				      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
				      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
				    ]"
				  >
				    <el-input v-model="dynamicValidateForm.email"></el-input>
				  </el-form-item>
		    </el-form>	
		
		  	
			<el-form-item label="备注" prop="desc">
			   <el-input type="textarea" v-model="ruleForm.desc" class="beizhu"></el-input>
			</el-form-item>
		  	<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
			    <el-button @click="resetForm('ruleForm')">重新填写</el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ruleForm: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        dynamicValidateForm: {
		          domains: [{
		            value: ''
		          }],
		          email: ''
		        },
		        rules: {
			          name: [
			            { required: true, message: '请输入活动名称', trigger: 'blur' },
			            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
			          ],
			          region: [
			            { required: true, message: '请选择活动区域', trigger: 'change' }
			          ],
			          date1: [
			            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
			          ],
			          date2: [
			            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
			          ],
			          type: [
			            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
			          ],
			          resource: [
			            { required: true, message: '请选择活动资源', trigger: 'change' }
			          ],
			          desc: [
			            { required: true, message: '请填写活动形式', trigger: 'blur' }
			          ]
		        }
			};
		},
		
		methods: {
	      	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
			        }
		        });
			        
	      	},
	      	resetForm(formName) {
    			this.$refs[formName].resetFields();
      		},
	      	removeDomain(item) {
		        var index = this.dynamicValidateForm.domains.indexOf(item)
		        if (index !== -1) {
		          	this.dynamicValidateForm.domains.splice(index, 1)
		        }
	      	},
	      	addDomain() {
		        this.dynamicValidateForm.domains.push({
			          value: '',
			          key: Date.now()
		        });
	      	}
	      
	      
	    }
		
	}
</script>

<style>
textarea{
	width:500px;
	height:100px;
}
.beizhu{
	width:500px;
}
</style>