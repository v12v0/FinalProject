import React from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
         <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
};
export default Home;
