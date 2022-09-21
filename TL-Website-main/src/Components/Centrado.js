import { useState,useEffect } from "react"
import React from 'react'
import './Centrado.css'
import Card from "./Card"
import left from './Asset17.png'
import right from './Asset15.png'
import axios from "axios";
import { transform } from "framer-motion"


const baseURL = "http://localhost:8000/project/";

const Centrado = () => {

  
     const location =  window.location.pathname;
     console.log(location);
    const [loaded, setloaded] = useState(false)
   let  currdeg  = 0;
   
 useEffect(() => {
  if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    setloaded(true)
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        setloaded(true);
    });
}
 }, [location])
    


function rotate(e){
  if(e==="n"){
    currdeg = currdeg - 60;
  }
  if(e==="p"){
    currdeg = currdeg + 60;
  }
  if (loaded) {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll('.item')
 
  carousel.setAttribute('style'," -webkit-transform: rotateY("+ currdeg +"deg); -moz-transform: rotateY("+ currdeg +"deg); transform: rotateY("+ currdeg +"deg);")
  
//   items.setAttribute('style'," -webkit-transform: rotateY("+ -currdeg +"deg); -moz-transform: rotateY("+ -currdeg +"deg); transform: rotateY("+ -currdeg +"deg);")
   console.log(items);
   items.forEach(e=>e.setAttribute('style'," -webkit-transform: rotateY("+ -currdeg +"deg); -moz-transform: rotateY("+ -currdeg +"deg); transform: rotateY("+ -currdeg +"deg);"))
}
}
const [post, setPost] = React.useState(null);
const style ={
  borderRadius: "10px",
  transform

}
React.useEffect(() => {
  axios.get(baseURL).then((response) => {
    setPost(response.data);
    
  });
}, []);

if (!post) return null;
  return (
    <>
    <div className="container1" style={{padding:'70px 0',position:'relative'}}>
  <div className="carousel">
    <div className="a">
      <div className="item" style={trans}><Card/></div>
    </div>
    <div className="b">
      <div className="item"><Card/></div>
    </div>
     <div className="c">
      <div className="item"><Card/></div>
    </div>
    <div className="d">
      <div className="item"><Card/></div>
    </div>
    <div className="e">
      <div className="item"><Card/></div>
    </div>
    <div className="f">
      <div className="item"><Card/></div>
    </div> 
    
  </div>
</div>
<div className="next" onClick={()=>rotate('n')}><img src={right} alt='' style={{width:'3vw'}}/></div>
<div className="prev" onClick={()=>rotate('p')}><img src={left} alt='' style={{width:'3vw'}}/></div>

    </>
  )
}

export default Centrado