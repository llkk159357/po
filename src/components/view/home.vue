<template>
    <div>
     {{age}}
      <button  v-on:click="increment">add</button>
    </div>
</template>
<script>
export default {
    computed:{
      age:function(){
          return this.$store.state.age
      }  
    },
    methods:{
      increment:function(){
          this.$store.commit('increment')
      }  
    }
}
</script>

