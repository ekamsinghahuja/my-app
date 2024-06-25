import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';

const Sidebar = () => {
    const [conversations, setConversation] = useState([
        {name:"Title1",lastMessage:"last message1",timeStamp:"today"},
        {name:"Title2",lastMessage:"last message2",timeStamp:"today t2"},
        {name:"Title3",lastMessage:"last message3",timeStamp:"today t3"}
    ]);
    
  return (
    <div className='sidebar-container'>
        <div className='sb-header'>
            <div>
                <IconButton> <AccountCircleIcon/></IconButton>
            </div>
            <div>
            <IconButton> <PersonAddIcon/></IconButton>
            <IconButton> <GroupAddIcon/></IconButton>
            <IconButton> <AddCircleIcon/></IconButton>
            <IconButton> <NightlightIcon/></IconButton>
            </div>
            
            
        </div>
        <div className='sb-search'>
            <SearchIcon />
            <input placeholder='Search' className='searchbox'/>
        </div>
        <div className='sb-conversations'>
            {conversations.map((conversation)=>{
                return <ConversationItem props ={conversation} />
            })}
            
        </div>
    </div>
  )
}

export default Sidebar
