import React from 'react'
import "./FinalPage.css"

function FinalPage() {


  return (
    <>
    <div className="Final-Page-Container">
      <div className="screen3-parent-div">
        <img src={require("../../Images/Screen3.png")} className=" final-wheel-img"></img>

        <div className='screen3-text-box'>
          <span className="congrats">Congrats! You Won:</span>
          <div className='offers-box vertical-space'>
          <span className="offers">20% Off Coupon</span>
          <span className="offers">on Best Sellers</span>
          </div>
          <div className='coupon-box vertical-space'>
            <span className="coupon">XAXPDF20</span>
            <button className="copy-button">COPY</button>
          </div>
          <button className="screen3-button  vertical-space">Close Panel & Copy</button>

          <span className="disclaim   vertical-space">*You can claim your coupan for 10 mo=inutes only!</span>
        </div>
      </div>

    </div>
    </>

  )
}

export default FinalPage