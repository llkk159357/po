<template>


</template>
<script>
export default {
      data(){
       return{
         good:false
       }
   },
  
   methods:{
       add:function(){
           this.good=!this.good
       }
   }
}
</script>

<style scoped>
.sign{
  
    width:220px;
    height:60px;
    text-align: center;
    line-height:60px;
    position: absolute;
    left:40%;
    top:40%;
    color:white;
    font-size: 22px;
    background-color: rgba(138, 138, 161, 0.6);
    letter-spacing: 5px;
}


</style>
