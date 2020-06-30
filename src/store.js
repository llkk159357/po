import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
 const store=new Vuex.Store({
       state:{
         age:25
       },
       mutations:{
         increment:function(state){
             state.age+=1
         }
       },
      actions:{
          add:function({commit}){
            setTimeout(function(){
                commit('increment')
                
            },2000)
          }
      }

 })

 export default store