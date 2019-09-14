<template>
	<div>
		<div id="slider" class="mui-slider ">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id"  @click="GetId(item.id)">{{ item.title }}</a>
				</div>
			</div>
		
		</div>
		<ul class="photolist">
			<router-link v-for="item in list" :key="item.id" :to="'/index/photoinfo/'+ item.id" tag="li">
				<img v-lazy="item.img_url" />
				<div class="info">
					<h1 class="info-title">{{ item.title }}</h1>
					<div class="info-body">{{ item.zhaiyao }}</div>
				</div>
			</router-link>
		
		</ul>
	</div>
	
</template>

<script>
	import mui from "../../lib/mui/js/mui.js"
	import {Toast} from "mint-ui"
	export default {
		data() {
			return {
				cates: [],
				list: []
			};
		},
		created() {
			this.getAllList()
			this.GetId(0)
		},
		mounted() {
			mui(".mui-scroll-wrapper").scroll({
				deceleration: 0.0005
			});
		},
		methods: {
			getAllList() {
				this.$http.get("http://www.liulongbin.top:3005/api/getimgcategory")
					.then(result => {
						if (result.data.status === 0) {
							result.data.message.unshift({
								title: '全部',
								id: 0
							});
							this.cates = result.data.message;
						}
					})
			},
			GetId(id) {

				//根据分类Id 获取图片列表
				this.$http.get("http://www.liulongbin.top:3005/api/getimages/" + id)
					.then(res => {
						if (res.data.status === 0) {
							this.list = res.data.message;
							if (res.data.message.length === 0)
								Toast({
									message: "对不起,暂无图片列表",
									position: "middle",
									duration: 500
								});
						}
					});
			}
		}
	}
</script>

<style lang='scss' scoped>
	* {
		touch-action: pan-y;
	}
	
	.photolist {
		list-style: none;
		margin: 0;
		padding: 10px;
		padding-bottom: 10px;
		li{
			background-color: #ccc;
			text-align: center;
			margin-bottom: 10px;
			box-shadow: 0 0 9px #999;
			position: relative;
			img[lazy='loading']{
				  width: 40px;
				  height: 300px;
				  margin: auto;
			}
		}
	}
	img {
		  width: 100%;
		  height: 100%;
		  vertical-align: middle;
		}
		.info {
		  text-align: left;
		  color: #fff;
		  position: absolute;
		  bottom: 0;
		  background-color: rgba(0,0,0,0.5);
		  max-height: 84px;
		  .info-title {
		  font-size: 14px;
		  }
		  .info-body {
		    font-size: 13px;
		  }
		}
</style>
