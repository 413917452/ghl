// 入口文件
console.log('OK')
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)



//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
//导入字体图标样式
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
//导入mintui组件样式
// import {Header, Swipe, SwipeItem,button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(button.name,button);
// Vue.use(Lazyload);
import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.css'
//路由文件
import router from "./router.js"
//组件文件
import app from './App.vue'
//导入格式化时间插件
import moment from 'moment'
Vue.filter('time', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {

	return moment(dataStr).format(pattern)

})
//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({

	state: {
		car: JSON.parse(localStorage.getItem('car') || '[]')
	},
	mutations: {
		AddToCar(state, goodsinfo) {
			var flag = false
			state.car.some(item => {
				if (item.id === goodsinfo.id) {
					item.count += parseInt(goodsinfo.count)
					flag = true
					return true
				}
			})
			if (!flag) {
				state.car.push(goodsinfo)
			}
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		Update(state, goodsinfo) {
			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					item.count =parseInt(goodsinfo.count) 
					return true
				}
			})
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		remove(state, id) {
			state.car.some((item, i) => {
				if (item.id == id) {
					state.car.splice(i, 1)
					return true;
				}
			})
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		Selected(state, info) {
			state.car.some(item => {
				if (item.id == info.id) {
					item.selected = info.selected
				}
			})
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateGoodsSelected(state, info) {
			state.car.some(item => {
				if (item.id == info.id) {
					item.selected = info.selected
				}
			})
			// 把最新的 所有购物车商品的状态保存到 store 中去
			localStorage.setItem('car', JSON.stringify(state.car))
		}
	},
	getters: {
		getAllcount(state) {
			var c = 0
			state.car.forEach(item => {
				c += item.count;
			});
			return c;
		},
		getcount(state) { //获取单个商品件数
			var list = {};
			state.car.forEach(item => {
				list[item.id] = item.count;
			})
			return list;
		},
		getGoodsSelected(state) { //获取商品开关
			var o = {}
			state.car.forEach(item => {
				o[item.id] = item.selected;
			})
			return o
		},
		getGoodsCountAndAmount(state) {
			var o = {
				count: 0, //勾选的数量
				amount: 0, //勾选的总价
			}
			state.car.forEach(item => {
				if (item.selected) {
					o.count += item.count;
					o.amount += item.price * item.count
				}
			})
			return o;
		},
	}
})


var vm = new Vue({
	el: '#app',
	data: {},
	render: c => c(app),
	router, //挂载路由
	store //挂载vuex.store
})
