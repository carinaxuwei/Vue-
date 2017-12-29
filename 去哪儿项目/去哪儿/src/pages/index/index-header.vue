<template>
 	<div class="banner">
  <router-link to="/detail">
 		<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for="item in swiperInfo" :key="item.id">
	    	<img :src="item.imgUrl" class="banner_pic">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </router-link>
 	</div>
</template>

<script>
export default {
  name: 'indexHeader',
  props: {
    swiperInfo: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        observer: true,
        loop: true,
        slidesPerView: 'auto',
        loopedSlides: 5,
        autoplay: 6000,
        speed: 2000,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style scoped>
	.banner {
		height: 0;
		overflow: hidden;
		padding-bottom: 53%;
	}
	.banner_pic {
		width: 100%;
	}
</style>

