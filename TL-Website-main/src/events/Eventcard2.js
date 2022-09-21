import React from "react";
import "../Components/button.css";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
 
const Eventcard2 = (props) => {
  console.log(props.arrno);
  let arrno = props.arrno
  // const [arrno, setarrno] = useState(2);
  let location = window.location.pathname;
  const [loaded, setloaded] = useState(false)

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


  // useEffect(() => {
  //   return () => {
  //     console.log("Dom loaded");
  //     console.log(loaded);
      if (loaded) {
        console.log(loaded);
  //       console.log("here again");
        if (arrno === 0) {
          document.getElementById("layers3").style.backgroundColor = "#08acf7";
          document.getElementById("layers2").style.backgroundColor = "darkblue";
          // document.getElementById("btns").style.backgroundColor = "red";
          document.getElementById("under").style.backgroundColor = "#05dff5";
        }  if (arrno === 1) {
          console.log("tochange");
          document.getElementById("layers3").style.backgroundColor = "orange";
          document.getElementById("layers2").style.backgroundColor = "red";
          document.getElementById("btns").style.backgroundColor = "red";
          document.getElementById("under").style.backgroundColor = "orange";
        } if (arrno === 2) {
          document.getElementById("layers3").style.backgroundColor = "#05ff64";
          document.getElementById("layers2").style.backgroundColor = "darkgreen";
          document.getElementById("btns").style.backgroundColor = "darkgreen";
          document.getElementById("unders").style.backgroundColor = "#05ff64";
        }
      }
 
  //   };
  // }, [props.arrno]);
  // const [state, setstate] = useState({ playing: false})
  let src = props.videourl;
  let desc = props.description;
  let name = props.name;
  let reglink = props.reglink;
  // const handleOnReady = () => setTimeout(() => setstate({ playing: true }), 100);

  return (
    <>
      <div style={{padding:'10px 0'}}>
        <div className="layers4" id="layers4" style={{ position: "relative" }}>
          <div className="layers3" id="layers3"></div>
          <div className="layers2" id="layers2">
            <h1 className="headings" style={{color:'white'}}>{name}</h1>;
            <div className="underlines" id="unders"></div>
            <div className="descpofevents">
              {" "}
              {desc}
            </div>
            <button className="btnss thirds" id="btns">
              {" "}
              Registration Here!
            </button>
          </div>
          <div className="layers1" id="layers1">
          <ReactPlayer
              url= {src}
             controls={false}
             loop={true}
            //  onReady={handleOnReady()} 
             playing={false}
              style={{ position: "relative", left: "1vw", top: "0.75vw",width:'42vw',height:'23vw' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventcard2;
