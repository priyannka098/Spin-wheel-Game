import React, { useEffect } from 'react'
import "./GamePage.css"
import { useNavigate } from "react-router-dom";
import { useSpinWheelOffer } from "../../Context/SpinWheelContext";


function GamePage() {
  const navigate=useNavigate();
  const { setOffer } = useSpinWheelOffer();
  let wheel;
  let deg;
  const offers=["30% Sitewide Off", "Hot Chocolate Free With Tea", "Free 50g Tea On Purchase Of Rs 500", "Buy 2 Effervescent Tablets & Get 1 Free", "Free Coffee Mug On Purchase Worth 1000+", "Buy 1 Get 1 Free"];
  
  useEffect(()=>{
   wheel=document.getElementById('wheel-spin');
   wheel.addEventListener('transitionend', () => {
    wheel.style.transition = 'none';
    const deviation = deg % 360;
    
    wheel.style.transform = `rotate(${deviation}deg)`;
    
    let finalPos=0;
    if(deviation>30) {
      let move=Math.floor(deviation/60);
      finalPos+=move;
      if(deviation%60>30)
        finalPos++;
    }
    setOffer(offers[finalPos]);
    console.log(finalPos);
    console.log(offers[finalPos]);
    setTimeout(()=> navigate('/FinalPage'), 2000);
   
  });
  },[])

   const handleSubmit=()=>{
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 5s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    

  };
  return (
    <>
    <div className="Game-Page-Container">
      <div className="game-spin">
        <div className="game-spin">
        <img src={require("../../Images/Screen2.png")} className="sm:h-96 max-sm:h-80" id='wheel-spin'></img>
        <img src={require("../../Images/Union.png")} className="union"></img>
        </div>
    <button className="spin" onClick={handleSubmit}>SPIN</button>
    </div>
    </div>
    </>
  )
}

export default GamePage;