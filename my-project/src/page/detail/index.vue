<template>
	<div>
		<banner :title="title"></banner>
	</div>
</template>
<script>
	import banner from './banner'
	export default {
    name: 'detail',
    props: {
    	sightId: [Number, String]
    },
    data () {
    	return {
    		val: [],
    		title: ''
    	}
    },
    watch: {
      sightId () {
      	this.getImgList()
      }
    },
    methods: {
    	getImgList () {
    		this.$http.get('/static/detail.json')
    							.then(this.handleImgListSucc.bind(this),this)
    							.catch(this.handleImgListErr.bind(this),this)
    	},
    	handleImgListSucc (res) {
    		res && (res = res.body)
    		if (res.title) {
    			this.val = res.title
    			this.setBanner()
    		} else {
    			this.handleImgListErr()
    		}
    	},
    	handleImgListErr () {
    		console.log('error')
    	},
    	setBanner () {
    		this.title = ''
    		this.val.forEach((val, index) => {
    			if (index == this.sightId.substring(4)) {
    				this.title = val
    			}
    		})
    	}
    },
    components: {
    	banner
    },
    created () {
    	this.getImgList()
    }
	}
</script>
<style scoped>
	
</style>