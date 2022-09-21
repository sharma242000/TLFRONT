import React from 'react'
import Eventcard1 from '../events/Eventcard1';
import Eventcard2 from '../events/Eventcard2';
import { useState } from 'react';
import axios from "axios";


const baseURL = "http://localhost:8000/eventlinks/";

function Event() {
  let arrno = 0;

//  window.location.reload();
// Here set an objecct like be
let array = [{ videourl : "https://www.youtube.com/watch?v=wCu9W9xNwtI&ab_channel=Lesics"},{},{},{},{},{}]
// inside object key pair


const [post, setPost] = React.useState(null);

React.useEffect(() => {
  axios.get(baseURL).then((response) => {
    setPost(response.data);
    
  });
}, []);

if (!post) return null
  return (
    <>
    <div style={{backgroundColor:'lightgray'}}>
      {
        post.map((e,index)=>{
          if (arrno === 0) {
            console.log("if1");
            arrno = 1
          }else if(arrno === 1){
            console.log("if2");
            arrno = 2
          }else if(arrno === 2){
            console.log("if3");
            arrno = 0
          }
         if (index%2 === 0) {
          console.log(arrno);
          return <Eventcard1 videourl={e.link} key={index} arrno={arrno} description={e.description} name={e.name} reglink={e.reglink}/>
         
         }
         else{
          console.log(arrno);
          return <Eventcard2 videourl={e.link} key={index} arrno={arrno} description={e.description} name={e.name} reglink={e.reglink}/>
         }
        })
      }
     
    
    </div>
    </>
  )
}

export default Event