import {Redirect} from "react-router-dom";
import React from "react";

const Logout = ()=>{
    localStorage.removeItem("tokenKey");
    return <Redirect to="/login" />
}
export default Logout;