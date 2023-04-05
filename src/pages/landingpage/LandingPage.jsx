import "./LandingPage.css";
import React, { useState } from "react";
import Landinglogo from "../../assets/2766594.png";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";

function LandingPage() {
  const [toggle, setToggle] = useState(false);
  const handleLogin = () => {
    setToggle(false);
  };

  const handleSignup = () => {
    setToggle(true);
  };
  return (
     <div>
       {/* <div className="both-container">
         <div className="left-container">
           <div className="logo-box">
             <img src={Landinglogo} alt="Landing Logo" />
           </div>
           <div className="landing-heading">
             <h4>ONLINE BOOK SHOPPING</h4>
           </div>
         </div>
       </div> */}
      
        {toggle ? (
          <SignUp onSignUp={handleLogin} />
        ) : (
          <LogIn onLogIn={handleSignup} />
        )}
      </div>
    
  );
}

export default LandingPage;
