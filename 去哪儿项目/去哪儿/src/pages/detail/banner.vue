<template>
  <div>
    <div class="banner_img" @click="handleShowClick">
      <img src="http://static1.keepcdn.com/picture/2017/12/24/21/a8e22944145d31b2853f0597e3957c388ffb7545_1522x2000.jpg" class="banner_pic">
    </div>
    <gallary v-if="showImg" @close="handleCloseClick"></gallary>
  </div>
</template>

<script>
import gallary from 'components/common/gallary'
export default {
  name: 'banner',
  data () {
    return {
      showImg: false
    }
  },
  components: {
    gallary
  },
  methods: {
    handleShowClick () {
      this.showImg = true
    },
    handleCloseClick () {
      this.showImg = false
    }
  },
  activated () {
    this.showImg = false
  }
}
</script>

<style scoped>
  .banner_img {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 131.4%;
  }
  .banner_pic {
    width: 100%;
  }
</style>
