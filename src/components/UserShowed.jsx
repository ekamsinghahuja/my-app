import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion"
import axios from 'axios';
const UserShowed = (props) => {
    const theme = useSelector((state)=>state.themeKey);
    const getRandomClass = (classes) => {
      const randomIndex = Math.floor(Math.random() * classes.length);
      return classes[randomIndex];
    };
    const classes = [
      'clr1', 'clr2', 'clr3', 'clr4', 'clr5', 'clr6', 'clr7',
      'clr8', 'clr9', 'clr10', 'clr11', 'clr12', 'clr13', 'clr14',
      'clr15', 'clr16', 'clr17', 'clr18', 'clr19', 'clr20', 'clr21',
      'clr22', 'clr23', 'clr24', 'clr25', 'clr26', 'clr27', 'clr28',
      'clr29', 'clr30'
  ];
    const randomClass = getRandomClass(classes);
    
    
    const initiateChat = async(user)=>{
      console.log("called");
      try{
          const token = JSON.parse(localStorage.getItem('token'));
          console.log(token);
          if (!token) {
              console.error("No token found. User not authenticated.");
              return;
          }
          const config = {
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
              }
          };
          const response = await axios.post(
              "http://localhost:3000/chat/",
              {
                  user:user,
              }, 
              config
          );
          // dispatch(refreshSidebarFun());
          
      }
      catch(error){

      }
  }



   
  return (
    <div onClick={()=>initiateChat(props.user)}>
      <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
          <p className={'con-icon ' + randomClass}>{props.email[0]}</p>
          <p className={'con-title '+((theme)?"":'dark')}>{props.name}</p>
      </motion.div>
    </div>
  )
}

export default UserShowed
