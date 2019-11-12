<template>
   <div class="box">
    <Myheader>
      <div slot="search" class="searchbox">
       <input type="text" placeholder="请输入搜索的内容"> 
       <img src="@/assets/images/ic_group_search_small.png" class="search" > 
    </div>
    <img src="@/assets/images/ic_scan_gray.png"  class="img1"  slot="imgleft"> 
    <img src="@/assets/images/ic_chat_white.png" class="img2" slot="imgright">
    </Myheader>

    <!-- 
      effect: 切换方式 常用：fade cube coverflow flip 默认 slide
      idcar : 轮播图唯一标识
     -->
    <Swiperbox  idcar='swiper1' textAlign='right'>
      <!-- 轮播页数 -->
        <div class="swiper-slide"><img src="../../assets/images/01.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/images/02.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/images/03.jpg"></div>
    </Swiperbox>
    <div class="newList">
      <newList v-for='(item,index) in list' :key="index" :url=item.target.cover_url :uri=item.target.uri>
       <div class="left" slot="left">
         <h4>{{item.title}}</h4>
         <p>{{item.target.desc}}</p>
         <p class="author">作者:{{item.target.author.name}}</p>
       </div>
    </newList>
    </div>
   </div>
</template>

<script>
import Myheader from '@/components/myheader'
import Swiperbox from '@/components/swiper'
import newList from '@/components/newList'
export default {
  name: 'Home',
  components:{
    Myheader,
    Swiperbox,
    newList
  },
  data(){
      return{
          list:[]
      }
  },
  mounted(){
      return this.getData();
  },
  methods:{
    getData(){
      this.$axios.get('../../../static/data/homeData.json').then(res=>{
          this.list=res.data.recommend_feeds;
      }).catch(err=>{
          console.log(err)
      })
    }
  }
}
</script>