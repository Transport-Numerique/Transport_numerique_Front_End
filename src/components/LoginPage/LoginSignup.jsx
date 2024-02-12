import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../assets/pers.png'
import email_icon from '../assets/mess.png'
import password_icon from '../assets/pass.png'


const LoginSignup = () => {

const  [action,setAction] = useState("Sign Up");

  return (
    
    <div className='containers'>
      <div className="headers">
        <div className="text">{action}</div>
        <div className="underlin"></div>
      </div>
      <div className="inputs">
        {action=== "Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="ezafafeaf" />
            <input type="text" placeholder="Nom" />
          </div>}

        {action=== "Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="ezafafeaf" />
            <input type="text" placeholder="Firstname" />
          </div>}  

          {action=== "Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="ezafafeaf" />
            <input type="text" placeholder="CIN" />
          </div>}

          {action=== "Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="ezafafeaf" />
            <input type="text" placeholder="Numéro" />
          </div>}

          <div className="input">
            <img src={email_icon} alt="fefzfez" />
            <input type="email"  placeholder='Email'/>
          </div>
          <div className="input">
            <img src={password_icon} alt="defezfz" />
            <input type="password" placeholder='Mot de passe '/>
          </div>
      </div>
      {action=== "Sign Up"?<div></div>: <div className="forgot-password">Lost password ? <span>click here !</span></div>}
     
      <div className="submit-containr">
        <div className={ action === "Login"?"submit gray ":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign up</div>
        <div className={ action === "Sign Up"?"submit gray ":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
