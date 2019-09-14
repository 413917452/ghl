<template>
	<div class="photoinfo">
		<h3>{{info.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{ info.add_time | time }}</span>
			<span>点击次数：{{ info.click }}</span>
		</p>
		<hr />

		<div class="thumbs">
			<vue-preview :slides="list" ></vue-preview>
		</div>
		<div class="content" v-html="info.content"></div>
		<!-- <comment :id=id> </comment> -->
		<comment-box :id="this.id"></comment-box>
	</div>
</template>

<script>
	import comment from '../subcomponents/comment.vue'
	import {
		Toast
	} from 'mint-ui'
	export default {
		data() {
			return {
				id: this.$route.params.id,
				info: [],
				list:[],

			}
		},
		created() {
			this.getinfo()
			this.getphoto()
		},

		methods: {
			getinfo() {
				this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/' + this.id)
					.then(result => {
						if (result.body.status === 0) {
							this.info = result.body.message[0]
						} else {
							Toast('详情获取失败')
						}

					})
			},
			getphoto() {
				this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id)
					.then(result => {
						if (result.body.status === 0) {
							result.data.message.forEach(item => {
								item.w = 600;
								item.h = 400;
								item.msrc = item.src;
							});
							this.list = result.data.message;
						}else{
							Toast('失败啦')
						}
					})
			},
		},
		components:{
		      'comment-box':comment
		    },
	}
</script>

<style lang="scss" scoped>
	.photoinfo {
		padding: 5px;

		h3 {
			color: #26a2ff;
			text-align: center;
			margin: 15px 0;
		}

		.subtitle {
			display: flex;
			justify-content: space-between;
			font-size: 15 px;
		}

		.content {
			font-size: 15px;
			line-height: 30px;
		}
	}
	.thumbs {
	    //使用 scoped 后 父组件的样式将不会渗透到子组件中 
	    //deep 深度选择器来解决这个问题
	    /deep/ .my-gallery{   
	        display: flex;
	        flex-wrap:wrap;//默认换行
	        figure{
	            width: 30%;
	            margin: 5px;
	            img{
	                width: 100%;
	                box-shadow: 0 0 px #999;
	                border-radius: 5px;
	            }
	        }
	    }
	}
</style>
