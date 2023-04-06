import React, { useState } from "react";
import "./LogIn.css";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { login } from "../../services/userservices";
import Landinglogo from "../../assets/2766594.png";


// Regex pattern
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function LogIn(props) {

  const [logInObj, setLogInObj] = useState({ email: "", password: "" });
  const [regexObj,setRegexObj] = useState({
    emailBorder:false,
    emailHelper:"",
    passwordBorder:false,
    passwordHelper:"",
  })

  const handleClick=()=>{
    props.onLogIn()
  }

  //get teh email from input field and set in loginobj
  const getEmail=(event)=>{
    console.log(logInObj.email)
    setLogInObj((prev)=>({...prev,email:event.target.value}))
  }

  //get the password from input and set in loginobj
  const getPassword = (event)=>{
    console.log(logInObj.password)
    setLogInObj((prev)=>({...prev,password:event.target.value}))
  }
  //Submitting or clik on Login button
  const submit = async ()=>{
    console.log(logInObj)
    let emailTest = emailRegex.test(logInObj.email);
    let passwordTest = passwordRegex.test(logInObj.password);

    //for email
    if(emailTest===true){
      setRegexObj((prev)=>({...prev,emailBorder:false,emailHelper:""}))
    }else if(emailTest===false){
      setRegexObj((prev)=>({...prev,emailBorder:true,emailHelper:"Invalid Email"}))
    }
    //for password
    if(passwordTest===true){
      setRegexObj((prev)=>({...prev,passwordBorder:false,passwordHelper:""}))
    }else if(emailTest===false){
      setRegexObj((prev)=>({...prev,passwordBorder:true,passwordHelper:"Invalid Password"}))
    }

    if (emailTest === true && passwordTest === true) {
      let response = await login(logInObj);
      localStorage.setItem("token", response.data.result.accessToken);
      console.log(response);
      console.log(response.data.message);
    }

    
      
  }
  return (

    <div className="full-screen">

      <div className="left-container">
        <div className="logo-box">
          <img src={Landinglogo} alt="Landing Logo" />
        </div>
        <div className="landing-heading">
          <h4>ONLINE BOOK SHOPPING</h4>
        </div>
      </div>
   
  
    <div className="login-main">
      <Box
      sx={{
        display: 'flex',  
        flexWrap: 'wrap',
        '& > :not(style)': {
          p:5,
          width: '25vw',
          
        },
      }}
    >
     <Paper elevation={4}>
     <div className="login-signup">
        <h2 style={{color:"red"}} className="login-h">LOGIN</h2>
        <h2 onClick={handleClick}>SIGNUP</h2>
      </div>
      <div className="email-input">
        <TextField onChange={getEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} fullWidth size="small" label="Email" id="fullWidth" />
      </div>
    
      <div className="pass-input">
        <TextField onChange={getPassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} fullWidth size="small" label="Password" id="fullWidth" />{" "}
        <p className="forget-option">Forget Password ?</p>
      </div>
      <div className="login-btn">
        <button onClick={submit} className="login-btn-btn">Login</button>
      </div>
      <div className="orOption">
        <h5>----- OR ------</h5>
      </div>
      <div className="fb-gg">
          <button className="fb-btn">facebook</button>
          <button className="gg-btn">Google</button>
      </div>

    </Paper>
  </Box>  
    </div>
    </div>
  )
}

export default LogIn;
