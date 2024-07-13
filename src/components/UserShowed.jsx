import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion"
import axios from 'axios';
import Conicon from './Conicon';
import { Global_Context } from '../Context/GlobalContext';
const UserShowed = (props) => {
    const theme = useSelector((state)=>state.themeKey);
    const {refresh,initiateChat} = useContext(Global_Context);
    
    



   
  return (
    <div onClick={
        ()=>{
                initiateChat(props.user);


            }}>
      <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
          <Conicon name={props.name}/>
          <div>
          <p className={'con-title '+((theme)?"":'dark')}>{props.name}</p>
          </div>
          
      </motion.div>
    </div>
  )
}

export default UserShowed
