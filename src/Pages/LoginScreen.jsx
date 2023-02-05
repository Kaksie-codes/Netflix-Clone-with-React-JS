import React from 'react'
import "./Loginscreen.css"

const LoginScreen = () => {
  return (
    <div className='loginScreen'>
      <div className="loginscreen__background">
          <img className='loginscreen__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
          <button className="loginscreen__button">Sign In</button>
          <div className="loginscreen__gradient"></div>
      </div> 
    </div>
  )
}

export default LoginScreen;