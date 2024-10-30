import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 function Login() {
   var l="hello"
        
    return (
        <div>
            <h1>Login</h1>
            <input type="text" id="username" placeholder="username" />
            
            <NavLink to="/register">Register</NavLink>
        </div>
    );
}
export default Login;