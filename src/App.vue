<template>
  <div id="app">
    <myheader></myheader> 
    <router-view/>
   <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@/components/view/myheader'
import myfooter from '@/components/view/myfooter'
export default {
  name: 'App',
 components:{
   myheader,
   myfooter
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
  *{
      padding:0;
      margin:0;
   }
</style>
