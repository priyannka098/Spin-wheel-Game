import React, { useState } from 'react'
import "./FinalPage.css"
import { useSpinWheelOffer } from "../../Context/SpinWheelContext";

function FinalPage() {
  const[copyText,setCopyText]=useState('COPY')
  const { offer } = useSpinWheelOffer();


  const copyCode=()=>{
    const couponBox=document.getElementById('coupon');
     const value=couponBox.innerText;
     
     navigator.permissions
    .query({ name: "clipboard-write" })
    .then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(value).then(
          () => {
           setCopyText("COPIED") 
        } ) //to copy text from clipboard
      }

    });
  
  }
  const closePanel=()=>{
    const couponBox=document.getElementById('coupon');
     const value=couponBox.innerText;
     
     navigator.permissions
    .query({ name: "clipboard-write" })
    .then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(value).then(  //write on clipboard
          () => {
            window.open("about:blank", "_self"); // to reset the current tab to blank
          
        } ) 
      }

    });
  }
  
  return (
    <>
    <div className="Final-Page-Container">
      <div className="screen3-parent-div">
        <img src={require("../../Images/Screen3.png")} className=" final-wheel-img"></img>

        <div className='screen3-text-box'>
          <span className="congrats">Congrats! You Won:</span>
          <div className='offers-box vertical-space'>
          <span className="offers">{offer}</span>
          </div>
          <div className='coupon-box vertical-space'>
            <span className="coupon" id="coupon">XAXPDF20</span>
            <button className="copy-button" onClick={copyCode}>{copyText}</button>
          </div>
          <button className="screen3-button  vertical-space " onClick={closePanel}>Close Panel & Copy</button>

          <span className="disclaim   vertical-space">*You can claim your coupan for 10 mo=inutes only!</span>
        </div>
      </div>

    </div>
    </>

  )
}

export default FinalPage