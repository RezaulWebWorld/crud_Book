const BookModel=require('../model/Model')


//Create Controller

exports.CreateBook=(req,res)=>{
    let reqBody=req.body;
    BookModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Failed to create a book", data:err})
        }
        else {
            res.status(200).json({status:"Successfully Book Information Stored", data:data})
        }
    })
}
// Read Book Info
exports.ReadBookInfo=(req,res)=>{
    const Query={}
    BookModel.find(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"Error Update  book info ", data:err})
        }
        else {
            res.status(202).json({status:"Successfully Updated Book Information ", data:data})
        }
    })

}

//Update Book Info
exports.UpdateBookInfo=(req,res)=>{
    const id=req.params.id
    const Query={_id:id}
    const reqBody=req.body
    BookModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Error Update  book info ", data:err})
        }
        else {
            res.status(200).json({status:"Successfully Updated Book Information ", data:data})
        }
    })
}

exports.DeleteBookInfo=(req,res)=>{
    const id =req.params.id
    const Query={_id:id}
    BookModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"Failed to Delete book info ", data:err})
        }
        else {
            res.status(200).json({status:"Successfully Deleted Book Information ", data:data})
        }
    })
}