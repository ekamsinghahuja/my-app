import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../freatures/themeSlice';
import { useLocation } from 'react-router-dom';
import Conicon from './Conicon';



const ChatArea = () => {
  const theme = useSelector((state)=>state.themeKey);
  const [chat,setchat] = useState({name:"Title1",lastMessage:"last message1",timeStamp:"today"})
  const location = useLocation();
  const currentURL = location.pathname;
  const chatId = currentURL.split('/').pop().split('&')[0];
  const chatName = currentURL.split('/').pop().split('&')[1];
  
  return (
    <div className='chatArea-container'>
      <div className={'chatArea-header '+((theme)?"":'dark')}>
        <Conicon name={chatName}/>
        <div className={'header-text ' + ((theme)?"":'dark')}>
            <p className={'con-title ' +((theme)?"":'dark')}>{chatName}</p>
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
      <div className={'text-input-area '+((theme)?"":'dark')}>
        <input type="text" placeholder='Type a Message' className={'searchbox '+((theme)?"":'dark')}/>
        <IconButton>
            <SendIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
