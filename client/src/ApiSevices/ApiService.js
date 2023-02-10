import axios from "axios";

export function Create(Name,BookName,BuyDate,PaymentDate,Price,PaymentType,InstallMentType,InstallMentAmount){
    let url="/api/v1/CreateBook"
    let postBody={
        Name: Name,
        BookName:BookName,
        BuyDate:BuyDate,
        PaymentDate:PaymentDate,
        Price:Price,
        PaymentType:PaymentType,
        InstallMentType:InstallMentType,
        InstallMentAmount:InstallMentAmount
    }
    return axios.post(url,postBody).then((res)=>{
        if(res.status===200){
            return true
        }
        else{
            return  false
        }
    }).catch((err)=>{console.log(err)
    return false})
};

export function Read(){
    let URL='http://localhost:5000/api/v1/ReadBookInfo'
    return axios.get(URL).then((res)=>{
        if(res.status===202){
            return res.data['data']
        }
        else {
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    })
};

export function Update(id){
    let url="http://localhost:5000/api/v1/UpdateBookInfo/"+id
    return axios.post(url).then((res)=>{
        if(res.status===200){
            return true
        }
        else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    })
};

export function Delete(id){
    let url="http://localhost:5000/api/v1/DeleteBookInfo/"+ id
    return axios.get(url).then((res)=>{
        if(res.status===200){
            return true
        }
        else{
            return  false
        }
    }).catch((error)=>{
        console.log(error)
        return false
    })
};
