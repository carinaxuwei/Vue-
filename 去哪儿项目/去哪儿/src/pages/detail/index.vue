<template>
  <div class="main">
  	<header class="header">
  		<div class="self">
  			<div class="personal_wrap">
  				<div class="personal_icon">
  					<img src="http://static1.keepcdn.com/avatar/2017/11/24/19/1983390374a92a3160c13f4ee2c95a0b65d697cd.jpg?imageMogr2/thumbnail/96x" />
  				</div>
  				<div class="personal">
  					<p class="name">张寒希-</p>
  					<p class="show_time">2017/12/24</p>
  				</div>
  			</div>
  			<div class="atention">
  				关注
  			</div>
  		</div>
  	</header>

	<banner></banner>
  </div>
</template>

<script>
import banner from './banner'
export default {
  name: 'detail',
  components: {
    banner
  }
}
</script>

<style scoped>
	.main {
		display: flex;
		flex-direction: column;
		background: #ebf0f2; 
	}
	.header {
		padding-top: 0.4rem;
		background: #fff
	}
	.self {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 0.9rem;
		margin: 0 0.3rem 0.3rem 0.3rem;
	}
	.personal_wrap {
		display: flex;
		align-items: center;
	}
	.personal_icon {
		width: 0.9rem;
    height: 0.9rem;
	}
	.personal_icon img {
		width: 100%;
		border-radius: 50%;
	}
	.personal {
		max-width: 1.5rem;
		margin-left: 0.2rem;
	}
	.show_time {
		font-size: 0.2rem;
		color: #999;
		line-height: 0.4rem;
	}
	.name {
		color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.3rem;
    line-height: 0.5rem;
	}
	.atention {
    width: 1.5rem;
    height: 0.5rem;
    background: #24c789;
    border: 1px solid #24c789;
    border-radius: 2.8rem 2.8rem;
    line-height: 0.5rem;
    font-size: 0.3rem;
    color: #fff;
    text-align: center;
	}
	.img_wrap {
		height: 0;
		padding-bottom: 131.4%;
	}
	.img_wrap img {
		width: 100%;
	}
</style>
