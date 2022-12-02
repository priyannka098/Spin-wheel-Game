import React from 'react'
import "./StartPage.css"


function StartPage() {




  return (
    <>

    
        <div className="container">
            <div className="parent-div">
             <div className="wheel-div">
            <img src={require("../../Images/wheel.png")} className="wheel-img"></img>
            </div>

            <div className="login-div">
                <div className='heading-div'>
                  <span className="heading">This Is how EngageBud</span>
                  <span className="heading">looks like in action!</span>
                  </div>
                  {/* <div className="" data-required="joe@gmail.com"> */}
                  <input type="text"  className="input-box vertical-space"  placeholder="Email"/>
                  <input type="number"  className="input-box  vertical-space" placeholder="Phone number"/>
   
                  <div  className="check-box vertical-space">
                  <div className=" check-size">
                  <input type="checkbox"  id='consent'/>
                  </div>
                  <div className='consent-box'>
                      <span htmlFor="consent" className="checkbox-label"> I agree to receiving automated messages at the number I have provided.
                      </span>
                      <span className="checkbox-label">
                    Consent  is not  a condition to purchase.
                    </span>  
                    </div>
                </div>

                <button className="button vertical-space">Try your luck</button>
                <span className="terms vertical-space">*You can spin the wheel only once! *If you win, you can claim your coupan for 10 mins only!</span>
                <div className='unlucky vertical-space'>
                No, I don't feel lucky
                </div>

                </div>
          </div>  
        </div>
    </>
  )
}

export default StartPage;