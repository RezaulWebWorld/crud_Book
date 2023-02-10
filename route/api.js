const express=require('express')
const BookControler=require('../controller/BookControler')
const router=express.Router()
//Api for Create
router.post('/CreateBook',BookControler.CreateBook)

///Api For Read

router.get('/ReadBookInfo',BookControler.ReadBookInfo)

///Api For Update

router.post('/UpdateBookInfo/:id',BookControler.UpdateBookInfo)


///Api For Delete
router.get('/DeleteBookInfo/:id',BookControler.DeleteBookInfo)




module.exports=router;



















module.exports=router