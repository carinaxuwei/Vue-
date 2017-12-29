<template>
  <div class="main" @click="handleShowClick">
    <div class="wrapper">
     <swiper :options="swiperOption">
      <swiper-slide>
        <div class="content">
          <img src="http://static1.keepcdn.com/picture/2017/12/24/21/a8e22944145d31b2853f0597e3957c388ffb7545_1522x2000.jpg" class="pic">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="content">
          <img src="http://static1.keepcdn.com/picture/2017/12/26/22/fbe72497d27a85d7f22ffb06b8b4b8a98b4c006e_734x960.jpg" class="pic">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="content">
          <img src="http://static1.keepcdn.com/picture/2017/12/29/10/e5ed81bd1a5288dd248399ad31467d45978d04ef_1334x1780.jpg" class="pic">
        </div>
      </swiper-slide>
    </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'gallary',
  data () {
    return {
      swiperOption: {
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleShowClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .main {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
  }
  .wrapper {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
  .content {
    overflow: hidden;
    height: 0;
    padding-bottom: 131.4%;
  }
  .pic {
    width: 100%;
  }
</style>
