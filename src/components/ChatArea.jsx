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

import io  from 'socket.io-client';

const ENDPOINT = "http://localhost:3000";
let socket;

const ChatArea = () => {
  const theme = useSelector((state) => state.themeKey);
  const [chat, setChat] = useState({ name: "Title1", lastMessage: "last message1", timeStamp: "today" });
  const [messagesContent, setMessagesContent] = useState("");
  const location = useLocation();
  const currentURL = location.pathname;
  const chatId = currentURL.split('/').pop().split('&')[0];
  const chatName = currentURL.split('/').pop().split('&')[1];
  const [socketConnectionStatus, setSocketConnectionStatus] = useState(false);

  const { messages, setMessages, fetchMessages, api_url, token, config, userData } = useContext(Global_Context);

  const sendMessage = async () => {
    var data = null;
    if (messagesContent.length > 0) {
      if (!token) {
        console.error("No token found. User not authenticated.");
        return;
      }
      try {
        const response = await axios.post(
          api_url + 'messages/', 
          {
            content: messagesContent,
            chatId: chatId
          },
          config
        );
        data = response.data;
        socket.emit("new message", data);
        console.log("sentMessage", response);
      } catch (error) {
        console.error("Error sending message:", error);
      }
      setMessagesContent("");
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", userData);
    socket.on("connected", () => {
      setSocketConnectionStatus(true);
    });

    socket.on("message received", (newMessage) => {
      if (!messages || messages._id !== newMessage._id) {
        setMessages(prevMessages => [...prevMessages, newMessage]);
      }
    });

    if (chatId) {
      fetchMessages(chatId);
      socket.emit("join chat", chatId);
    }

    // Cleanup function to disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [chatId, messages]);

  return (
    <div className='chatArea-container'>
      <div className={'chatArea-header ' + ((theme) ? "" : 'dark')}>
        <Conicon name={chatName} />
        <div className={'header-text ' + ((theme) ? "" : 'dark')}>
          <p className={'con-title ' + ((theme) ? "" : 'dark')}>{chatName}</p>
          <p className={'con-timeStamp2 ' + ((theme) ? "" : 'dark')}>{chat.timeStamp}</p>
        </div>
        <IconButton className={((theme) ? "" : 'dark')}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className={'message-container ' + ((theme) ? "" : 'dark')}>
        {messages.map((item, index) => {
          if (item.sender_id === userData.id) {
            return <MessageSelf key={index} item={item} />
          } else {
            return <MessageOthers key={index} item={item} />
          }
        })}
      </div>
      <div className={'text-input-area ' + ((theme) ? "" : 'dark')}>
        <input
          type="text"
          value={messagesContent}
          onChange={(e) => setMessagesContent(e.target.value)}
          placeholder='Type a Message'
          className={'searchbox ' + ((theme) ? "" : 'dark')}
        />
        <IconButton onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea;