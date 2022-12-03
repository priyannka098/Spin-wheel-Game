import React, { useState } from 'react'
import "./StartPage.css"
import { useNavigate } from "react-router-dom";


function StartPage() {
  const[email,setEmail]=useState("");
  const[number,setNumber]=useState("");
  const navigate = useNavigate();

   const handleSubmit=(event)=>{ 
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))|| email==="")
    {
      alert("Please enter a valid email");
      return;
    }
    const checkinput=document.getElementById("consent")
     const checkvalue=checkinput.checked;
     if(checkvalue!==true){
      alert("Please provide Consent"); 
     } else{
    event.preventDefault();
    fetch('https://httpbin.org/post', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: {
      "email" :email,
      "phone":number    
     }
    });
    navigate('/GamePage');
   }
  }


  return (
    <>
        <div className="  start-container items-center max-sm:items-start sm:max-md:justify-start max-sm:justify-center md:justify-center">
            <div className="parent-div w-13/20  h-500  items-center justify-between max-sm:w-full max-sm:justify-center  max-sm:pt-0  max-sm:px-5  max-sm:h-full max-sm:items-start sm:max-md:w-9/10  ">
             <div className="wheel-div">
            <img src={require("../../Images/wheel.png")} className="wheel-img max-md:hidden"></img>
            <img src={require("../../Images/tab-left-wheel.png")} className="wheel-img max-sm:hidden sm:max-md:block md:hidden"></img>
            </div>            
            <div className='flex flex-col w-7/20 max-sm:w-full sm:max-md:w-1/2'>
              <div className='hidden max-sm:flex justify-center  mb-10 '>
              <img src={require("../../Images/top-wheel.png")} className=" mobile-wheel-img"></img>
              </div>
          
              
              
            <div className="login-div w-full max-md:w-full">
                <div className='heading-div  max-md:flex'>
                  <span className="heading  text-2xl max-sm:text-3xl">This Is how EngageBud</span>
                  <span className="heading text-2xl max-sm:text-3xl">looks like in action!</span>
                  </div>
            
                  <input type="email"   pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                 required className="input-box vertical-space"  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                  
                  <input type="tel"  pattern="[+]{1}[0-9]{11,14}" required className="input-box  vertical-space" placeholder="Phone number" onChange={(e)=>setNumber(e.target.value)}/>
                  
   
                  <div  className="check-box vertical-space">
                  <div className=" check-size">
                  <input type="checkbox"  id='consent' />
                  </div>
                  <div className='consent-box'>
                      <span htmlFor="consent" className="checkbox-label"> I agree to receiving automated messages at the number I have provided.
                      </span>
                      <span className="checkbox-label">
                    Consent  is not  a condition to purchase.
                    </span>  
                    </div>
                </div>

                <button type="submit" className="button vertical-space" onClick={handleSubmit}>Try your luck</button>
                
                <span className="terms vertical-space">*You can spin the wheel only once! *If you win, you can claim your coupan for 10 mins only!</span>
                <div className='unlucky vertical-space'>
                No, I don't feel lucky
                </div>

                </div>
                </div>
          </div>  
        </div>
    </>
  )
}

export default StartPage;