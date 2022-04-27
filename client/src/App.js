import React, { Component } from 'react';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Login from './component/Login';
import Home from './component/Home';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import Logout from './component/Logout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
componentDidMount() {
    this.loginStatus()
  }
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
render() {
    return (
      <div>
        
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
             <Route 
              exact path='/Dashboard' 
              render={props => (
              <Dashboard {...props} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
             <Route 
              exact path='/logout' 
              render={props => (
              <Logout {...props} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />

          </Switch>
        
      </div>
    );
  }
}
export default App;