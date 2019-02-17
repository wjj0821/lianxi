module.exports.request = function(app) {
  app.get("/api", (req, res) => {
    let data = require("../../src/mock/data.json");
    res.send(data);
  });
};
module.exports.list = function(app) {
  app.get("/list", (req, res) => {
    let data = require("../../src/mock/loag.json");
    res.send(data);
  });
};
module.exports.imgs=function(app){
  app.get("/imgs",(req,res)=>{
    let data=require("../../src/mock/imgs.json");
    console.log(data);
    res.send(data);
  })
}
const mysql=require("mysql");
const url=require("url");
const connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"123321",
  database:"user"
})

connection.connect()
module.exports.login=function(app){
  app.get("/login",(req,res)=>{
     const urls=url.parse(req.url,true);
     const {username,password}=urls.query;
     console.log(username,password);
     const $sql="SELECT * from  users WHERE username='"+username+"' and password='"+password+"'";
    connection.query($sql,function(error,result){
      if(error)throw error;
      if(result.length>0){
        res.json({
          code:0,
          isSuccess:true

        })
      }else{
        res.json({
          code:1,
          isSuccess:false
        })
      }
    })

  })
}

