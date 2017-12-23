<template>
	<div>
		<div class="wrap">
			<header class="header">
				<div class="logo">
					<div class="sign"></div>
					<p>Dell's Music</p>
				</div>
				<ul class="nav">
					<li v-for="(item, index) in 4" :key="index"><router-link to="/" tag="span">{{category}}</router-link></li>
				</ul>
			</header>

			<div class="banner">
				<swiper :options="swiperOption">
			    <swiper-slide v-for="item in slider" :key='item.id'>
			    	<img :src="item.picUrl" class="slider_pic">
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
		  	</swiper>
			</div>
			
			<div class="list_title">
				<h2>热门歌单推荐</h2>
			</div>

			<div class="wrapper" ref='scroll'>
			  <ul class="content">
			    <li v-for="item in list" class="list">
			    	<img :src="item.picUrl" class="list_pic">
			    	<div class="describe">
			    		<h4>{{item.title}}</h4>
			    		<p>{{item.desc}}</p>
			    	</div>
			    </li>
			  </ul>
			</div>

		</div>
	</div>
</template>
<script>
  import BScroll from 'better-scroll'

export default {
    'name': 'music',
    data () {
      return {
        'category': '推荐',
        'swiperOption': {
          loop: true,
          pagination: '.swiper-pagination',
          autoplay: 3000
        },
        'slider': [],
        'list': [
      }
    },
    methods: {
      handleGetJsonSucc (res) {
        const data = res.body.data
        if (data && data.list && data.slider) {
          this.slider = data.slider
          this.list = data.list
        }
      },
      getJson () {
        this.$http.get('/api/user').then(this.handleGetJsonSucc.bind(this))
      }
    },
    created () {
      this.getJson()
    },
    updated () {
      const list = this.$refs.scroll
      const scroll = new BScroll(list)
  	  this.$refs.scroll.style.height = ~~(document.documentElement.clientHeight - list.offsetTop) / 50 + 'rem'
    }
}
</script>
<style scoped>
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.header {
		padding-top: 0.09rem;
		background: #333;
		box-sizing: border-box;
	}
	.logo {
		display: flex;
		justify-content: center;
		height: 1.05rem;
		display: flex;
		justify-content: center;
		font-size: 0.26rem;
		color: #e4c940;
	}
	.logo p {
		margin: 0.18rem;
	}
	.sign {
		width: 0.65rem;
		height: 0.65rem;
		border-radius: 50%;
		background: #fff;
	}
	.nav {
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		height: 0.5rem;
	}
	.nav li {
		font-size: 0.28rem;
		color: #fff;
	}
	.nav li span:hover {
		color: #e4c940;
		border-bottom: 0.06rem solid #e4c940;
	}
	.banner {
		height: 0;
		padding-bottom: 40%;
	}
	.slider_pic {
		width: 100%;
	}
	.list_title {
		height: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #333;
	}
	.list_title h2 {
		font-size: 0.27rem;
		color: #fff;
		text-align: center;
	}
	.wrapper {
		overflow: hidden;
	}
	.list {
		padding: 0.2rem;
		display: flex;
	}
	.list_pic {
		width: 1.62rem;
		height: 1.62rem;
	}
	.describe {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 0.4rem;
		color: #e0e0e0;
		font-size: 0.28rem;
	}
	.describe h4 {
		font-size: 0.35rem;
		margin-bottom: 0.15rem;
	}
</style>
