<template>
    <div>
      {{getList}}
       <div v-for="(item,index) in updata" :key="index" class="con" >
         <h4>名称:{{item.name}}</h4>
         <div>单价:{{item.price}}元</div>
         <button v-if="!item.flag" @click="add(updata,index)">加入购物车</button>
         <div class="en" v-if="item.flag">
           <span  @click="jian(updata,index)">-</span>
           <span>{{item.count}}</span>
           <span @click="add(updata,index)">+</span>
         </div>
       </div>
        <div style="margin-top:10px;">总数:{{sum}}</div>
       <img src="../../static/img/我的订单@2x.png" alt="">
    </div>
</template>

<script>
import utils from '../../utils/utils'
import {mapState,mapMutations,mapGetters} from "vuex";
export default {
  name:"vuex",
  data(){
    return{
     list:[],
       
    }
  },
  computed:{
    ...mapState({
      updata:state=>state.list,
      sum:state=>state.sum
    }),
    // ...mapGetters({
    //     getList:function(){
    //    return this.$store.getters(0) 
    //     }
    // })
  },
  mounted(){
   console.log(this.$store)
    utils("/imgs").then(res=>{
      this.$store.commit('updata',res)
    })
  },
  methods:{
  //  add(){
  //   this.$store.commit('add')
  //  },
  //  reduce(){
  //  this.$store.commit('jian')
   
  //  }
  ...mapMutations({
   
  }),
     add(data,index){
          data[index].count++;
          if(data[index].count>0){
          data[index].flag=true;   
          }
     },
     jian(data,index){
       console.log(data);
       data[index].count--;
       if(data[index].count<1){
           data[index].flag=false;
       }
    
     },
     
  },
  
}
</script>

<style>
.con{
  width:100%;
  height: 100px;
  background:pink;
  margin-top:20px;
  font-size: 14px;
}
.con>h4{
  font-size: 18px;
  line-height: 44px;
}
button{
  width:80px;
  height:40px;
  margin-top:10px;
  border:none;
  border:1px solid skyblue;
  background: #ccc;
}
img{
  width:44px;
  height:44px;
  position: fixed;
  bottom:20px;
  right:20px;
}
.en{
  font-size: 20px;
}
</style>
