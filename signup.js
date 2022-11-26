import React from 'react';
import { useState } from 'react';
import RB from "./signupform2.js";
import LB from "./signupform.js";

const SignUp = () => {
  let [feedBack,setfeedBack]=useState([]);
  return (
    <div>
      <h1><br></br>Sign Up!</h1>
      <LB setfeedBack={setfeedBack}/>
      <RB feedBack={feedBack}/>
      <h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </h1>
    </div>
  );
};

export default SignUp;
