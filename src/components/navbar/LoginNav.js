import React from 'react'
import {AiOutlineHome} from "react-icons/ai";
import "./loginnav.css"

export const LoginNav = () => {
  return (
    <div className="logincontainer">
        <div><a href="/"><AiOutlineHome className="home-icon" color="white" /></a></div>
        <div>
          <form className="form" >
             <input type="email" aria-describedby="emailHelp" className="form-input" placeholder="Email" />
             <input className="form-input" placeholder="Password" />
              <button className="inline-button" >Login</button>
          </form>
        </div>
      </div>
  )
}
// 