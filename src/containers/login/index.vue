<template>

  <div>
    <div class="header">
        <p class="header-title" >登陆</p>
    </div>

      <section>
        <input type="text" placeholder="Eamil" class="username" v-model="username">
        <input type="password" placeholder="Password" class="psd" v-model="password">
        <button class="btn" @click="submit">登陆</button>

      </section>

  </div>

</template>
<script>
  import axios from "axios";
  export default{
    name:"login",
    data(){
      return{
        username:"",
        password:""
      }
    },
    mounted(){;
    },
    methods:{
      submit(){
        const username=this.username;
        const password=this.password;
        if(username===""&&password==="")return;
          axios.get("/login",{
            params:{
              username,
              password
        }
          }).then(res=>{

            if(res.data.code==0){

           this.$router.push("/vuexx")
            }
          })

      }
    }


  }

</script>
<style>
  .header{
    width:100%;
    height: 44px;
    background: #53AB3A;
  }
  .header-title{
    width: 100%;
    height: 44px;
    color:#fff;
    display:block;
    line-height: 44px;
    text-align: center;
  }
  input{
    width:90%;
    margin-left: 5%;
    height:30px;
    border:1px solid #ccc;
    margin-top:20px;
  }
  .btn{
    width:90%;
    margin-left: 5%;
    height:30px;
    border:none;
    border:1px solid #ccc;
    margin-top:20px;
    background: #E5E5E5;
  }
</style>
