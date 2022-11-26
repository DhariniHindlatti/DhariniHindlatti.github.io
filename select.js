import React from "react";
import { NavLink as Link } from "react-router-dom";

const Select = () => {
  return (
    <div>
      <br /><br />
      <Link to="/display" activestyle="true">
      <img src={require('./images/blackskirt.png')} alt="item" className="padding"/>  </Link>
      <Link to="/display" activestyle="true">
      <img src={require('./images/purpsweater.png')} alt="item" className="padding"/></Link>
      <img src={require('./images/greyskirt.png')} alt="item" className="padding" />
      <img src={require('./images/whitetop.png')} alt="item" className="padding" />
      <img src={require('./images/brownskirt.png')} alt="item" className="padding" />
      <img src={require('./images/blacktop.png')} alt="item"className="padding"  />
      <img src={require('./images/brownskirt2.png')} alt="item" className="padding" />
      <img src={require('./images/whsweatshirt.png')} alt="item" className="padding" />
      <img src={require('./images/greenpants.png')} alt="item"className="padding" />
      <img src={require('./images/whitepants.png')} alt="item" className="padding"/>
    </div>
  );
};
  
export default Select;
