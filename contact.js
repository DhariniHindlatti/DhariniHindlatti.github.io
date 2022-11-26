import React from 'react';
import { useState } from 'react';
import RightBox from "./contactform2.js";
import LeftBox from "./contactform.js";

const Contact = () => {
  let [feedBack,setfeedBack]=useState([]);
  return (
    <div>
      <h1>
      <br></br>
      </h1>
      <h1>We would love to hear from you!</h1> <br></br>
      <h2>Mail us on feedback@virtualwardrobe.org</h2>
      <h2>Follow our instagram page @virtual_wardrobe</h2>
      <h2>Or leave your suggestions below!</h2>
    <LeftBox setfeedBack={setfeedBack}/>
    <RightBox feedBack={feedBack}/>
    </div>
  );
};
export default Contact;