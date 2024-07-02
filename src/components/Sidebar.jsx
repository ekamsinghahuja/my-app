import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';
import { useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';

const Sidebar = () => {
    const [conversations, setConversation] = useState([
        {name:"Title1",lastMessage:"last message1",timeStamp:"today"},
        {name:"Title2",lastMessage:"last message2",timeStamp:"today t2"},
        {name:"Title3",lastMessage:"last message3",timeStamp:"today t3"}
    ]);
    const [theme, changeTheme] = useState(true);
    const navigate = useNavigate();
    
  return (
    <div className='sidebar-container'>
        <div className={'sb-header ' + ((theme)?"":'dark')} >
            <div>
                <IconButton> <AccountCircleIcon className={((theme)?"":'dark')} /></IconButton>
            </div>
            <div>
            <IconButton onClick={()=>{
                navigate("users")
            }}> <PersonAddIcon className={((theme)?"":'dark')}/></IconButton>
            <IconButton onClick={()=>{
                navigate("groups")
            }}> <GroupAddIcon className={((theme)?"":'dark')}/></IconButton>
            <IconButton onClick={()=>{
                navigate("create_group")
            }}> <AddCircleIcon className={((theme)?"":'dark')}/></IconButton>
            <IconButton onClick={() => changeTheme(prev => !prev)}>
                {theme ? <NightlightIcon /> : <LightModeIcon className={((theme)?"":'dark')}/>}
            </IconButton>
            </div>
            
            
        </div>
        <div className={'sb-search ' + ((theme)?"":'dark')}>
            <SearchIcon className={((theme)?"":'dark')} />
            <input placeholder='Search' className={'searchbox ' + ((theme)?"":'dark')}/>
        </div>
        <div className={'sb-conversations ' + ((theme)?"":'dark')}>
            {conversations.map((conversation)=>{
                return (<ConversationItem 
                props ={conversation} 
                key={conversation.name}
                className={((theme)?"":'dark')}
                />);
            })}
        </div>
    </div>
  )
}

export default Sidebar
