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
    config.headers['x-access-token'] = tokenKey
  }
  return config
})

axios.interceptors.response.use(response => {
  if (window.location.href === '/login') {
    return response
  }
  const tokenKey = response.data?.token;
  if (tokenKey) {
    localStorage.setItem('tokenKey', tokenKey)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

class App extends Component {
  render(){
    console.log("aa");
    return (<Provider store={store}>
      <Router>
         <Route path="/login" exact="true" component={Auth} />
       </Router>
    </Provider>)
  }
 
}

export default App;
