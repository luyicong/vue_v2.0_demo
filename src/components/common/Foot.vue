<template>
	<div class="g-footer">
		<h1 v-text="footText"></h1>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				footText:'This is Footer component!'
			}
		}
	}
</script>

<style scoped>
	h1{
		color: green;
	}
	.g-footer{
		width:100%;
		height:200px;
		background:#eee;
		line-height:200px;
		text-align:center;
	}
</style>