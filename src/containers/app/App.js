import React, { Component } from 'react';
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../services/store";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from "../auth/auth";

axios.defaults.baseURL = 'http://localhost:8000';

axios.interceptors.request.use(config=>{
  if(window.location.href === '/login'){
    return config
  }
  const tokenKey = localStorage.getItem('tokenKey')
  if (tokenKey) {
    let item = JSON.parse(tokenKey);
    let now = new Date();
    if(now.getTime()> item.expiry){
      localStorage.removeItem('tokenKey')
    }else{
      config.headers['x-access-token'] = item.token;
    }
  }
  return config
})

axios.interceptors.response.use(response => {
  if (window.location.href === '/login') {
    return response
  }
  const tokenKey = response.data?.token;
  if (tokenKey) {
    const item = {
      token: tokenKey,
      expiry: 60000*60*24
    }
    localStorage.setItem('tokenKey', JSON.stringify(item))
    localStorage.setItem('user', response.data.user);
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

class App extends Component {
  render(){
    return (<Provider store={store}>
      <Router>
         <Route path="/login"  component={Auth} />
       </Router>
    </Provider>)
  }
 
}

export default App;
