<template>
	<div ref="wrapper" class="wrapper">
   <div class="content">
  		<div class="banner" v-for="(item, index) in 9" :key="index">
  			<swiper :options="swiperOption">
  		    <swiper-slide v-for="item in swiper" :key="item.id">
  		    	<img :src="item.imgUrl">
  		    </swiper-slide>
  		    <div class="swiper-pagination"  slot="pagination"></div>
  		  </swiper>
  		</div>
    </div>
    <div>{{id}}</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroller',
  props: ["id"],
  data () {
    return {
  		swiper: [],
  		swiperOption: {
    		pagination: '.swiper-pagination',
    		speed: 2000,
  			loop : true,
        slidesPerView: 'auto',
        loopedSlides: 4
  		},
      flag: true
    }
  },
  computed: {},
  methods: {
  	getJson () {
  	  this.$http.get('/static/index.json')
  	  .then(this.handleGetJsonSucc.bind(this))
  	  .catch(this.handleGetJsonErr.bind(this))
  	},
  	handleGetJsonSucc (res) {
  		res.body && (res = res.body)
  		if (res.data) {
  			res.data.swiper && (this.swiper = res.data.swiper)
      } else {
        this.handleGetJsonErr(
          alert)
      }
  	},
  	handleGetJsonErr () {},
    handleScrollSucc (e) {
      if (e.y > 30 && this.flag) {
        console.log('下啦刷新')
        this.flag = false
      }
    },
    handleScrollEndSucc () {
      console.log('end')
      this.flag = true
    }
  },
  watch: {
    swiper () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  mounted () {
   this.scroll = new BScroll(this.$refs.wrapper, {
    probeType: 3
   })
   this.scroll.on('scroll',this.handleScrollSucc.bind(this))
   this.scroll.on('scrollEnd',this.handleScrollEndSucc.bind(this))
  },
  created () {
    this.getJson()
  }
}
</script>
<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
	.banner {
		width: 100%;
		height: 0;
		padding-bottom: 40%;
	}
	.banner img {
		width: 100%;
	}
  .swiper-pagination >>> span {
    background: #fff
  }
</style>