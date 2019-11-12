<template>
     <Myheader title="小组">
      <img src="@/assets/images/ic_actionbar_search_icon.png" class="img1" slot="imgleft">
      <img src="@/assets/images/ic_chat_green.png" class="img2" slot="imgright">
    </Myheader>
</template>

<script>
import Myheader from '@/components/myheader'
export default {
  name: 'Group',
  components:{
    Myheader
  }
}
</script>


<style scoped>
</style>
