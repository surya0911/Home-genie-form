import { Input } from 'antd';
import React, { useState } from 'react';
import {Row,Col} from "reactstrap"
import db from './Fire/Firebase';
import {addDoc,collection} from 'firebase/firestore';



function Main(props) {
    
    const [officeName, setofficeName] = useState("");
    const [adderessOne, setadderessOne] = useState("");
    const [adderessTwo, setadderessTwo] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [Email, setEmail] = useState("");
    const [webSite, setwebSite] = useState("");
    const [Name, setName] = useState("");
    const [phone, setphone] = useState("");
    const [contactPerson, setcontactPerson] = useState("");
    const [sta, setsta] = useState("");
    const man = /^[A-Za-z]+$/;
    
    
  let selectone = ["State", "TamilNadu", "Kerala", "AndhraPradesh", "Karnataka"]
  let tamil = [
    'Ariyalur',
    'Chennai',
    'Coimbatore',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kanchipuram',
    'Kanyakumari',
    'Karur',
    'Madurai',
    'Nagapattinam',
    'Nilgiris',
    'Namakkal',
    'Perambalur',
    'Pudukkottai',
    'Ramanathapuram',
    'Salem',
    'Sivaganga',
    'Tirupur',
    'Tiruchirappalli',
    'Theni',
    'Tirunelveli',
    'Thanjavur',
    'Thoothukudi',
    'Tiruvallur',
    'Tiruvarur',
    'Tiruvannamalai',
    'Vellore',
    'Viluppuram',
    'Virudhunagar',
  ];
  let Kerala = [
    'Alappuzha',
    'Ernakulam',
    'Idukki',
    'Kannur',
    'Kasaragod',
    'Kollam',
    'Kottayam',
    'Kozhikode',
    'Malappuram',
    'Palakkad',
    'Pathanamthitta',
    'Thrissur',
    'Thiruvananthapuram',
    'Wayanad'
  ];
  let AndhraPradesh = [
    'Adilabad',
    'Anantapur',
    'Chittoor',
    'Kakinada',
    'Guntur',
    'Hyderabad',
    'Karimnagar',
    'Khammam',
    'Krishna',
    'Kurnool',
    'Mahbubnagar',
    'Medak',
    'Nalgonda',
    'Nizamabad',
    'Ongole',
    'Hyderabad',
    'Srikakulam',
    'Nellore',
    'Visakhapatnam',
    'Vizianagaram',
    'Warangal',
    'Eluru',
    'Kadapa'
  ];
  let Karnataka = [
    'Bagalkot',
    'Bangalore Rural',
    'Bangalore Urban',
    'Belgaum',
    'Bellary',
    'Bidar',
    'Bijapur',
    'Chamarajnagar',
    'Chikkamagaluru',
    'Chikkaballapur',
    'Chitradurga',
    'Davanagere',
    'Dharwad',
    'Dakshina Kannada',
    'Gadag',
    'Gulbarga',
    'Hassan',
    'Haveri district',
    'Kodagu',
    'Kolar',
    'Koppal',
    'Mandya',
    'Mysore',
    'Raichur',
    'Shimoga',
    'Tumkur',
    'Udupi',
    'Uttara Kannada',
    'Ramanagara',
    'Yadgir'
  ];
  const handle= async()=>{
const docRef = await addDoc(collection(db, "firedb"), {
  officeName: officeName,
  address1:adderessOne,
  address2:adderessTwo,
  officenumbere:phoneNo,
 email:Email,
website:webSite,
contectperson:Name,
contectpersonnumber:phone,
contectpersonstatus:contactPerson
});
 console.log(await docRef)
  }

  const onChange = e => {
    console.log('Change:', e.target.value);
  };
    return (
        
        <div className="orm" >
            
        <header id="pageHeader" >
          <Col lg={2} ><img src="./"></img>  </Col>
          <Row style={{ display: "flex", marginLeft:"60rem" }}>
  
            <Col lg={5} style={{ display: "flex", justifyContent: "end" }} ><a className='Blog' href='#' >Blog </a></Col>
            <Col lg={4} ><a className='Register' href='#'> Register As A Professional </a></Col>
            <Col lg={3} ><a className='Login' href="#">Login/sign in</a></Col></Row>
  
        </header>
        <div>
        
          <article id="mainArticle">
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <input onChange={(e) => { setofficeName(e.target.value) }} type={Text} id="name" placeholder='Office Name'></input>
              <input onChange={(e) => { setadderessOne(e.target.value) }} type={Text} id="name" placeholder='Address 1'></input>
            </Row>
  <Row>
           <Col> {officeName.length == 0 ? <span style={{ color: "red" }}>pleace enter the name</span> : man.test(officeName) === false ? <span style={{ color: "red" }}>don't use numeric</span> : ""}</Col>
           <Col> {adderessOne.length == 0 ? <span style={{ display:"flex",marginLeft: "57%",marginTop:"0%", color: "red" }}>pleace enter the address 1</span> : man.test(adderessOne) === false ? <span style={{ position: "relative",marginTop:"-2%", marginLeft: "57%",marginTop:"1px", color: "red" }}>please type only alphabets</span> : ""}</Col>
            </Row>
  
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <input onChange={(e) => { setadderessTwo(e.target.value) }} type={Text} id="address" placeholder='Address 2'></input>
              <Row> <select id='con' onChange={(e) => { setsta(selectone[e.target.options.selectedIndex]) }}>
                <option>{selectone[0]}</option>
                <option>{selectone[1]}</option>
                <option>{selectone[2]}</option>
                <option>{selectone[3]}</option>
                <option>{selectone[4]}</option>
              </select>
                <select id='cons'>
  
                  {sta== selectone[0]?<span>pleace enter your state and city </span>:sta == selectone[1] ? tamil.map(e => (<option>{e}</option>)) : sta == selectone[2] ? Kerala.map(e => (<option>{e}</option>)) : sta == selectone[3] ? AndhraPradesh.map(e => (<option>{e}</option>)) : sta == selectone[3] ? Karnataka.map(e => (<option>{e}</option>)) : <option>District</option>}
  
                </select></Row>
  
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              {adderessTwo.length == 0 ? <span style={{ color: "red" }}>pleace enter the address 2</span> : man.test(adderessTwo) === false ? <span style={{ color: "red" }}>please type only alphabets</span> : ""}
              
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Contact Address</h3>
  
              <input onChange={(e) => { setphoneNo(e.target.value) }} maxLength={10} type={'number'} id="opf" placeholder='Office Phone number' style={{ marginTop: "1rem" }}></input>
  
            </Row>
            <Row style={{ display: "flex", justifyContent: "end" }}>
  <Row>
              {phoneNo.length == 0 ? <span style={{ color: "red",display:"flex",marginLeft: "-40%",marginTop:"-20px" }}>pleace enter your office phone number</span> : phoneNo.length == 10 ? "" : <span style={{ color: "red",display:"flex",marginLeft: "-60%",marginTop:"-20px" }}>please type only 10 digits number</span>}
              </Row>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <input onChange={(e) => { setEmail(e.target.value) }} type={Text} id="name" placeholder='Email address'></input>
              <input onChange={(e) => { setwebSite(e.target.value) }} type={Text} id="name" placeholder='Web side address'></input>
            </Row>
  <Row>
           <Col> {Email.length == 0 ? <span style={{ color: "red" }}>pleace enter your E-mail</span> : Email.includes("@") && Email.includes("gmail.com") ? "" : <span style={{ color: "red" }}>pleace enter your correct E-mail address</span>}</Col>
           <Col>{webSite.length == 0 ? <span style={{ color: "red",display:"flex",marginLeft: "57%",marginTop:"3px"}}>pleace enter your Web site</span> : webSite.includes("www.") && webSite.includes(".com") ? "" : <span style={{ color: "red",display:"flex",marginLeft: "57%",marginTop:"-20px"}}>pleace enter your correct website</span>}</Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Contact person</h3>
  
              <input onChange={(e) => { setName(e.target.value) }} type={Text} id="opf" placeholder='Name' style={{ marginTop: "1rem" }}></input>
  
            </Row>
            <Row>
  
              {Name.length == 0 ? <span style={{ color: "red",display:"flex",marginLeft: "57%",marginTop:"-20px"}}>pleace enter contact pereson Name</span> : man.test(Name) === false ? <span style={{ color: "red",display:"flex",marginLeft: "57%",marginTop:"-20px"}}>don't use numeric</span> : ""}
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <input onChange={(e) => { setphone(e.target.value) }} type={'number'} id="name" placeholder='Phone number'></input>
              <input onChange={(e) => { setcontactPerson(e.target.value) }} type={Text} id="name" placeholder='cantact person status'></input>
            </Row>
          
             <Row>
               <Col lg={6}> {phone.length == 0 ? <span style={{ color: "red", position: "absolute",width:"30%" }}>pleace contact person number</span> : phone.length == 10 ? "" : <span style={{ color: "red" }}>please type only 10 digits number</span>}</Col>
              <Col lg={6}>{contactPerson.length == 0 ? <span style={{ display:"flex",marginLeft: "57%", color: "red" }}>pleace enter contact person status</span> : ""}</Col>
              </Row>
            <Row style={{ display: "flex", justifyContent: "space-between",marginLeft:"-5px" }}>
              <h3 style={{width:"205px"}}>Building Details    </h3>
              <input type={'number'} id="sqft" placeholder='Bulding sq.ft' onChange={(e) => { setphoneNo(e.target.value) }} maxLength={10}></input>
              <Row>
              {phoneNo.length == 0 ? <span style={{ color: "red",display:"flex",marginLeft: "-161%",marginTop:"38px" }}>pleace enter Sq.ft</span> : phoneNo.length == 2 ? "" : <span style={{ color: "red",display:"flex",marginLeft: "-237%",marginTop:"38px" }}>only 2 digits</span>}
              </Row>
              <input type={'number'} id="sqft" placeholder='No.of block'></input>
              <input type={'number'} id="sqft" placeholder='No.of floors'></input>
            </Row>
  
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <input type={'number'} id="sqft" placeholder='Floors sq.ft'></input>
              <input type={'number'} id="sqft" placeholder='No.of cabins in a floor'></input>
              <input type={'number'} id="sqft" placeholder='No.of toilets in a floors'></input>
              <input type={'number'} id="sqft" placeholder='No.of parking space'></input>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <input type={'number'} id="sqft" placeholder='Parking space sq.ft'></input>
              <input type={'number'} id="sqft" placeholder='canteen sq.ft'></input>
              <input type={'number'} id="sqft" placeholder='Daining area'></input>
              <input type={'number'} id="sqft" placeholder='play space'></input>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{width:"196px"}}>Electronics</h3>
              <input type={'number'} id="sqft" placeholder='No.of lift-s in a block'></input>
              <input type={'number'} id="sqft" placeholder='No.of A/C in a floor'></input>
              <input type={'number'} id="sqft" placeholder='No.of CCTV in a bulding'></input>
            </Row>
  <Row><button style={{backgroundColor:"black",color:'white',outline:"none",width:"25%",height:"12%",borderColor:"black",borderRadius:"2%",marginLeft:"35%",marginTop:"3%"}} onClick={()=>{handle()}}>Register</button></Row>
          </article>
  
        </div>
        <nav id="mainNav">         <h2 style={{color:"white"}}>Office Registration</h2>
<h1><u>Make It All Our's</u></h1></nav>
      </div>
    );
}

export default Main;