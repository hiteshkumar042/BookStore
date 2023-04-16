import "./LandingPage.css";
import React, { useState } from "react";
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
        {toggle ? (
          <SignUp onSignUp={handleLogin} />
        ) : (
          <LogIn onLogIn={handleSignup} />
        )}
      </div>
    
  );
}

export default LandingPage;
