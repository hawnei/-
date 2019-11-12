<template>
   <ul class="list">
      <li>
        <span class="iconfont icon-bianji"></span>
        风险承受能力评估
       <span class="iconfont icon-youjiantou"></span>
      </li>
       <li>
        <span class="iconfont icon-17"></span>
        安全保障
       <span class="iconfont icon-youjiantou"></span>
      </li>
       <li>
        <span class="iconfont icon-weibiaoti2fuzhi12"></span>
        我的关注
       <span class="iconfont icon-youjiantou"></span>
      </li>
       <li>
        <span class="iconfont icon-bangzhu"></span>
        帮助中心
       <span class="iconfont icon-youjiantou"></span>
      </li>
       <li>
        <span class="iconfont icon-weibiaoti2fuzhi12"></span>
        关于我们
       <span class="iconfont icon-youjiantou"></span>
      </li>
       <li>
        <span class="iconfont icon-jianchaquyu"></span>
        检查更新
       <span class="iconfont icon-youjiantou"></span>
      </li>
       <li>
        <span class="iconfont icon-service"></span>
        联系客服
       <span class="iconfont icon-youjiantou"></span>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'List',
}
</script>
<style scoped lang='less'>
@color: #39bb4a;
span.iconfont{
  color: @color;
}
.list{
    list-style: none;
    li{
      display: flex;
      padding: .1rem;
      align-items: center;
      border-bottom: 1px solid #eee;
      span{
        font-size:25px; 
        margin-right:.1rem; 
      }
      span.icon-youjiantou{
        margin-left:auto; 
      }
    }
  }
</style>
