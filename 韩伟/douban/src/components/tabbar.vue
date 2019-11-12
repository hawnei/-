<template>
  <ul class="wrap">
      <item tlt='首页' mark='home' :sel="cuur" @change='getVal'>
          <img src="../assets/images/ic_tab_home_active.png" slot='activeImg'>
          <img src="../assets/images/ic_tab_home_normal.png" slot='normalImg'>
      </item>
      <item tlt='书影音' mark='broadcast' :sel="cuur" @change='getVal'>
          <img src="../assets/images/ic_tab_subject_active.png" slot='activeImg'>
          <img src="../assets/images/ic_tab_subject_normal.png" slot='normalImg'>
      </item>
        <item tlt='广播' mark='audio' :sel="cuur" @change='getVal'>
          <img src="../assets/images/ic_tab_status_active.png" slot='activeImg'>
          <img src="../assets/images/ic_tab_status_normal.png" slot='normalImg'>
      </item>
        <item tlt='小组' mark='group' :sel="cuur" @change='getVal'>
          <img src="../assets/images/ic_tab_group_active.png" slot='activeImg'>
          <img src="../assets/images/ic_tab_group_normal.png" slot='normalImg'>
      </item>
        <item tlt='我的' mark='mine' :sel="cuur" @change='getVal'>
          <img src="../assets/images/ic_tab_profile_active.png" slot='activeImg'>
          <img src="../assets/images/ic_tab_profile_normal.png" slot='normalImg'>
      </item>
  </ul>
</template>

<script>
import item from './item'
export default {
  name: 'tabBar',
  data(){
     return{
          cuur:"home"
     }
  },
  components:{
     item
  },
  methods:{
      getVal(val){
          this.cuur=val;
      }
  }
}
</script>
<style scoped>
.wrap{
  position: fixed;
  bottom:0;
  list-style:none;
  width: 100%;
  height: .7rem;
  border:1px solid #ccc;

  text-align: center;

  display: flex;
  background-color:#fff;

}
</style>
