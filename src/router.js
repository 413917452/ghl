import VueRouter from 'vue-router'
import homeContainer from './components/tabber/homeContainer.vue'
import indexContainer from './components/tabber/indexContainer.vue'
import searchContainer from './components/tabber/searchContainer.vue'
import shopcarContainer from './components/tabber/shopcarContainer.vue'
import newsList from './components/news/NewsList.vue'
import newsinfo from './components/news/Newsinfo.vue'
import photoList from './components/photo/photoList.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsDesc from './components/goods/goodsDesc.vue'
import goodsComment from './components/goods/goodsComment.vue'

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
		},
		{
			path: '/index/NewsList',
			component: newsList
		},
		{
			path: '/index/Newsinfo/:id',
			component: newsinfo
		},
		{
			path: '/index/photoList',
			component: photoList
		},
		{
			path: '/index/photoinfo/:id',
			component: photoinfo
		},
		{
			path: '/index/goodsList',
			component: goodsList
		},
		{
			path: '/index/goodsinfo/:id',
			component: goodsinfo
		},
		//编程式跳转
		{
			path: '/goodslist/goodsdesc/:id',
			component: goodsDesc,
			name: 'goodsdesc'
		},
		{
			path: '/goodslist/goodscomment/:id',
			component: goodsComment,
			name: 'goodscomment'
		}
	],
	linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router
