<template>
   <div class="outer">
  
       
   

       </div>



</template>
<script>


export default {
    components:{
    
        
    },
    data(){
        return{
        items:["文本方式展现","柱状图","饼状图","折线图","树状图"],
        seen:false,
        way:"请选择展现方式"
        }
    },
    methods:{
        change:function(){
            this.seen=!this.seen;
        },
        changevalue:function(index){
           this.way=this.items[index];
           this.seen=false;
        }
    }
}
</script>

<style>
.inner{
    width:1100px;
    margin:0 auto;
    border:0.5px solid grey;
    text-align: center;
}
.title{
    text-align: center;
    background: #43a6f1
}
.function{
    text-align: left;
    margin-left:60px;
}
ul li{
    list-style: none;
  
}
.itemlist{
    position: absolute;  
    top:5px;
    left:350px;
}
.list{
    position: relative;
}
</style>
