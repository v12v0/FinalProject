import React from 'react'
import {Link } from "react-router-dom";


function Logout() {
  return (
    <div>
    <h1>you have logged out </h1>
    <Link to='/'>Home</Link>

    </div>
   
  )
}

export default Logout