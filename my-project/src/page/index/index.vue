<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="search"><a href="javascript:;">输入城市/景点/游玩主题</a></div>
      <div class="city">北京</div>
    </header>

    <swiper :options="Option" >
      <swiper-slide v-for="item in bannerInfo" :key="item.id">
        <div class="swiperBanner">
          <img :src="item.imgUrl">
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <swiper :options="Option">
      <swiper-slide v-for="(page, index) in page" :key="index" class="content">
        <div class="icon_wrap" v-for="item in page" :key="item.id">
          <div class="icon">
            <img :src="item.imgUrl">
          </div>
          <p class="dev">{{item.des}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <ul class="around">
      <li v-for="(item, index) in around" class="around_item" :key="index"><a href="javasctipt:;">{{item}}</a></li>
    </ul>

    <ul class="advert">
      <li class='advert_item' v-for="item in advert" :key="item.id">
        <a href="javascrip:;" class="advert-border">
          <img :src="item.imgUrl" />
        </a>
      </li>
    </ul>

    <div class="scenic">
      <h2>热销推荐</h2>
      <div class="place">
        <div class="place_item" v-for="item in place" :key='item.id'>
        <router-link :to="{name: 'detail', params: { sightId: item.id }}" class="place_wrap" tag="div">
          <div class="img_wrap">
            <img :src="item.imgUrl">
          </div>
          <div class="txt_wrap">
            <h5 class="place_name">{{item.name}}</h5>
            <p class="place_des">{{item.des}}</p>
            <div class="place_price">
              ￥<span>{{item.price}}</span>
              <em>起</em>
            </div>
          </div>
         </router-link> 
        </div>
      </div>
      <div class="most"><a href="javasctipt:;">查看所有商品</a></div>
    </div>

    <div class="week">
      <h2>周末去哪儿</h2>
      <div class="week_wrap">
        <div class="week_content" v-for="item in week" :key="item.id">
          <div class="week_img">
            <img :src="item.imgUrl">
          </div>
          <div class="week_txt">
            <h4>{{item.name}}</h4>
            <p>{{item.des}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      bannerInfo: [],
      iconInfo: [],
      around: [],
      advert: [],
      place: [],
      week: [],
      number: 8,
      Option: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    page () {
      const pages = []
      this.iconInfo.forEach((value, index) => {
        let page = Math.floor(index / this.number)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },
  methods: {
    getData () {
      this.$http.get('/static/index.json').then(this.handleGetSucc.bind(this))
    },
    handleGetSucc (res) {
      const body = res.body
      if (body && body.data && body.data.swiper) {
        this.bannerInfo = body.data.swiper
        this.iconInfo = body.data.icons
        this.around = body.data.around
        this.advert = body.data.advert
        this.place = body.data.place
        this.week = body.data.week
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
  	display: flex;
  	background: #05bad5;
  	color: #fff;
    height: 0.88rem;
  }
  .back{
  	width: .64rem;
  	line-height: .86rem;
    text-align: center;
  }
  .search {
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
    height: 0.6rem;
    position: relative;
  }
  .search a{
      left: 0.64rem;
      position: absolute;
      font-size: 0.24rem;
      right: 0;
      color: #e5e5e4;
      white-space: nowrap;
      width: 100%;
      line-height: 0.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .city {
    line-height: .86rem;
    text-align: left;
    position: relative;
    box-sizing:border-box;
    padding-right: 0.5rem;
  }
  .city:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    border: 0.1rem solid ;
    border-color: #fff transparent transparent transparent;
    top: 50%;
    margin-top: -0.05rem;
    right: 0.26rem
  }
  .swiperBanner {
    width: 100%;
    height: 0;
    padding-bottom: 31.25%
  }
  .swiperBanner>img {
    width: 100%;
  }
  .content {
    display: flex;
    height: 3.9rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    background: #fff;
  }
  .icon_wrap {
    width: 25%;
    height: 1.3rem;
    padding-top: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon {
    height: 0.66rem;
    width: 0.66rem;
  }
  .icon img {
    width: 100%;
  }
  .dev {
    margin-top: .2rem;
    color: #212121;
    font-size: .28rem;
    width:100%;
    text-align: center;
  }
  .around {
    display: flex;
    position: relative;
    background: #fff;
  }
  .around:after {
    content: "";
    width: 100%;
    height: 1px;
    top: 0;
    position: absolute;
    transform: scaleY(.5);
    background: #e0e0e0;
  }
  .around_item{
    flex: 1;
    height:0.98rem;
    line-height: .98rem;
    text-align: center;
  }
  .around_item:first-child{
    position: relative;
  }
  .around_item:first-child:after{
    content: "";
    width: 1px;
    height: 100%;
    right: 0;
    position: absolute;
    transform: scaleX(.5);
    background: #e0e0e0;
  }
  .around_item>a{
    font-size: .28rem;
    color: #212121;
  }
  .advert {
    display: flex;
    flex-direction: row;
    margin-top: 0.2rem;
    height: 1.4rem;
    background: #fff;
  }
  .advert .advert_item {
    width: 50%;
    text-align: center;
    height:100%;
  }
  .advert-border{
    display: block;
    width: 100%;
    height: 100%;
  }
  .advert-border:first-child:after {
    content: "";
    width: 1px;
    height: 1.4rem;
    right: 50%;
    position: absolute;
    transform: scaleX(.5);
    background: #e0e0e0;
  }
  .advert_item img {
    height: 100%;
  }

  .scenic h2{
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
  }
  .place{
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .place_item {
    justify-content: flex-start;
    height: 1.4rem;
    padding-bottom: 0.24rem;
    margin: .24rem .24rem 0;
    position: relative;
  }
  .place_item:after{
    content: "";
    width: 100%;
    height: 1px;
    bottom: 0;
    position: absolute;
    transform: scaleY(.5);
    background: #e0e0e0;
  }
  .place_wrap{
    display: block;
    display: flex;
  }
  .img_wrap{
    width: 1.4rem;
    height: 1.4rem;
  }
  .img_wrap img{
    width: 100%;
  }
  .txt_wrap {
    flex: 1;
    margin-left: 0.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .place_name {
    margin-top: .04rem;
    margin-bottom: .1rem;
    color: #212121;
    font-size: .3rem;
  }
  .place_des{
    margin-bottom: .1rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
  }
  .place_price{
    color: #ff8300;
  }
  .place_price span{
    font-size: .36rem;
  }
  .place_price em{
    color: #9e9e9e;
    font-size: .24rem
  }
  .most {
    height: .88rem;
    color: #00afc7;
    line-height: .88rem;
    text-align: center;
    background: #fff;
  }
  .week>h2{
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
  }
  .week {
    display: flex;
    flex-direction: column;
  }
  .week_wrap {
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .week_img{
    height: 0;
    overflow: hidden;
    padding-bottom: 37.4375%;
  }
  .week_img>img{
    width: 100%;
  }
  .week_content h4{
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .week_content p {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .week_txt {
    box-sizing:border-box;
    padding: .14rem .2rem .2rem .2rem;
  }
</style>