// 入口文件
console.log('OK')
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入字体图标样式
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
//导入mintui组件样式
import {Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//路由文件
import router from "./router.js"
//组件文件
import app from './App.vue'


var vm = new Vue({
	el:'#app',
	data:{},
	render: c => c(app),
	router//挂载路由
})