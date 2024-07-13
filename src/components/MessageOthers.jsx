import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const MessageOthers = ({ item }) => {
  const theme = useSelector((state)=>state.themeKey);
  if(item){
  return (
    <div className='other-message-container'>
        <div className={'other-message-box'}>
            {/* <p className='con-icon'>{props1.name[0]}</p> */}
            <div className={'other-text-content ' + ((theme)?"":'messageOtherBoxDark')}>
                {/* <p className='other-message-con-name'>{props1.name}</p> */}
                <p className='other-message-con-message'>{item.message_content}</p>
                <p className='self-timeStamp'>12:00am</p>
            </div>
        </div>
    
    </div>
  )
  }
  else{
    return <></>;
  }
}

export default MessageOthers
