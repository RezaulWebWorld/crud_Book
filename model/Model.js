const mongoose=require('mongoose')
const dataSchema=mongoose.Schema({
    Name: {type:String},
    BookName:{type:String},
    BuyDate:{type:Date,default:Date.now()},
    PaymentDate:{type:Date,default:Date.now()},
    Price:{type:String},
    PaymentType:{type:String},
    InstallMentType:{type:String},
    InstallMentAmount:{type:String}
}, {versionKey:false})

const BookModel=mongoose.model('userbooks',dataSchema)
module.exports=BookModel;