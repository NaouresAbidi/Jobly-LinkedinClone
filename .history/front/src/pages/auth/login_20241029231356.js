import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 function Login() {
    
   
        
    return (
        <div>
            <h1>Login</h1>
            <input type="text" id="username" placeholder="username" />
            <input type="password" id="password" placeholder="password" />
           <button></button>
            <NavLink to="/register">Register</NavLink>
        </div>
    );
}
export default Login;