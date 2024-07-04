import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../freatures/themeSlice';


const ChatArea = () => {
  const theme = useSelector((state)=>state.themeKey);
  const [chat,setchat] = useState({name:"Title1",lastMessage:"last message1",timeStamp:"today"})

  
  return (
    <div className='chatArea-container'>
      <div className={'chatArea-header '+((theme)?"":'dark')}>
        <p className={"con-icon " + ((theme)?"":'dark')}>{chat.name[0]}</p>
        <div className={'header-text ' + ((theme)?"":'dark')}>
            <p className={'con-title ' +((theme)?"":'dark')}>{chat.name}</p>
            <p className={'con-timeStamp2 '+((theme)?"":'dark')}>{chat.timeStamp}</p>
        </div>
        <IconButton className={((theme)?"":'dark')}>
            <DeleteIcon/>
        </IconButton>
      </div>
      <div className={'message-container ' + ((theme)?"":'dark')}>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageSelf/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        </div>
      <div className='text-input-area'>
        <input type="text" placeholder='Type a Message' className='searchbox'/>
        <IconButton>
            <SendIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
