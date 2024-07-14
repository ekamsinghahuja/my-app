import React, { useEffect } from 'react'
import axios from 'axios';
import { AnimatePresence } from "framer-motion"
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"
import Conicon from './Conicon';
import { useNavigate } from 'react-router-dom';

const GroupsShowed = ({grp}) => {
  
    const theme = useSelector((state)=>state.themeKey);
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("chat/" + grp._id + "&" + grp.chatName);
      
    };
    useEffect(()=>{
      console.log(grp);
  },[])
  return (
    <div onClick={handleClick}>
         <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
            <Conicon name = {grp.chatName}/>
            <p className={'con-title '+ ((theme)?"":'dark')}>{grp.chatName}</p>
          </motion.div>
    </div>
  )
}

export default GroupsShowed
