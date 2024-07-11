import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
const ConversationItem = ({props}) => {
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
  const theme = useSelector((state)=>state.themeKey);
  const navigate = useNavigate();
  return (
    <div 
    onClick={()=>{
      navigate("chat")
    }}>
      <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'conversation-container ' + ((theme)?"":'dark')}>
      <p className={"con-icon "+randomClass}>{props.name[0]}</p>
      <p className={"con-title "+((theme)?"":'dark')}>{props.name}</p>
      <p className={"con-lastMessage "+((theme)?"":'dark')}>{props.lastMessage}</p>
      <p className={"con-timeStamp "+((theme)?"":'dark')}>{props.timeStamp}</p>
      </motion.div>
    </div>
  )
}

export default ConversationItem
