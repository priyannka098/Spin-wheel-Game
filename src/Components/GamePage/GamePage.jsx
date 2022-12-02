import React from 'react'
import "./GamePage.css"

function GamePage() {
  return (
    <>
    <div className="Game-Page-Container">
      <div className="game-spin">
      
        <img src={require("../../Images/Screen2.png")} className="wheel-img"></img>
    
    
    <button className="spin">SPIN</button>
  
    </div>
    </div>
    </>
  )
}

export default GamePage;