<template>
    <div>

     {{age}}
     <button  v-on:click="add">add</button>
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
        add:function(){
            this.$store.dispatch('add')
        }
    }
}
</script>
