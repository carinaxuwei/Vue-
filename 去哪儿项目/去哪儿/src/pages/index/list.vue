<template>
    <div ref="wrapper">
      <div class="content">
        <div class="hot_wrap">
          <h2 class="title">热门动态</h2>
          <div class="hot_content">      
            <router-link v-for="item in hotDynamicInfo" 
              tag="div" :to="{name: 'detail', params: {id: item.id}}" 
              class="entire" 
              :key="item.id">
              <div class="img_wrap">
                <img v-lazy="item.imgUrl" />
              </div>
              <p class="txt">{{item.des}}</p>
            </router-link>
          </div>
        </div>

        <topic :topicInfo="topicInfo"></topic>
        <complication :complicationInfo="complicationInfo"></complication>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import topic from './topic'
import complication from './complication'
import axios from 'axios'
export default {
  name: 'list',
  props: {
    hotDynamic: Array,
    topicInfo: Array,
    complication: Array
  },
  data () {
    return {
      flag: null,
      hotDynamicInfo: [],
      complicationInfo: [],
      pages: 0,
      base: 1340,
      isLoading: true,
      isGetJson: true
    }
  },
  components: {
    topic,
    complication
  },
  watch: {
    hotDynamic () {
      this.$nextTick(() => {
        this.hotDynamicInfo = JSON.parse(JSON.stringify(this.hotDynamic))
      })
    },
    complication () {
      this.$nextTick(() => {
        this.complicationInfo = JSON.parse(JSON.stringify(this.complication))
      })
    }
  },
  computed: {
    distance () {
      return this.pages * 930
    }
  },
  methods: {
    handleScrollChange (e) {
      if (e.y > 60 && this.isLoading && this.isGetJson) {
        this.isLoading = false
        this.isGetJson = false
        this.flag = true
        axios.get('/static/index.json')
            .then(this.handleGetJsonSucc.bind(this))
            .then(this.handleGetJsonErr.bind(this))
      } else if (e.y < -(this.base + this.distance) && this.isLoading && this.isGetJson) {
        this.isLoading = false
        this.isGetJson = false
        this.flag = false
        axios.get('/static/index.json')
            .then(this.handleGetJsonSucc.bind(this))
            .then(this.handleGetJsonErr.bind(this))
      }
    },
    handleScrollChangeEnd () {
      this.isLoading = true
    },
    handleGetJsonSucc (res) {
      this.isGetJson = true
      res.data && (res = res.data)
      if (res.data && res.ret) {
        if (this.flag) {
          res.data.complication = res.data.complication.sort(() => {
            return Math.random() - 0.5
          })
          res.data.hotDynamic && (this.hotDynamicInfo = res.data.complication.slice(0, 4))
        } else {
          this.pages += 1
          res.data.complication && (this.complicationInfo = this.complicationInfo.concat(this.complication))
        }
      } else {
        this.handleGetJsonErr()
      }
    },
    handleGetJsonErr () {}
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 2
      })
      this.scroll.on('scroll', this.handleScrollChange.bind(this))
      this.scroll.on('scrollEnd', this.handleScrollChangeEnd.bind(this))
    })
  }
}
</script>

<style scoped>
 .content {
    padding: 0.05rem 0 0.35rem;
    font-family: "PingFangSC-Regular";
  }
  .title {
    padding: 0.3rem 0 0;
    font-size: 0.3rem;
    color: #333
  }
  .hot_wrap {
    min-height: 10rem;
    margin-bottom: 0.3rem;
    padding: 0 0.35rem;
    background: #fff;

  }
  .hot_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .entire {
    width: 48.2%;
  }
  .img_wrap {
    height: 0;
    padding-bottom: 97.8%;
    overflow: hidden;
    margin-top: 0.3rem;
  }
  .img_wrap img {
    width: 100%;
  }
  .txt {
    margin: .15rem 0 .2rem;
    font-size: 0.2rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 0.8rem;
    line-height: 0.4rem;
  }
</style>
