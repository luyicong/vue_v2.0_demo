<template>
	<div class="g-head">
		<div class="m-top f-w1200 f-tac"><h3 v-text="childMsg"></h3><span class="u-icon iconfont icon-rili">字体图标的使用</span></div>
		<div class="m-banner f-w1200 f-tac">This banner Conponent!</div>
		<div class="f-w1200">
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
		</div>
		<div class="m-nav f-w1200">
			<a href="/index.html">index</a>
			<a href="/about.html">about</a>
		</div>
	</div>
</template>
<script>

	export default {
		//获取从父组件传过来的数据
		props: {
			childMsg: {
				type: String,
				default: '' //这样可以指定默认的值
			}
		},
		data () {
			return {
				abc:'456'
			}
		}
	}
</script>
<!-- 加入scoped是为了防止本组件中的css渗透到其他组件，可以去掉看看结果 -->
<!--<style scoped>-->
<style>
	/*字体图标的使用*/
	@import '../../assets/css/iconfont.css';
	*{padding:0;margin:0;}
	.u-icon{
		display:block;
		width:100px;
		height:30px;
		font-size:20px;
		color:red;
		line-height:30px;
		position:absolute;
		top:15px;
		left:15px;
	}
	.g-head{
		width:100%;
		height:290px;
		background:#eee;
		margin:0 auto;
		overflow:hidden;
	}
	.f-w1200{
		width:1200px;
		overflow:hidden;
		margin:0 auto;
	}
	.f-tac{
		text-align:center;
	}
	.m-top{
		height:50px;
		border:1px solid red;
		line-height:50px;
		position:relative;
	}
	.m-banner{
		height:150px;
		line-height:150px;
		background:#aaa;
	}
	.m-nav{
		height:48px;
		line-height:48px;
		border:1px solid blue;
	}
	.m-nav a{
		display:block;
		width:120px;
		text-align:center;
		background:#777;
		float:left;
		border-right:1px solid #fff;
	}
</style>