// import React from 'react'
import React, { useState } from 'react';
import  './LoginForm.css'


import user_icon from '../Assets/person.svg'
import email_icon from '../Assets/envelope.svg'
import password_icon from '../Assets/lock.svg'

const LoginForm = () => {
    const [action,setAction]= useState("Sign Up");

  return (
    <div className='container-login'>
    <div className='header-login'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>
    <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
            <img src={user_icon} alt=''/>
            <input type='text' placeholder='Name'/>
        </div>}
        
        <div className='input'>
            <img src={email_icon} alt=''/>
            <input type='email' placeholder='Email'/>
        </div>
        <div className='input'>
            <img src={password_icon} alt=''/>
            <input type='password'placeholder='Password'/>
        </div>
    </div>
    {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here</span></div>}
    
    <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>LogIn</div>

    </div>
    </div>
  )
}

export default LoginForm

