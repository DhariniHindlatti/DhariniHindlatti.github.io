import React from "react";
import { NavLink as Link } from "react-router-dom";

const Home=()=> {
  return (
    <div className="home">
            <br></br>
            <h1 className="font-weight-light">Home!!</h1>
            <br></br>
            <h2>
            <Link to="/select" activestyle="true">
            <button className='b2'><h2>Click me to get started!</h2></button>
          </Link>
            </h2>
            <h1>
            <br></br>
            <br></br>
            <br></br>
            </h1>
          </div>
  );
};
export default Home;