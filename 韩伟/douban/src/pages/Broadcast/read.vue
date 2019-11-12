<template>
  <div class="read">
    <div class="title">
      <h2>豆瓣评书</h2>
      <span>全部 454 ＞</span>
    </div>
    <ul>
      <li v-for="(item,index) in arr" :key="(index)" :class="index==arr.length-1?'last':''">
        <a href="#">
          <div class="left">
            <img :src="item.cover_url" alt="图片加载失败" />
          </div>
          <div class="right">
            <h3>{{item.title}}</h3>
            <p class="num">
              <span>{{item.num}}本·</span>
              <span>{{item.score}}关注</span>
            </p>
            <p>
              <span class="headP"><img :src="item.cover_url" alt="图片加载失败"></span>
              <span class="author">{{item.author}}</span>
              <span class="creat">创建</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      arr: []
    };
  },
  mounted() {
      this.$axios
        .get("../../../static/data/read.json")
        .then(res => {
          this.arr = res.data.recommend_one;
        })
        .catch(err => {
          console.log(err);
        });
    },
};
</script>

<style scoped lang="less">
.read{
  .title{
    padding-left:.1rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul{
    li{
      width: 100%;
      height: 1.3rem;
      margin: .1rem;
      border-bottom:1px solid #ccc; 
      a{
        display: block;
        width: 100%;
        height: 1.3rem;
        .left{
          float: left;
          width: 30%;
          height: 100%;
          img{
            height: 90%;
          }
        }
        .right{
          float: right;
          width: 70%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-content: center;
          flex-direction:column; 
          img{
            width: .16rem;
            height: .16rem;
            border-radius: 100%;
          }
        }
      }
    }
  }
}
</style>
