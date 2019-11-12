<template>
  <div class="film">
    <div class="moves">
      <h3>正在上映的电影-北京</h3>
      <!-- <v-touch @swipeleft="swiperleft" @swiperight="swiperight" class="wrapper">
      <div class="menu-container" ref="menuContainer">-->
      <!-- <ul
      ref="wiperbox"
      @touchstart="handleTouchStart($event)"
      @touchend="handleTouchEnd($event)"
      @touchmove="handleTouchMove($event)"
      :style="{transform: 'translateX('+cuur+ 'px)'}">-->
      <ul>
        <li v-for="(item,index) in formList1" :key="index"> 
          <a :href="item.url">
            <img :src="item.cover" />
            <p>{{item.title}}</p>
            <p class="rate">{{item.rate}}</p>
          </a>
        </li>
      </ul>
      <!-- </div>
      </v-touch>-->
    </div>
     
     <div class="moves">
      <h3>即将上映的电影-北京</h3>
      <ul>
        <li v-for="(item,index) in formList2" :key="index">
          <a :href="item.url">
            <img :src="item.cover" />
            <p>{{item.title}}</p>
            <p class="rate">{{item.rate}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="moves">
      <h3>高分</h3>
      <ul>
        <li v-for="(item,index) in formList3" :key="index">
          <a :href="item.url">
            <img :src="item.cover" />
            <p>{{item.title}}</p>
            <p class="rate">{{item.rate}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flim",
  data() {
    return {
      arr: [],
      startPoint: 0,
      //px 值
      cuur: 0
    };
  },
  mounted() {
    this.$axios
      .get("../../../static/data/movie.json")
      .then(res => {
        this.arr = res.data.subjects;
      })
      .catch(err => {
        console.log(err);
      });
  },
  // methods: {
  //   swiperleft() {
  //     //transform: translateX(-167px);
  //     console.log("swiperleft");
  //   },
  //   swiperight() {
  //     console.log("swiperight");
  //   },
  //   handleTouchStart: function(e) {
  //     //获取鼠标点击位置
  //     this.startPoint = e.changedTouches[0].pageX
  //   },

  //   handleTouchEnd: function(e) {
  //   },
  //   handleTouchMove: function(e) {
  //     //获取移动距离
  //      let poChange = e.changedTouches[0].pageX -this.startPoint;
  //     //  console.log(e.changedTouches[0]);
  //      console.log(this.cuur);
  //      //边界
  //      if(Math.abs(this.cuur)>1000||this.cuur>0){
  //          return
  //      }
  //   }
  // },
  computed:{
    // cuur(){
    //    this.cuur+=poChange;
    // }
	formList1: function () {
		return this.arr.filter(function (item) {
			return item.playable
		})
  },
  	formList2: function () {
		return this.arr.filter(function (item) {
			return !item.playable
		})
  },
  	formList3: function () {
		return this.arr.filter(function (item) {
			return +item.rate>7
		})
	},

 }
}
// 思路 ： 使用变形改变位置
</script>


<style scoped lang='less'>
.film{
  padding-left:.1rem; 
.moves{
    ul{
      // width: 3.2rem;
      height: 2.5rem;
      overflow: hidden;
      overflow-x: scroll;
      display: flex;
      margin-top: .1rem;
      li{
        height: 100%;
        margin-right: .1rem;
        text-align: center;
        a{
          text-decoration: none;
          color: #3f3f3f;
          img{
            width: 1.2rem;
            height: 1.6rem;
          }
          p{
            width: 100%;
          }
          .rate{
            color: #a4a4a4;
          }
        }
      }
    }
  }}
</style>
