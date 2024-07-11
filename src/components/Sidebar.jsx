import React, { useState , useEffect} from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../freatures/themeSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



const Sidebar = () => {
    
    const [conversations, setConversations] = useState([]);

    const load_all_chats = async () => {
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            console.log(token);
            if (!token) {
                console.error("No token found. User not authenticated.");
                return;
            }
    
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            };
            
            const response = await axios.get(
                "http://localhost:3000/chat/",
                config
            );
            const usersList = response.data.map(item => item.users[0]);
            console.log("Response data: of siebar call",response.data);
            setConversations(usersList); 
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };

    useEffect(() => {
        load_all_chats();
    }, []);

    
    const theme = useSelector((state)=>state.themeKey);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const handleLogout = () => {
        
        localStorage.clear();

      
        navigate('/');
    };


    
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
                <IconButton onClick={() =>{dispatch(toggleTheme())}}>
                    {theme ? <NightlightIcon /> : <LightModeIcon className={((theme)?"":'dark')}/>}
                </IconButton>
                <IconButton onClick={handleLogout}> <LogoutIcon className={((theme)?"":'dark')}/></IconButton>
            </div>
           
        </div>
        <div className={'sb-search ' + ((theme)?"":'dark')}>
            <SearchIcon className={((theme)?"":'dark')} />
            <input placeholder='Search' className={'searchbox ' + ((theme)?"":'dark')}/>
        </div>
        <div className={'sb-conversations ' + ((theme)?"":'dark')}>
            {conversations ? (conversations.map((conversation)=>{return (<ConversationItem props ={conversation}  key={conversation.name} className={((theme)?"":'dark')} />)}))
            :<>halo</>
            }
        </div>
    </div>
  )
}

export default Sidebar
