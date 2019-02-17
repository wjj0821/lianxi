<template>
    <div class="wrap">
      <Header :msg="msg"/>
      <dropdown />
	  
	     <div class="box">
			   <div v-for="(item,index) in list"  class="ul">
			<dt> <img class="pic" :src="item.img" alt=""></dt>
			    <dd>
					<p>
						<span class="span">{{item.title}}</span>
						<span class="bg">{{item.ad}}</span>
					</p>
						<p class="got">
							<span class="hot">{{item.out}}</span>
							<span class="hot2">{{item.mt}}</span>
						</p>
						<p class="font">
							<span class="color">{{item.num}}</span>
							<span class="pjia">{{item.tank}}</span>
							<span class="font1">
								￥
								<b class="size">{{item.price}}</b>
								起
							</span>
						</p>
						<p class="mt">
							<span>{{item.nm}}</span>
							<span>{{item.kt}}</span>
						</p>
				</dd>
		        </div>

		 </div>
		</div>
	
   
</template>
<script>
import Header from '../../components/header/header'
import dropdown from '../../components/dropdown/index'

import axios from 'axios'
import utils from '../../utils/utils'
export default {
  name: "trip",
  data(){
    return{
      msg:"全部景点",
      list:[]
    }
  },
  components:{
    Header,
    dropdown
  },
  mounted(){
		
	  utils('/api').then(res=>{
			console.log(res);
		  this.list=res
	  })
  
	
  }
};
</script>
<style>
@import url("../../common/css/index.css");
.ul{
	display: flex;
	 padding: 14px 0;
	 border-bottom: 1px solid #ccc;
	 padding-left: 14px;
	
	
}
.ul dd{
	margin-left: 18px;
}


</style>

