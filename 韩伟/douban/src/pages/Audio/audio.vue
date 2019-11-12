<template> 
   <div class="box">
     <Myheader title="广播">
      <img src="@/assets/images/ic_status_search_user.png" class="img1" slot="imgleft">
      <img src="@/assets/images/ic_chat_green.png" class="img2" slot="imgright">
    </Myheader>
    <div class="logo">
      <i class="fa fa-user-circle" aria-hidden="true"></i>
      <!-- <img src=""> -->
      <span>登录发广播</span>
    </div>
    <div class="content">
       <div class="pinglun">
         <div class="title">
            <div class="pic"></div>
         </div>
       </div>
    </div>
   </div>
</template>

<script>
import Myheader from '@/components/myheader'
export default {
  name: 'Audio',
  components:{
    Myheader
  }
}
</script>


<style scoped lang='less'>
.box{
  .logo{
    color: #ccc;
    height: .6rem;
    border-top:1px solid #ccc; 
    border-bottom:1px solid #ccc; 
    font-size: 18px;
    text-indent: 1em;
    // line-height: .6rem;
    display: flex;
    align-items: center;
    i{
      font-size: 40px;
    }
   }
}
</style>
