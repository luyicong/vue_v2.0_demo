<template>
	<div class="g-content">
		<h1 v-text="message"></h1>
	</div>
</template>

<script>
	export default {
	    data (){
			return {
                message : 'This is About Content Component!'
			}
		}
	}
</script>

<style scoped>
	/*全局公共样式common.css*/
	@import '../../assets/css/common.css';
	h1{
		color: rgb(5, 110, 234);
	}
</style>