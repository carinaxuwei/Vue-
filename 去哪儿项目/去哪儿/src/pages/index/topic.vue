<template>
  <div class="topic_wrap">
    <h2 class="title">精选话题</h2>
    <div class="topic_content">
	 		<swiper :options="swiperOption">
		    <swiper-slide v-for="item in topicInfo" :key="item.id">
		    	<div class="topic_inner">
			    	<div class="img_wrap">
			    		<img :src="item.imgUrl" class="top_pic">
			    	</div>
			    	<div class="mask" @click="handleImgClick(item.id)">
			    		<div class="topic_txt">
			    			<h4 class="topic_title">{{item.title}}</h4>
			    			<p class="topic_des">{{item.des}}</p>
			    		</div>
			    	</div>
		    	</div>
		    </swiper-slide>
	    </swiper>    
    </div>
  </div>
</template>

<script>

export default {
  name: 'topic',
  props: {
    topicInfo: Array
  },
  data () {
    return {
      swiperOption: {
        observer: true,
        slidesPerView: 1.2,
        spaceBetween: 15
      }
    }
  },
  methods: {
    handleImgClick (id) {
      this.$router.push('/detail' + id)
    }
  }
}
</script>

<style scoped>
  .topic_wrap {
    padding: 0 0.35rem 0.3rem;
    background: #fff;
    margin-bottom: 0.3rem;
  }
  .title {
    padding: 0.3rem 0;
    font-size: 0.3rem;
    color: #333
  }
  .topic_inner {
  	position: relative;
  }
  .img_wrap {
  	overflow: hidden;
  	height: 45vw;
  }
  .top_pic {
  	width: 100%;
  	height: 100%;
  }
  .mask {
  	width: 100%;
  	height: 100%;
  	position: absolute;
  	left: 0;
    top: 0;
    z-index: 1;
    background: rgba(0,0,0,0.3);
    text-align: center
  }
  .topic_txt {
  	width: 100%;
  	position: absolute;
  	top: 50%;
  	transform: translateY(-50%);
  	color: #fff;
  }
  .topic_title {
  	margin-bottom: 0.15rem;
  	font-size: 0.3rem;
  }
  .topic_des{   
    width: 70%;
    display: -webkit-box;
    line-height: 0.35rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0 auto;
    font-size: 0.15rem;
  }
</style>
