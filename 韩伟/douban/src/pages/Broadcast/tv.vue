<template>
    <div class="box">
      4
  </div>
</template>

<script>
export default {
  name: 'TV',
  mounted(){
      this.$axios.get().then(res=>{
          console.log(res);
      }).catch(err=>{
          console.log(err);
      })
  },
}
</script>


<style scoped>

</style>
