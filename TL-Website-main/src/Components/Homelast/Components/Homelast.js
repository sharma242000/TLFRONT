import React from "react";
import bridge from "../img/bridge.jpg";
import vision from "../img/vision.jpg";
import tiger from "../img/tiger.jpg";
import "../Homelast.css"
const Homelast = () => {
  return (
    <>
    <div style={{position:"relative"}}>
      <div className="background" >
          <img className="bridge" src={bridge} alt="bridge" style={{opacity: '0.68'}} />
          <div className="first">
            <h1>About</h1> <br />
            <p>
              We, Tinkerers' Lab are always open for people with hunger of
              learning with an aim of encouraging hands-on experience for
              thinkers and innovators to shape those crazy creative ideas out
              there into something that looks magic.
            </p>
            
          </div>
          
          <img className="vision" src={vision} alt="vision" style={{opacity: '0.68'}} />
          <div className="second">
            <h1>Our Vision</h1> <br />
            <p>
            A Tinkerer is someone who enjoys experimenting We, at Tinkerers Laboratory are always open for such people with an aim to grow innovators and thinkers, converting their creative ideas into actual engineering products. let them have limitless hands-on experience.
            </p>
            
          </div>
          <img className="mission" src={tiger} alt="tiger" style={{opacity: '0.68'}} />
          <div className="third">
            <h1>Our Mission</h1> <br />
            <p>
            A Tinkerer is someone who enjoys experimenting We, at Tinkerers' Laboratory are always open for such people with an aim to grow innovators and thinkers, converting their creative ideas into actual engineering products, let them have limitless hands-on experience.
            </p>
            
          </div>
          
        </div>
        </div>
    </>
  );
};

export default Homelast;
