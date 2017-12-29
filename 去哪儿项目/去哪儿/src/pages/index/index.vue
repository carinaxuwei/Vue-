<template>
  <div class="main">
    <index-header :swiperInfo="swiperInfo"></index-header>
    <list class="scroll" :hotDynamic="hotDynamic" :topicInfo="topicInfo" :complication="complication"></list>
  </div>
</template>

<script>
import indexHeader from './index-header'
import list from './list'
import axios from 'axios'

export default {
  name: 'index',
  components: {
    indexHeader,
    list
  },
  data () {
    return {
      swiperInfo: [],
      hotDynamic: [],
      topicInfo: [],
      complication: []
    }
  },
  methods: {
    getJson () {
      axios.get('/static/index.json')
            .then(this.handleGetJsonSucc.bind(this))
            .then(this.handleGetJsonErr.bind(this))
    },
    handleGetJsonSucc (res) {
      res.data && (res = res.data)
      if (res.data && res.ret) {
        res.data.swiper && (this.swiperInfo = res.data.swiper)
        res.data.hotDynamic && (this.hotDynamic = res.data.hotDynamic)
        res.data.topic && (this.topicInfo = res.data.topic)
        res.data.complication && (this.complication = res.data.complication)
      } else {
        this.handleGetJsonErr()
      }
    },
    handleGetJsonErr () {}
  },
  created () {
    this.getJson()
  }
}
</script>

<style scoped>
  .main {
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ebf0f2;
  }
  .scroll {
    flex: 1;
    overflow: hidden;
    margin: 0.3rem 0 0;
  }
</style>
