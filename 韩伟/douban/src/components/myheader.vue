<template>
 <header class="header" :class="{bggreen:!title}">
        <span>{{title}}</span>
        <slot name="imgleft"></slot>
        <slot name="imgright"></slot>
        <slot name='search'></slot>
</header>
</template>

<script>
export default {
    props:['title'],
    name:'Myheader',
}
</script>

<style scoped>
    header.bggreen{
    background-color: #48bd5a; 
   }
    .header {
        line-height: .4rem;
        position: relative;
        width: 100%;
        height: .4rem;
        padding: .05rem 0;
        text-align: center;
        border-bottom: 1px solid #ccc;
        background-color: #f6f6f6;
        font-size: 18px;
    }
  .header .searchbox input {
      border: none;
      text-indent: 3em;
      width: 80%;
      height: .3rem;
      border-radius: 5px;
      position: absolute;
      left: .15rem;
      top: .05rem;
      font-size: 16px ;
    }
    .header img {
        position: absolute;
        top: .08rem;
        width: .25rem;
    }

    .header .img1 {
        z-index: 2;
        right: .8rem;
    }

   .header .img2 {
        right: .2rem;
    }
   .header .search {
      left: .2rem;
    }
</style>
