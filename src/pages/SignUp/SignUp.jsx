import "./SignUp.css";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { signup } from "../../services/userservices";
import { TextField } from "@mui/material";
import Landinglogo from "../../assets/2766594.png";

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const phoneRegex = /^([9]{1})([234789]{1})([0-9]{8})$/;

function SignUp(props) {
 
  const handleClick = () => {
    props.onSignUp();
  };
  const [signUpObj, setSignUpObj] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [regexObj, setRegexObj] = useState({
    nameBorder: false,
    nameHelper: "",
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
    phoneBorder: false,
    phoneHelper: "",
  });

  //get the name from input field and set in SignUpobj
  const getName = (event) => {
    console.log(signUpObj.fullName);
    setSignUpObj((prev) => ({ ...prev, fullName: event.target.value }));
  };

  //get the email from input field and set in loginobj
  const getEmail = (event) => {
    console.log(signUpObj.email);
    setSignUpObj((prev) => ({ ...prev, email: event.target.value }));
  };

  //get the password from input and set in loginobj
  const getPassword = (event) => {
    console.log(signUpObj.password);
    setSignUpObj((prev) => ({ ...prev, password: event.target.value }));
  };
  //get the Mobile from input and set in loginobj
  const getphone = (event) => {
    console.log(signUpObj.phone);
    setSignUpObj((prev) => ({ ...prev, phone: event.target.value }));
  };

  //Submitting or clik on SignUp button
  const submit = async () => {
    console.log(signUpObj);
    let nameTest = nameRegex.test(signUpObj.fullName);
    let emailTest = emailRegex.test(signUpObj.email);
    let passwordTest = passwordRegex.test(signUpObj.password);
    let phoneTest = phoneRegex.test(signUpObj.phone);
    //for name
    if (nameTest === true) {
      setRegexObj((prev) => ({ ...prev, nameBorder: false, emailHelper: "" }));
    } else if (nameTest === false) {
      setRegexObj((prev) => ({
        ...prev,
        nameBorder: true,
        nameHelper: "Invalid Name",
      }));
    }

    //for email
    if (emailTest === true) {
      setRegexObj((prev) => ({ ...prev, emailBorder: false, emailHelper: "" }));
    } else if (emailTest === false) {
      setRegexObj((prev) => ({
        ...prev,
        emailBorder: true,
        emailHelper: "Invalid Email",
      }));
    }
    //for password
    if (passwordTest === true) {
      setRegexObj((prev) => ({
        ...prev,
        passwordBorder: false,
        passwordHelper: "",
      }));
    } else if (passwordTest === false) {
      setRegexObj((prev) => ({
        ...prev,
        passwordBorder: true,
        passwordHelper: "Invalid Password",
      }));
    }
    //for Mobile
    if (phoneTest === true) {
      setRegexObj((prev) => ({
        ...prev,
        mobileBorder: false,
        mobileHelper: "",
      }));
    } else if (phoneTest === false) {
      setRegexObj((prev) => ({
        ...prev,
        mobileBorder: true,
        mobileHelper: "Invalid Password",
      }));
    }
    //if all patten matches it will send the firstname,lastname,email,password,service to server for account creation
    if(nameTest===true && emailTest===true&&passwordTest===true&&phoneTest===true){
      let response= await signup(signUpObj)
        console.log(response)
      
    }
  
  };
  return (
    <div className="full-screen-signup">
      
      
      
      <div className="left-container-signup">
        <div className="logo-box-signup">
          <img src={Landinglogo} alt="Landing Logo" />
        </div>
        <div className="landing-heading-signup">
          <h4>ONLINE BOOK SHOPPING</h4>
        </div>
      </div>

    <div className="signup-main">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap","& > :not(style)": {
            p: 5,
            minwidth: "20vw",
            
          },
        }}
      >
        <Paper elevation={4}>
          <div className="signup-login">
            <h2 style={{cursor:"pointer"}} onClick={handleClick}>LOGIN</h2>
            <h2 style={{ color: "red",cursor:'pointer',textDecoration:"underline" }}>SIGNUP</h2>
          </div>
          <div className="name-input-signup">
            <TextField
              onChange={getName}
              error={regexObj.nameBorder}
              helperText={regexObj.nameHelper}
              fullWidth
              size="small"
              label="Full Name"
              id="fullWidth"
            />
          </div>
          <div className="email-input-signup">
            <TextField
              onChange={getEmail}
              error={regexObj.emailBorder}
              helperText={regexObj.emailHelper}
              fullWidth
              size="small"
              label="Email Id"
              id="fullWidth"
            />
          </div>

          <div className="pass-input-signup">
            <TextField
              onChange={getPassword}
              error={regexObj.passwordBorder}
              helperText={regexObj.passwordHelper}
              fullWidth
              size="small"
              label="Password"
              id="fullWidth"
            />
          </div>
          <div className="mobile-input-signup">
            <TextField
              onChange={getphone}
              error={regexObj.nameBorder}
              helperText={regexObj.nameHelper}
              fullWidth
              size="small"
              label="Mobile Number"
              id="fullWidth"
            />
          </div>
          <div className="signup-btn">
            <button onClick={submit} className="signup-btn-btn">SignUp</button>
          </div>
        </Paper>
      </Box>
    </div>
    </div>
  );
}

export default SignUp;
