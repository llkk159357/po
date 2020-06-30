<template>
  <div>
     <router-link to="/home">home</router-link>  
    <router-link to="/about">about</router-link>
    
</div>  

</template>
<script>
import login from  './login'

export default {
   components:{
    
     login

   } , 
 

}
</script>
<style scoped>
 .media {
    position: relative;
 }
 .login {
   position: absolute;  
   top:50%;
   left:50%;
 }
.media img{
width:100%;
}

.part_one{
    position: relative;
}
.right-icon{
    position: absolute;
    bottom:120px;
    left:45%;
   

    
}
.right-icon img{
 width:60px;
 opacity: 0.4;
}
</style>

