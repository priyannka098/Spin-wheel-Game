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
    <div className="Final-Page-Container max-sm:items-start items-center max-sm:justify-center md:justify-center ">
      <div className="screen3-parent-div sm:items-center sm:max-md:w-9/10 max-sm:w-3/5 md:w-3/5">
        <img src={require("../../Images/Screen3.png")} className=" final-wheel-img max-md:hidden"></img>
        <img src={require("../../Images/tab-left-wheel.png")} className="wheel-img max-sm:hidden sm:max-md:block md:hidden"></img>
        <div className='flex flex-col w-7/20 max-sm:w-full sm:max-md:w-1/2'>
              <div className='hidden max-sm:flex justify-center  mb-10 '>
              <img src={require("../../Images/top-wheel.png")} className=" mobile-wheel-img"></img>
              </div>

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

          <span className="disclaim   vertical-space">*You can claim your coupon for 10 mo=inutes only!</span>
        </div>
      </div>
      </div>

    </div>
    </>

  )
}

export default FinalPage