import React, { useEffect } from 'react';
import logo from "../Assets/logoo-removebg-preview.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



const Welcom = () => {
  const theme = useSelector((state)=>state.themeKey);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    if (!userData) {
      console.log('User not authenticated');
      navigate("/");
    }
    else{
      console.log(userData);
    }
  }, [userData, navigate]);
  
  function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
  }

  

  return (
    <div className='welcom-container'>
        <img src={logo} alt="Logo" className='welcom-logo'/>
        <p className={"" + ((theme)?"":'darker')}>Welcome! {sentenceCase(userData.name)}</p>
    </div>
  );
}

export default Welcom;

