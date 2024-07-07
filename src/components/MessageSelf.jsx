import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MessageSelf = () => {
  const theme = useSelector((state)=>state.themeKey);
    var props2 = {name:"You",message:"This is a Sample Message" }
  return (
    <div className='self-message-container'>
        <div className={'messageBox ' + ((theme)?"":'messageBoxDark')}>
            
            <p>{props2.message}</p>
            <p className='self-timeStamp'>12:00am</p>
        </div>
    </div>
  )
}

export default MessageSelf
