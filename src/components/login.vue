<template>
	<div class="login">
		<el-container>
		  <el-header></el-header>
		  <el-main>
		  	<img src="../assets/logo.png" alt="" />
		  	<h2>xxx后台管理系统</h2>
		  	<div class="username">
			  <el-input placeholder="请输入用户名" v-model="input3" class="input_t">
			    <template slot="prepend"><i class="el-icon-info"></i></template>
			  </el-input>
			</div>
			<div class="password">
			  <el-input placeholder="请输入密码" v-model="input3" class="input_t">
			    <template slot="prepend"><i class="el-icon-tickets"></i></template>
			  </el-input>
			</div>
			<div class="button">
				<el-row>
					<el-button type="primary" class="btn">登录</el-button>
				</el-row>
			</div>
			<div class="tip">
				<input type="text" class="check"/>
				<label for="" class="jizhu">记住密码</label>
				<a href="#">忘记密码？</a>
			</div>
		  </el-main>
		</el-container>
	</div>
</template>

<script>
    export default{
        data() {
		    return {
		      
		    }
		},
        methods:{
            
        }
    }
</script>

<style>
	img{
		width:100px;
	}
	 .el-header{
    text-align: center;
    line-height: 60px;
  }
   .el-main {
    height:577px;
    width:735px;
    border:1px solid #ccc;
    background-color:;
    text-align:center;
    box-sizing:border-box;
    margin:0 auto;
  }
   .input_t{
    width: 290px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .username,.password{
  	margin-bottom:50px;
  }
  .button{
  	margin-bottom:40px;
  }
  .btn{
  	width: 290px;
  }
  .tip{
  	width: 290px;
  	margin-left:200px;
  	vertical-align:bottom;
  }
  .tip a{
  	float:right;
  }
  .tip .check{
  	width:12px;
  	height:12px;
  	float:left;
  	margin-right:12px;
  }
  .tip .jizhu{
  	float:left;
  }
  
  
</style>