import React, {useRef} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Create} from "../ApiSevices/ApiService";
import Loader from "./Common/Loader";

const InfoForm = () => {
    let Name,BookName,BuyDate,PaymentDate,Price,PaymentType,InstallMentType,InstallMentAmount=useRef()
    let loader=useRef()
    const saveInfo=()=>{
        const userName=Name.value
        const bookName=BookName.value
        const buyDate=BuyDate.value
        const paymentDate=PaymentDate.value
        const price=Price.value
        const payment=PaymentType.value
        const installment=InstallMentType.value
        const instalmentMoney=InstallMentAmount.value

       // if(isEmpty(userName)){
       //     ErrorToast("UserName Required")
       // }
       //  else if(isEmpty(bookName)){
       //      ErrorToast("bookName Required")
       // }
        loader.classList.remove("d-none")
        Create(userName,bookName,buyDate,paymentDate,price,payment,installment,instalmentMoney).then((Result)=>{
            loader.classList.add("d-none")
            if(Result){
                console.log("Data Insert Success")
            }
            else{
                console.log("Error")
            }
        })
    }
    return (
       <>
           <Form className="container">
               <Row className="mb-3">
                   <Form.Group as={Col} controlId="formGridEmail">
                       <Form.Label>Name</Form.Label>
                       <Form.Control ref={(input)=>Name=input} type="text" placeholder="Enter Full Name" />
                   </Form.Group>

                   <Form.Group as={Col} controlId="formGridPassword">
                       <Form.Label>BookName</Form.Label>
                       <Form.Control ref={(input)=>BookName=input} type="text" placeholder="Book Name" />
                   </Form.Group>


                   <Form.Group as={Col} controlId="formGridCity">
                       <Form.Label>Price</Form.Label>
                       <Form.Control ref={(input)=>Price=input} />
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formGridAddress1">
                       <Form.Label>BuyDate</Form.Label>
                       <Form.Control ref={(input)=>BuyDate=input} type="date" />
                   </Form.Group>


                   <Form.Group className="mb-3" controlId="formGridAddress1">
                       <Form.Label>PaymentDate</Form.Label>
                       <Form.Control ref={(input)=>PaymentDate=input} type="date" />
                   </Form.Group>


                   <Form.Group as={Col} controlId="formGridState">
                       <Form.Label>PaymentType</Form.Label>
                       <Form.Select ref={(input)=>PaymentType=input} defaultValue="Choose...">
                           <option>Full</option>
                           <option>Installment</option>
                       </Form.Select>
                   </Form.Group>

                   <Form.Group as={Col} controlId="formGridZip">
                       <Form.Label >InstallMentType</Form.Label>
                       <Form.Control ref={(input)=>InstallMentType=input} />
                   </Form.Group>
                   <Form.Group as={Col} controlId="formGridZip">
                       <Form.Label >InstallMentAmount</Form.Label>
                       <Form.Control ref={(input)=>InstallMentAmount=input}/>
                   </Form.Group>


               </Row>


               <Button onClick={saveInfo} variant="primary" type="submit">
                   Submit
               </Button>
           </Form>
           <div ref={(div)=>loader=div} className="d-none">
                    <Loader/>
           </div>
       </>
    );
};

export default InfoForm;