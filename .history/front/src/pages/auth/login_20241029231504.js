import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
 function Login() {
"conversationId":"4e97df6c-2b9f-4eec-9fa2-674bff84649d","source":"instruct"}
    const (password, setPassword) = useState('')
   
        
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