import React from 'react'
import logo from "../Assets/logoo-removebg-preview.png"
import { Button, TextField } from '@mui/material'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src={logo} alt="" />
      </div>
      <div className='login-box'>
        <p>Login to your Account</p>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-password-input" label="Password" type='password' autoComplete="current-password" />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  )
}

export default Login
