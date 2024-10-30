import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
 function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
        
    return (
        <div>
            <h1>Login</h1>
            <p>{username}</p>
            <input value={}type="text" id="username" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}} />
            <input type="password" id="password" placeholder="password" />
           <button></button>
            <NavLink to="/register">Register</NavLink>
        </div>
    );
}
export default Login;