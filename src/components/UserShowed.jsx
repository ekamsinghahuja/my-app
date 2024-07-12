import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion"
import axios from 'axios';
import Conicon from './Conicon';
const UserShowed = (props) => {
    const theme = useSelector((state)=>state.themeKey);
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
          console.log("response of fetchChat:",response.data);
          // dispatch(refreshSidebarFun());
          
      }
      catch(error){

      }
  }



   
  return (
    <div onClick={()=>initiateChat(props.user)}>
      <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
          <Conicon name={props.name}/>
          <p className={'con-title '+((theme)?"":'dark')}>{props.name}</p>
      </motion.div>
    </div>
  )
}

export default UserShowed
