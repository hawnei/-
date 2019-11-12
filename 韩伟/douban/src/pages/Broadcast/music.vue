<template>
    <div class="box">
      6
  </div>
</template>

<script>
export default {
  name: 'Music',
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
