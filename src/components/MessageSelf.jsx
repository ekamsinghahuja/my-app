import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MessageSelf = ({ item }) => {
  const theme = useSelector((state)=>state.themeKey);
    
    
    if(item){
  return (
    <div className='self-message-container'>
        <div className={'messageBox ' + ((theme)?"":'messageBoxDark')}>
            
        <p>{item.message_content}</p>
            <p className='self-timeStamp'>12:00am</p>
        </div>
    </div>
  )
  }
  else{
    return <></>;
  }
}

export default MessageSelf
