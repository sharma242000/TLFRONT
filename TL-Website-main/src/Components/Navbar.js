import React,{useEffect,useState} from 'react'
import './button.css'
import imgx from "../assets/Image/Asset 11.png"
// import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

const Navbar = () => {
    // const [tllogo, settllogo] = useState(0)

 
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
        document.getElementById("navbar").style.background = "white";
        document.getElementById("tap1").style.color = "rgb(42 132 255)";
        document.getElementById("tap2").style.color = "rgb(42 132 255)";
        document.getElementById("tap3").style.color = "rgb(42 132 255)";
        document.getElementById("tap4").style.color = "rgb(42 132 255)";
        document.getElementById('navbar').style.position = "fixed"
        // document.getElementById("tllogonav").innerHTML = `<img src="../Image/Asset 11.png" alt="" width='16%'/>`;
        // settllogo(1)
      } else {
       
        document.getElementById("navbar").style.background = "rgb(42 132 255)";
        document.getElementById("tap1").style.color = '#fff';
        document.getElementById("tap2").style.color = '#fff';
        document.getElementById("tap3").style.color = '#fff';
        document.getElementById("tap4").style.color = '#fff';
        document.getElementById('navbar').style.position = "sticky"
  
      }
    }
  return (
    <>
   <nav className="navbar navbar-expand-lg" style={{ background:'rgb(42 132 255)' ,position: 'sticky' , width: '100vw' , zIndex : '5',boxShadow:'0 -2px 25px',marginBottom:'0px'}} id = 'navbar'>
  <div className="container-fluid" style={{display: "flex" , flexDirection: 'row-reverse'}}>
      <ul className="navbar-nav" style={{display: 'flex' ,flexDirection: 'row' }}>
        
      <li className="nav-item " style={{padding : "0vw 2vw"}} >
        {/* <div id = "tllogonav"> */}
        <Link to="/">
      <img src={imgx} alt="" width='16%'/>
      </Link>
      </li>
      {/* <BrowserRouter> */}
        <li className="nav-item " style={{padding : "0vw 2vw",color:'#fff'}}>
          <Link className="nav-link tap" to="/Events" id='tap1'  style={{fontWeight:'bold'}}>Events</Link>
        </li>
        <li className="nav-item " style={{padding : "0vw 2vw",color:'#fff'}}>
          <Link className="nav-link tap" to="/Project" id='tap2' style={{fontWeight:'bold'}}>Project</Link>
        </li>
        <li className="nav-item " style={{padding : "0vw 2vw",color:'#fff'}}>
          <Link className="nav-link tap" to="/Machine" id='tap3'  style={{fontWeight:'bold'}}>Machine</Link>
        </li>
        <li className="nav-item " style={{padding : "0vw 2vw",color:'#fff'}}>
          <Link className="nav-link tap" to="/Contacts" id='tap4'  style={{fontWeight:'bold'}}>Contacts</Link>
        </li>
        {/* <li className="nav-item" style={{padding : "0vw 2vw" , position: 'relative' , top: '5.5px'}}>
         <button className="btn third" style={{width:'100px',borderColor:'white',borderRadius:'20px',borderWidth:'3px'}}> Login </button>
        </li> */}
        {/* </BrowserRouter> */}
      </ul>

  </div>
</nav>
    </>
  )
}

export default Navbar