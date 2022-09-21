import React from "react";
import "../Components/button.css";
 import './events.css'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
// import VideoPlayer from "react-video-js-player";

const Eventcard1 = (props) => {
  console.log(props.arrno);
  let arrno = props.arrno;
  // console.log(arrno);
  // const [arrno, setarrno] = useState(1);
  let location = window.location.pathname;
  const [loaded, setloaded] = useState(false)
  // console.log("here");
  useEffect(() => {
    // console.log("here");
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


  // useEffect(() => {
    
  //   return () => {
  //     console.log("Dom loaded");
  //     console.log(loaded);
      if (loaded) {
        console.log(loaded);
        if (arrno === 0) {
          console.log("whyhere");
          document.getElementById("layer3").style.backgroundColor = "#08acf7";
          document.getElementById("layer2").style.backgroundColor = "darkblue";
          document.getElementById("under").style.backgroundColor = "#05dff5";
        }  if (arrno === 1) {
          console.log("yes here");
          document.getElementById("layer3").style.backgroundColor = "orange";
          document.getElementById("layer2").style.backgroundColor = "red";
          document.getElementById("btn").style.backgroundColor = "red";
          document.getElementById("under").style.backgroundColor = "orange";
        }  if (arrno === 2) {
          document.getElementById("layer3").style.backgroundColor = "#05ff64";
          document.getElementById("layer2").style.backgroundColor = "darkgreen";
          document.getElementById("btn").style.backgroundColor = "darkgreen";
          document.getElementById("under").style.backgroundColor = "#05ff64";
        }
      }
      
  //   };
  // }, [props.arrno,loaded]);
   
  // const [state, setstate] = useState({ playing: false})
   let src = props.videourl;
   let desc = props.description;
   let name = props.name;
   let reglink = props.reglink;
  //  const handleOnReady = () => setTimeout(() => setstate({ playing: true }),1);
  
  return (
    <>
      <div style={{padding:'10px 0'}}>
        <div className="layer4" id="layer4" style={{ position: "relative"}}>
          <div className="layer3" id="layer3"></div>
          <div className="layer2" id="layer2">
            <h1 className="heading" style={{color:'white',textDecorationColor:'white'}}>{name}</h1>;
            <div className="underline" id="under"></div>
            <div className="descpofevent">
              {" "}
              {desc}
            </div>
           { reglink==="nil"  ?(                     
            <button className="btns thirds" id="btn" >
              {" "}
              Registration soon!
            </button>):(<button className="btns thirds" id="btn" >
              {" "}
              Registration Here!
            </button>)
            }
          </div>
          <div className="layer1" id="layer1">
            <ReactPlayer
              url= {src}
             controls={false}
             loop={true}
            //  onReady={handleonerady()} 
             playing={false}
              style={{ position: "relative", left: "1vw", top: "0.75vw",width:'42vw',height:'23vw' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventcard1;
