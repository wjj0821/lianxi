import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        count:0,
        list:[],
        shopcar:[],
        sum:0,
        getters:{
            getList:(state)=>(id)=>{
                return state.list[id]
            }
        }
    },
    mutations:{
        updata(state,payload){
          state.list={...state.list,...payload}
        },
        shopcar(state,payload){
           const list=payload;
         
            state.shopcar={...state.shopcar,...payload}
        },
        sum(state){
        return state.sum
        }
    },
    actions:{

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        })
export default store;