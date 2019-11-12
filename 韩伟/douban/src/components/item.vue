<template>
      <li class="item" @click="send">
        <span v-if="flag">
            <slot name='activeImg'></slot>
         </span>
        <span v-if="!flag">
            <slot name='normalImg'></slot>
        </span>
        <br/>
       <span :class="{green:mark==sel}">{{tlt}}</span>
      </li>
</template>

<script>

export default {
  name: 'item',
  props:['tlt','mark','sel'],
  computed:{
      flag(){
          if(this.mark==this.sel){
              return true;
          }
          return false;
      }
  },
  methods:{
     send(){
         this.$emit('change',this.mark);
         this.$router.push('/'+this.mark);
  }
}
}
</script>
<style>
.item{
  flex: 1;
}
.item img{
  width:.45rem;
}
.item span{
  font-size: 14px;
  color: #ccc
}
.item  span.green{
   color:green;
}
</style>
