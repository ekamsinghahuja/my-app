import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useNavigate } from 'react-router-dom';


const ChatArea = () => {
  const [chat,setchat] = useState({name:"Title1",lastMessage:"last message1",timeStamp:"today"})

  
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className="con-icon">{chat.name[0]}</p>
        <div className='header-text'>
            <p className='con-title'>{chat.name}</p>
            <p className='con-timeStamp2'>{chat.timeStamp}</p>
        </div>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
      </div>
      <div className='message-container'>
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
