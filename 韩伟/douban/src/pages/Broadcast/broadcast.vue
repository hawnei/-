<template>
    <div class="box">
      <Myheader title="书影音">
      <img src="@/assets/images/ic_actionbar_search_icon.png" class="img1" slot="imgleft">
      <img src="@/assets/images/ic_chat_green.png" class="img2" slot="imgright">
    </Myheader>
    <nav class="nav">
      
      <span :class="{'active':cuur==0}" @click="cuur=0"><router-link to='/broadcast/film'>电影</router-link></span>
      <span :class="{'active':cuur==1}" @click="cuur=1"><router-link to='/broadcast/read'>阅读</router-link></span>
      <span :class="{'active':cuur==2}" @click="cuur=2"><router-link to='/broadcast/tv'>电视</router-link></span>
      <span :class="{'active':cuur==3}" @click="cuur=3"><router-link to='/broadcast/city'>同城</router-link></span>
      <span :class="{'active':cuur==4}" @click="cuur=4"><router-link to='/broadcast/music'>音乐</router-link></span>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Myheader from '@/components/myheader'
export default {
  name: 'Broadcast',
  components:{
    Myheader,
  },
  data(){
    return {
      cuur:0
    }
  },
  mounted(){
    this.$router.push('/broadcast/film')
  }
}
</script>
<style scoped lang='less'>
.nav{
  display: flex;
  justify-content: center;
  align-items: center;
 span{
   flex: 1;
    a{
    text-decoration: none;
    color: #ccc;
    display: block;
    text-align: center;
    padding: .1rem 0;
  }
 }
  span.active{
    background-color: #01d814;
  }
}
</style>
