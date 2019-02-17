<template>
    <div class="wrap">
          <div class="header">
            <span>取消</span>
            <h4>新增出行人</h4>
            <span>完成</span>
        </div>
      <div class="con">
        <div class="con-item">
        <span>姓名</span>
        <input type="text" placeholder="请输入联系人姓名">
        </div>
        <div class="con-item">
        <span>证件类型</span>
       <div class="en">
         <span>身份证</span>
         <img src="../../static/img/右箭头@2x.png" alt="">
       </div>
        </div>
        <div class="con-item">
        <span>证件号</span>
        <input type="text" placeholder="请输入证件号">
        </div>
      </div>
    </div>
</template>

<script>
export default {
 name:"user"
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
  font-weight: normal;
}
.wrap{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #E5E5E5;
}
.header{
  width:100%;
  height: 44px;
  background: #53AB3A;
  display: flex;
  line-height: 44px;
  padding:0 16px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}
.header>span{
    
font-size: 14px;
color: #FFFFFF;
}
.header>h4{
    font-size: 17px;
color: #FFFFFF;
text-align: center;
}
.header>span:nth-child(2){
    position:absolute;
    right:16px;
}
.con-item{
  width:100%;
  height: 50px;
  display: flex;
  background: #fff;
}
.con-item>span{
  padding-left: 16px;
  line-height: 50px;
  box-sizing: border-box;
  font-size: 15px;
color: #333333;

}
.con-item>input{
  
  line-height: 50px;
  border:none;
  position:absolute;
  left: 97px;

  box-sizing: border-box;
  font-size: 14px;
color: #999999;

}
.en{
 
  width:100%;
  left: 97px;
  height: 50px;
  line-height: 50px;
  display: flex;
  position:absolute;
  font-size: 15px;

}
.en>img{
  width:12px;
  height: 12px;
  position: absolute;
 left:254px;
 top:19px;
}
</style>
