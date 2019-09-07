<template>
	<div>
		<!-- api不好看 -->
		<!-- <mt-swipe-item v-for="item in lunbotuList" :key='item.url'>
			
				<img :src="item.img" alt="" >
			</mt-swipe-item> -->
		<mt-swipe :auto="4000">
			<mt-swipe-item><img src="../../images/indexdwm.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="../../images/indexkdy.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="../../images/indexzjd.jpg"></mt-swipe-item>
		</mt-swipe>
		<!-- 导入九宫格 -->
		<div class="mui-content">
				        <ul class="mui-table-view mui-grid-view mui-grid-9">
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				                    <img src="../../images/menu1.png">
				                    <div class="mui-media-body">新闻资讯</div></a></li>
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
									<img src="../../images/menu2.png" />
				                    <div class="mui-media-body">精选图片</div></a></li>
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				                    <img src="../../images/menu3.png" />
				                    <div class="mui-media-body">精选商品</div></a></li>
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				                    <img src="../../images/menu4.png" />
				                    <div class="mui-media-body">留言反馈</div></a></li>
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				                    <img src="../../images/menu5.png" />
				                    <div class="mui-media-body">视频专区</div></a></li>
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				                    <img src="../../images/menu6.png" />
				                    <div class="mui-media-body">联系我们</div></a></li>
				            
				        </ul> 
				</div>



	</div>

</template>
<script>
	import {
		Toast
	} from 'mint-ui';
	export default {
		data() {
			return {
				// 	lunbotuList: []
			}
		},
		created() {
			// this.getLunbotu();

		},
		methods: {
			// getLunbotu() {
			// 	this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(results => {
			// 		 console.log(results.body);
			// 		if (results.body.status === 0) {
			// 			this.lunbotuList = results.body.message;
			// 			Toast('成功了')
			// 			
			// 		} else {
			// 			Toast('失败了')
			// 		}
			// });
			// }

		}
	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 180px;

		.mint-swipe-item {
			&:nth-child(1) {
				background-color: pink;
			}

			&:nth-child(2) {
				background-color: skyblue;
			}

			&:nth-child(3) {
				background-color: cyan;
			}

			img {
				height: 100%;
				weight: 100%;
			}
		}
	}
	.mui-grid-view.mui-grid-9 {
	
	    background-color: #fff;
	
	    border: none;
		img{
			height: 60px;
			weight: 60px;
		}
	}
	.mui-media-body{
		font-size: 15px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
	    border:none;
	
	}
</style>
