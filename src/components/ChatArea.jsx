import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState,useContext} from 'react'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../freatures/themeSlice';
import { useLocation } from 'react-router-dom';
import Conicon from './Conicon';
import axios from 'axios';
import { Global_Context } from '../Context/GlobalContext';



const ChatArea = () => {
  const theme = useSelector((state)=>state.themeKey);
  const [chat,setchat] = useState({name:"Title1",lastMessage:"last message1",timeStamp:"today"})
 
  const [messagesContent,setMessagesContent] = useState("");
  const location = useLocation();
  const currentURL = location.pathname;
  const chatId = currentURL.split('/').pop().split('&')[0];
  const chatName = currentURL.split('/').pop().split('&')[1];
  const userData = JSON.parse(localStorage.getItem("userData"));
  

  const { messages, setMessages,fetchMessages,api_url,token,config} = useContext(Global_Context);
  useEffect(()=>{
    
    fetchMessages(chatId);
  },[])
  const sendMessage = async() => {
    if(messagesContent.length>0){
      if (!token) {
        console.error("No token found. User not authenticated.");
        return;
      }
      try {
        const response = await axios
        .post(
          api_url+'messages/', 
          {
            content:messagesContent,
            chatId:chatId
          },
          config);
          console.log("sentMessage",response);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
      setMessagesContent("")
    }
    
  };
  useEffect(()=>{
    console.log("ganja", messages.length);
  })
  
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
        
        {messages.map((item,index) =>{
           if(item.sender_id == userData.id){
              return  <MessageSelf key={index} item={item} />
           }
           else{
            return <MessageOthers key={index} item={item} />

           }
        })}
      
        </div>
      <div className={'text-input-area '+((theme)?"":'dark')}>
        <input 
        type="text" 
        value = {messagesContent}
        onChange={(e)=>{
          setMessagesContent(e.target.value)
        }}
        onKeyDown={(event)=>{

        }}
        placeholder='Type a Message' 


        className={'searchbox '+((theme)?"":'dark')}/>
      <IconButton onClick={() => { console.log('Button clicked'); sendMessage()}}>
        <SendIcon />
      </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
