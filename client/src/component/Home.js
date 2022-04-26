import React from 'react';
import axios from 'axios'
import {Link } from "react-router-dom";

const Home = (props) => {


return (
   
    <div>
      <h1>Home Page</h1>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
    </div>
  );
};
export default Home;