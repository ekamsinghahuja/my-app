import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import Conicon from './Conicon';
import { Global_Context } from '../Context/GlobalContext';
const ConversationItem = ({props}) => {
  const theme = useSelector((state)=>state.themeKey);
  const {refresh_fetchMessages} = useContext(Global_Context);
  
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("chat/" + props.chatId + "&" + props.name);
    refresh_fetchMessages(props.chatId)
  };

  return (
    <div  onClick={handleClick}>
      <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'conversation-container ' + ((theme)?"":'dark')}>
      
      <Conicon name={props.name}/>
      <p className={"con-title "+((theme)?"":'dark')}>{props.name}</p>
      <p className={"con-lastMessage "+((theme)?"":'dark')}>{props.chatId}</p>
      <p className={"con-timeStamp "+((theme)?"":'dark')}>{props.timeStamp}</p>
      </motion.div>
    </div>
  )
}

export default ConversationItem
