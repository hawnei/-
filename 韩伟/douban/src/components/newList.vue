<template>
  <div class="listWarp">
    <a :href="uri">
      <slot name="left"></slot>
      <div class="right">
        <img :src="url" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "newList",
  props: ["url", "uri"]
};
</script>


<style scoped lang='less'>
.listWarp {
  padding: 0.1rem;
  height: 1.6rem; 
  border-bottom:1px solid #ccc; 
  a {
    display: block;
    color: #000;
    width: 100%;
    height: 100%;
    .left {
      float: left;
      width: 60%;
      height: 100%;
      p {
        color: #ccc;
      }
      p.author {
        color: #eee;
      }
    }
    .right {
      float: right;
      width: 40%;
      height: 100%;
      img {
        width: 100%;
        height: 80%;
      }
    }
  }
}
</style>
