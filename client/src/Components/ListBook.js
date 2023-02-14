import React, {useEffect, useState} from 'react';
import {Delete, Read} from '../ApiSevices/ApiService';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router";


const ListBook = (props) => {
    const navigate=useNavigate()
        const [booklists,setBook]=useState([])
       useEffect(()=>{
        Read().then((result) => {
            setBook(result)
        }).catch((err) => {
            console.log(err)
        });
       },[])
        const deleteInfo=(id)=>{
            Delete(id).then((result) => {
                if(result=== true){
                    alert("successFully Delete")
                     navigate("/")
                }
            }).catch((err) => {
                console.log(err)
            });
        }
    const UpdateInfo=(id)=>{
        console.log(id)
    }
        return (
            <div>
                <Table striped>
             <thead>
                   <tr>
                          <th>Name</th>
                           <th>Book Name</th>
                          <th>Book Price</th>
                           <th> Update</th>
                            <th>Delete</th>
                      </tr>
                    </thead>
                       <tbody>
                    {
                        booklists.map((booklists,index)=> <tr>
                        <td>{index+1}</td>
                     <td>{booklists.BookName}</td>
                        <td>{booklists.Price}</td>
                         <td>
                             <Button onClick={UpdateInfo.bind(this,booklists._id)} variant="primary" >
                                    Update
               </Button></td>
                            <td>
                                <Button onClick={deleteInfo.bind(this,booklists._id)} variant="primary" >
                                    Delete
                                </Button></td>
                </tr>)
                    }
                
                   </tbody>
                 </Table>
            </div>
        );

};

export default ListBook;
