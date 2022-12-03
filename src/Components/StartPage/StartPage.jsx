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
                  <div className='relative w-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" absolute w-6 h-6 top-7 left-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
                  <input type="email"   pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                 required className="input-box vertical-space pl-9 m-0 w-full"  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                 </div>
                 <div className='relative w-full'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" absolute w-6 h-6 top-7 left-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

                  <input type="tel"  pattern="[+]{1}[0-9]{11,14}" required className="input-box  vertical-space pl-9 m-0 w-full" placeholder="Phone number" onChange={(e)=>setNumber(e.target.value)}/>
                  </div>
                  
   
                  <div  className="check-box vertical-space">
                  <div className=" check-size">
                  <input type="checkbox" class="h-5 w-5 bg-black border-none shadow-none" id='consent'/>
                
                
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
                <div className='flex items-center'>
                <span className='unlucky'>No, I don't feel lucky</span> <div className='cross ml-2'></div>
                </div>

                </div>
                </div>
          </div>  
        </div>
    </>
  )
}

export default StartPage;