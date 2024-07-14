import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';

const MessageSelf = ({ item }) => {
  const theme = useSelector((state)=>state.themeKey);
  const formattedTime = formatDistanceToNow(new Date(item.time_at), { addSuffix: true });
    
    if(item){
  return (
    <div className='self-message-container'>
        <div className={'messageBox ' + ((theme)?"":'messageBoxDark')}>
            
        <p>{item.message_content}</p>
            <p className='self-timeStamp'>{formattedTime}</p>
        </div>
    </div>
  )
  }
  else{
    return <></>;
  }
}

export default MessageSelf
