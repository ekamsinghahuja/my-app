import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ConversationItem = ({props}) => {
  const theme = useSelector((state)=>state.themeKey);
  const navigate = useNavigate();
  return (
    <div 
    className='conversation-container'
    onClick={()=>{
      navigate("chat")
    }}>
      <p className={"con-icon "+((theme)?"":'dark')}>{props.name[0]}</p>
      <p className={"con-title "+((theme)?"":'dark')}>{props.name}</p>
      <p className={"con-lastMessage "+((theme)?"":'dark')}>{props.lastMessage}</p>
      <p className={"con-timeStamp "+((theme)?"":'dark')}>{props.timeStamp}</p>
    </div>
  )
}

export default ConversationItem
