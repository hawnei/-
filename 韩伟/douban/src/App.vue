<template>
	<div id="app">
		<router-view/>
		<Tabbar v-show="!(path ==='/login')"></Tabbar>
  </div>
</template>

<script>
import {obj} from '../static/js/init.js'
import Tabbar from './components/tabbar'

export default {
  name: 'App',
  data(){
        return{
         path:''
        }
  },
  mounted(){
    obj.setRem();
    this.$router.push('/');
    this.path =this.$route.path;
  },
  components:{
    Tabbar
  },
   watch:{
        $route(to,from){
            this.path = to.path
          }
        }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color:transparent;
  }
  body{
    font-size:14px; 
  }
  a{
    text-decoration: none;
    color: #000;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
li{
  list-style: none;
}
</style>