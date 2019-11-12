<template>
   <div class="box">
      <Myheader title="我的">
      <img src="@/assets/images/ic_settings.png" class="img2" slot="imgright">
    </Myheader>
    <div class="manange">
       <div class="items">
          <span class="iconfont icon-mima1"></span>
          <span>密码管理</span>
       </div>
       <div class="items">
          <span class="iconfont icon-yinxingqia"></span>
          <span>银行卡管理</span>
       </div>
    </div>
    <list></list>
   </div>
</template>

<script>
import Myheader from '@/components/myheader'
import List from '@/components/list'
export default {
  name: 'Mine',
  components:{
    Myheader,
    List
  }
}
</script>


<style scoped lang=less>
@color: #39bb4a;
span.iconfont{
  color: @color;
}
.box{
  .manange{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .3rem 0;
    border-bottom:1px solid #ccc; 
   .items{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
      span.iconfont{
      font-size :40px;
    }
   }
  }
}
</style>
