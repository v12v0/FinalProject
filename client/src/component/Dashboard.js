import React from 'react'
import axios from 'axios'
import {Link } from "react-router-dom";

const Dashboard = (props) => {

  
  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/logout')
    })
    .catch(error => console.log(error))
  }
 
  return (
      <div>
        <h1>dashboard</h1>
        { 
          props.loggedInStatus ? 
          <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
          null
        }
      </div>
    );
  };

export default Dashboard