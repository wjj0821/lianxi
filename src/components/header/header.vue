<template>
  <header class="header">
    <div class="header-i">
      <span class="header-return"><img src="../../../static/返回.png" alt=""></span>

      <p class="header-title" v-if="title">{{title}}</p>
      <p class="header-title" v-else>宁夏景点售票</p>
    </div>
        
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  methods: {
    add() {
      // this.$router.push("/");
    }
  }
};
</script>
<style>
.header{
  width:100%;
  height: 44px;
  background: #53AB3A;
  
}
.header-return{
position:absolute;
left: 20px;
top:7px;
}
.header-return>img{
 
  width:21.85px;
  height:21.85px;
}
.header-title{
  width: 100%;
  height: 44px;
  color:#fff;
  display:block;
font-size: 17px;
text-align: center;
position:absolute;

}

</style>
