<template>
    <div class="box">
      3
  </div>
</template>

<script>
export default {
  name: 'City',
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
