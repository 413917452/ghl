<template>
	<div class="goodslist">
		<router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/index/goodsinfo/' + item.id" tag="div">
			<img :src="item.img_url" alt="图片加载失败啦!">
			<h1 class="item-title">{{ item.title }}</h1>
			<div class="info">
				<p class="pric">
					<span class="now">¥ {{ item.sell_price }}</span>
					<span class="old">¥ {{ item.market_price }}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{ item.stock_quantity }}件</span>
				</p>
			</div>
		</router-link>
		<mt-button type="danger" size="large" @click="GetMore">加载更多</mt-button>
	</div>
</template>

<script>
	import {
		Toast
	} from "mint-ui"
	export default {
		data() {
			return {
				goodslist: [],
				pageindex: 1
			}
		},
		created() {
			this.getgoodsList()
			this.GetMore()
		},
		methods: {
			getgoodsList() {
				this.$http.get("http://www.liulongbin.top:3005/api/getgoods?pageindex=" + this.pageindex)
					.then(result => {
						if (result.body.status === 0) {
							this.goodslist = this.goodslist.concat(result.body.message);
							if (this.goodslist.length === this.goodslist.concat(result.body.message).length) {
								Toast({
									message: "已经是最后一页啦",
									position: "middle",
									duration: 1000
								})
							}
						} else {
							Toast ('失败啦'
							)
								
						}
					})
			},
			GetMore() {
				this.pageindex++;
				this.getgoodsList();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goodslist{
		display: flex;
		justify-content: space-between;
		padding: 7px;
		flex-wrap: wrap;
	}
	.goods-item{
		width: 49%;
		border: 1px solid #CCCCCC;
		box-shadow:0 0 8px #CCCCCC;
		border-radius:5px;
		margin: 5px 0px;
		padding:0px;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		min-height: 400px;
		
		img{
			width: 100%;
			max-height: 300px;
		}
		.item-title{
			font-size: 20px;
		}
	}
	p{
		margin: 0px;
		padding: 5px;
	}
	.now{
		color: red;
		font-size: 16px;
	}
	.old{
		text-decoration: line-through;
		margin-left: 15px;
		font-size: 14px;
		
	}
	.info{
		background-color: #eee;
	}
	.sell{
	    display: flex;
	    justify-content: space-between;
	}
</style>
