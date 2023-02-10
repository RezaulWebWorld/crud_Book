const express=require('express')
const router=require('./route/api')
const app=new express()
const bodyParser=require('body-parser')
const path= require('path')



//Security Middleware

const rateLimit=require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')



//Database
const mongoose=require('mongoose')




/// Security Middleware Implement

app.use(helmet())
app.use(cors())
app.use(xss())
app.use(hpp())
app.use(mongoSanitize())




// Body Parser Implement
app.use(bodyParser.json())
//rate Limiting Implement
const limiter=rateLimit({windowMS:15*60*1000, max:3000})
app.use(limiter)

///Database Connection

const uri='mongodb+srv://<username>:<passward>@cluster0.zz8evxy.mongodb.net/BookLibrary?retryWrites=true&w=majority'
const option={user:"rezaul",pass:"01626484050",autoIndex:true}
mongoose.connect(uri, option,(err)=>{
  if(err){
    console.log(err)
  }
  console.log("Database Connection Successful")
})
///Scafold Connection
// app.use(express.static('client/build'))
// app.get("*", function(req,res){
//   res.sendFile(path.resolve(__dirname,'client','build','index.html'))
// })

//api connection
app.use("/api/v1", router)



module.exports=app;