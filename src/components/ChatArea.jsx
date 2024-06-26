import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

const ChatArea = ({props}) => {
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className="con-icon">{props.name[0]}</p>
        <div className='header-text'>
            <p className='con-title'>{props.name}</p>
            <p className='con-timeStamp2'>{props.timeStamp}</p>
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
