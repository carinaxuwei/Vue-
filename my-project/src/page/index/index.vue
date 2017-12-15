<template>
    <header class="header">
      <div class="back"><i class="icon">返回</i></div>
      <div class="search"></div>
      <div class="city">城市</div>
    </header>
</template>

<script>
export default {
  name: 'index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
  	display: flex;
  	background: #05bad5;
  	color: #fff;
  }
  .back{
  	width: .64rem;
  	line-height: .86rem;
  }
  .search {
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
  }
  .city {
    width: 1.14rem;
    line-height: .86rem;
    text-align: center;
  }
</style>