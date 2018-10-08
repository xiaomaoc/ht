import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/App';
import index from '@/components/index';
import login from '@/components/login';
import manage from '@/components/manage';//需要几个页面，引几个
import users from '@/components/users';
import goods from '@/components/goods';
import goodslist from '@/components/goodslist';
import modifypwd from '@/components/modifypwd';
import modifydata from '@/components/modifydata';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '管理系统',
      component: HelloWorld,
//    children:[
//    	{
//    		path:'/login',
//					name:'登录',
//					component:index
//    	}
//    ]
    },
    
    //间隔
    {
		path:'/index',
		name:'登录',
		component:index
	},
	{
		path:'/login',
		name:'login',
		component:login
	},
	{
		path:'/manage',
		name:'商品管理',
		component:manage
	},
	{
		path:'/goods',
		name:'商品分类',
		component:goods
	},
	{
		path:'/goodslist',
		name:'商品列表',
		component:goodslist
	},
	{
		path:'/users',
		name:'用户管理',
		component:users
	},
	{
		path:'/modifypwd',
		name:'修改密码',
		component:modifypwd
	},
	{
		path:'/modifydata',
		name:'修改信息',
		component:modifydata
	}
	
  ]
})

