<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    	<div class="top">
    		<el-row>
				  <el-col :span="3"><div class="grid-content top1">
				  	<img src="../assets/logo.png" alt="" />
				  </div></el-col>
				  
				  <el-col :span="9"><div class="grid-content top2">
				  	<h2>xxx后台管理系统</h2>
				  </div></el-col>
				  
				  <el-col :span="10"><div class="grid-content top3">
				  	<p>欢迎xxx登录xxx管理系统，在这你可以任意管理你的信息</p>
				  </div></el-col>
				  
				  <el-col :span="2"><div class="grid-content top4">
				  	<a href="#">退出</a>
				  </div></el-col>
				</el-row>
    	</div>
    	
    	
    	
    	
    	
    	<div class="bottom">
    		
    		
    		<el-container>
    			
    			
				  <el-aside width="200px">
				  	<div class="left">
		    			<el-row class="tac">
							  <el-col :span="24" class="myleft">
							    <el-menu
							      :default-active="activeIndex"
							      class="el-menu-vertical-demo"
							      mode="horizontal"
							      @select="handleSelect"
							      router
							      id="menuul">
							      <el-menu-item index="1">
							        <i class="el-icon-setting"></i>
							        <span slot="title">商品管理</span>
							      </el-menu-item>
							      <el-menu-item index="2">
							        <i class="el-icon-setting"></i>
							        <span slot="title">商品分类</span>
							      </el-menu-item>
							      <el-menu-item index="3" >
							        <i class="el-icon-setting"></i>
							        <span slot="title">商品列表</span>
							      </el-menu-item>
							      <el-menu-item index="4">
							        <i class="el-icon-setting"></i>
							        <span slot="title">用户管理</span>
							      </el-menu-item>
							      <el-menu-item index="5">
							        <i class="el-icon-setting"></i>
							        <span slot="title">修改密码</span>
							      </el-menu-item>
							      <el-menu-item index="6">
							        <i class="el-icon-setting"></i>
							        <span slot="title">资料修改</span>
							      </el-menu-item>
							      <el-menu-item index="7">
							        <i class="el-icon-setting"></i>
							        <span slot="title">交易管理</span>
							      </el-menu-item>
							      <el-menu-item index="8">
							        <i class="el-icon-setting"></i>
							        <span slot="title">订单列表</span>
							      </el-menu-item>
							    </el-menu>
							  </el-col>
							</el-row>
		    		</div>
				  </el-aside>
				  
				  
				  
				  <el-main id="el-main">
				  	<el-col :span="24" class="breadcrumb-container">
		          <strong class="title">{{$route.name}}</strong>
		          <el-breadcrumb separator="/" class="breadcrumb-inner">
		            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
		              {{ item.name }}
		            </el-breadcrumb-item>
		          </el-breadcrumb>
		        </el-col>
		        <!--<el-col :span="24">
		          <div style="margin-top:10px">
		          	//显示跳转的页面
		            <router-view></router-view>    
		          </div>
		       </el-col>-->
				  </el-main>
			</el-container>
    		
    		
    		
    		
    	</div>
    <!--<router-view/>-->
  </div>
</template>

<script>
	import Vue from 'vue';
  import Element from 'element-ui';
  Vue.use(Element);
  //单独引入样式
  import 'element-ui/lib/theme-chalk/index.css'; 

  
  
  
  
  
export default {
  name: 'App',
  data(){
  	return{
  		searchCriteria: '',
  	}
  },
  computed:{
  	activeIndex(){
        return this.$route.path.replace('/','')
      }
  },
  methods: {
  		handleIconClick(ev) {
        console.log(ev);
      },
      handleSelect(key, keyPath) { 
        switch(key){
          case '1':
            this.$router.push('/manage');
            break;
          case '2':
            this.$router.push('/sort');
            break;
        	case '3':
            this.$router.push('/manage');
            break;
          case '4':
            this.$router.push('/usermanage');
            break;
          case '5':
            this.$router.push('/modifypwd');
            break;
          case '6':
            this.$router.push('/modifydata');
            break;
          case '7':
            this.$router.push('/deal');
            break;
          case '8':
            this.$router.push('/login');
            break;
        }
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.top{
	height:100px;
	width:1580px;
	box-sizing:border-box;
	border:1px solid #ccc;
}
 .el-row {
    margin-bottom:0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    min-height: 98px;
  }
  .top1 img{
  	width:100px;
  	height:90px;
  }
  .top2 h2{
  	vertical-align: middle;
  }
  .top3,.top4{
  	vertical-align: bottom;
  }
  .bottom .el-container{
  	width:1580px;
  	height:583px;
  }
  #el-main{
  	width:1278px;
  	height:583px;
  }
#menuul{
	border-bottom:0px;
}
  .bottom .left{
  	width:200px;
  	height:583px;
  	/*display:inline-block;*/
  	float:left;
  	box-sizing:border-box;
  	border:1px solid #ccc;
  	margin:0;
  	
  }
    .bottom .right{
  	width:1278px;
  	height:583px;
  	/*display:inline-block;*/
  	float:left;
  	box-sizing:border-box;
  	border:1px solid #ccc;
  	margin:0;
  }
</style>
