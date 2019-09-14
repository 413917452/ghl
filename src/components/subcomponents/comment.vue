<template>
	<div>
		<h3>吐槽💬</h3>
		<hr />
		<textarea placeholder="最多吐槽120字哦(⊙o⊙)" maxlength="120" v-model="msg"></textarea>

		<mt-button type="primary" size="large" @click="PostComment">发表</mt-button>
		<div class="cmt-list">
			<div class="cmt-item" v-for=" (item,i) in comments" :key="item.add_time">
				<div class="cmt-title">
					第{{ i+1 }}楼 &nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;
					发表时间:{{ item.add_time | time }}
				</div>
				<div class="cmt-body">
					{{ item.content === '' ? '此用户很懒什么都没留下' : item.content}}
				</div>
			</div>
		</div>
		<mt-button type="danger" size="large" plain @click="GetMore">更多</mt-button>
	</div>
</template>

<script>
	import {
		Toast
	} from 'mint-ui'
	export default {
		data() {
			return {
				pageIndex: 1,
				comments: [],
				msg:"",
			}
		},
		created() {
			this.getMoment()
		},
		methods: {
			getMoment() {
				this.$http.get('http://www.liulongbin.top:3005/api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(
					result => {
						if (result.data.status === 0) {
							this.comments = this.comments.concat(result.data.message)
						} else {
							Toast('获取评论失败')
						}
					})
			},
			GetMore() {
				this.pageIndex++;
				this.getMoment();
			},
			PostComment() {
				this.$http.post('http://www.liulongbin.top:3005/api/postcomment/' + this.$route.params.id, {
					content: this.msg.trim()
				}).then(res => {
					if (res.data.status === 0) {
						var cmt = {
							user_name: '匿名用户',
							add_time: Date.now(),
							content: this.msg.trim()
						}
						this.comments.unshift(cmt)
						this.msg = ''
					}
				})
			}
		},
		props: ["id"]
	}
	
</script>

<style lang="scss" scoped>
	.cmt-container {
		h3 {
			font-size: 18px;
		}

		textarea {
			font-size: 14px;
			height: 85px;
			margin: 0;
		}
	}

	.cmt-item {
		font-size: 13px;
	}

	.cmt-title {
		line-height: 30px;
		background-color: #ccc;
	}

	.cmt-body {
		line-height: 35px;
		text-indent: 2em;
	}

	.cmt-list {
		margin: 10px 0;
	}
</style>
