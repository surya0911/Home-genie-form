import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
import db from './Fire/Firebase';
import {Row,Col} from "reactstrap"
import './details.css'



function Art(props) {
    const[store,setstore]=useState([])
    useEffect(()=>{
        const getdata=async()=>{
            const querySnapshot = await getDocs(collection(db, "firedb"));
            let totaldata=[];
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
             console.log(doc.id, " => ", doc.data());
            totaldata.push(doc.data());
            });
            setstore(totaldata);
        };
        
        getdata();
       
    },[])
    

    return (
        <div>
             <header id="pageHeader" >
          <Col lg={2} ></Col>
          <Row style={{ display: "flex", marginLeft:"60rem" }}>
  
            <Col lg={5} style={{ display: "flex", justifyContent: "end" }} ><a className='Blog' href='#' >Blog </a></Col>
            <Col lg={4} ><a className='Register' href='#'> Register As A Professional </a></Col>
            <Col lg={3} ><a className='Login' href="#">Login/sign in</a></Col></Row>
  
        </header>
        <h2 style={{color:"black"}}>Office Data</h2>
            <div style={{position:"absolute",width:"120%"}}>
            <table>
  <tr>
    <th>officeName</th>
    
    <th>  address1</th>
    <th>address2</th>
    <th>officenumber</th>
    <th>email</th>
    <th>website</th>
    <th>contactperson</th>
    <th>contactpersonnumber</th>
    <th>contactpersonstatus</th>
   
    
  </tr>
  {store.map(k=>(
  <tr>
    
    
<td>{k.officeName}</td>
   <td>{k.address1}</td>
    <td>{k.address2}</td>
    <td>{k.officenumbere}</td>
    <td>{k.email}</td>
   <td>{k.website}</td>
    <td>{k.contectperson}</td>
    <td>{k.contectpersonnumber}</td>
    <td>{k.contectpersonstatus}</td>

    
  
  </tr>
  ))}
  </table>
            </div>
            
        </div>
    );
}

export default Art;