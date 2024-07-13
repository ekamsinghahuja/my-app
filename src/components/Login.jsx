import React, { useContext, useState } from 'react';
import logo from "../Assets/logoo-removebg-preview.png";
import { Button, TextField, CircularProgress, Backdrop } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Global_Context } from '../Context/GlobalContext';



const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const {api_url,config,} = useContext(Global_Context);
  

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setData({ name: "", email: "", password: "" });
  };

  const loginHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.post(api_url+"user/login",{ email: data.email, password: data.password },config);
      console.log(response.data.success);
      if(response.data.success){
        setStatusMessage("Login successful");
        navigate('/app/welcome');
        localStorage.setItem("userData", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setLoading(false);
      }
      else{
        console.log(response.data);
        setStatusMessage(response.data.message);
        setLoading(false);
      }
    } 
    catch (err) {
      console.error(err); 
      setStatusMessage("Something Went Wrong");
      setLoading(false);
    }
  };

  const signUpHandler = async () => {
   
    setLoading(true);
    try {
      
      const response = await axios.post(api_url+"user/register",data,config);
      if(response.data.success){
        console.log(response);
        setStatusMessage("Registration successful");
        navigate('/app/welcome');
        localStorage.setItem("userData", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      else{
        console.log(response.data);
        setStatusMessage(response.data.message);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);  
      setStatusMessage("Registration failed");
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      loginHandler();
    } else {
      signUpHandler();
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color='secondary' />
      </Backdrop>
      <div className='login-container'>
        <div className='image-container'>
          <img src={logo} alt="logo" />
        </div>
        <div className='login-box'>
          <p>{isLogin ? 'Login to your Account' : 'Create a New Account'}</p>
          <form onSubmit={handleSubmit}>
            <div className='vertical-flex'>
              {!isLogin && (
                <TextField
                  id="signup-name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={data.name}
                  onChange={changeHandler}
                />
              )}
              <TextField
                id={isLogin ? "login-email" : "signup-email"}
                name="email"
                label="Email"
                variant="outlined"
                value={data.email}
                className='TextField'
                onChange={changeHandler}
              />
              <TextField
                id={isLogin ? "login-password" : "signup-password"}
                name="password"
                label="Password"
                type='password'
                autoComplete={isLogin ? "current-password" : "new-password"}
                value={data.password}
                onChange={changeHandler}
              />
              <Button type="submit" variant="outlined">
                {isLogin ? 'Login' : 'Signup'}
              </Button>
            </div>
          </form>
          <Button variant="text" onClick={toggleForm}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </Button>
          {statusMessage && <p className='error-login'>*{statusMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Auth;
