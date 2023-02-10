const app=require('./app')

app.listen(5000,function(err){
  if(err){
    console.log("error in ", err)
  }
  console.log("Server is running Successful on 5000")
})