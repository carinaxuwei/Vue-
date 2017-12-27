<template>
	<div class="banner">
		<img :src="title" class="banner_pic">
	</div>
</template>
<script>
	export default {
    name: 'banner',
    props:{
    	title: String
    },
    data () {
    	return {}
    },
    created () {
    	console.log(this.title)
    }
	}
</script>
<style scoped>
	.banner {
		height: 100vw;
		overflow:hidden;
	}
	.banner_pic {
		width: 100%;
	}
</style>