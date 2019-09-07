import VueRouter from 'vue-router'
import homeContainer from './components/tabber/homeContainer.vue'
import indexContainer from './components/tabber/indexContainer.vue'
import searchContainer from './components/tabber/searchContainer.vue'
import shopcarContainer from './components/tabber/shopcarContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
	routes: [ //配置路由规则
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/home',
			component: homeContainer
		},
		{
			path: '/search',
			component: searchContainer
		},
		{
			path: '/index',
			component: indexContainer
		},
		{
			path: '/shopcar',
			component: shopcarContainer
		}
	],
	linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router
