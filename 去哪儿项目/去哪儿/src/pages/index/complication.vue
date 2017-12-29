<template>
  <div class="compli_wrap">
    <h2 class="title">精选合集</h2>
    <div class="compli_content">      
      <router-link v-for="(item, index) in complicationInfo" 
        tag="div" :to="{name: 'detail', params: {id: item.id}}" 
        class="entire" 
        :key="index">
        <div class="img_wrap">
          <img v-lazy="item.imgUrl" />
        </div>
        <p class="txt">{{item.des}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'complication',
  props: {
    complicationInfo: Array
  },
  methods: {
    loadSetData () {
      console.log(123)
    }
  }
}
</script>

<style scoped>
  .compli_wrap {
    padding: 0 0.35rem 0.3rem;
    background: #fff;
  }
  .title {
    padding: 0.3rem 0 0;
    font-size: 0.3rem;
    color: #333
  }
  .compli_content {
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
