import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';

export const Global_Context = createContext(null);

const GlobalContext = (props) => {
      const dateFromTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const [conversations, setConversations] = useState([]);
    const [all_users,set_all_users] = useState([]);
    const [messages,setMessages] = useState([]);
    const [currentClassIndex, setCurrentClassIndex] = useState(0);
   
    const navigate = useNavigate();

    const api_url = "http://localhost:3000/"
    const token = JSON.parse(localStorage.getItem('token'));
    const userData = JSON.parse(localStorage.getItem("userData"));

    const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
    };
    // sidebar conversation
    const load_all_chats = async () => {
        try {
          if (!token) {
            console.error("No token found. User not authenticated.");
            navigate('/');
            return;
          }
          const response = await axios.get(api_url + "chat/",config);

          const usersList = response.data.map(item => {
            
            if(item.users[0]._id != userData.id){
              const user = item.users[0];
              user.chatId = item._id;
              user.chatName = item.chatName;
              if(item.latestMessage)
              {
                user.latestMessage = item.latestMessage.content
                user.timeStamp = dateFromTimestamp(item.latestMessage.createdAt);
              }
              else{
                user.latestMessage = "tap here to chat!"
              } 
              return user;
            }
            else{
              const user = item.users[1];
              user.chatId = item._id;
              user.chatName = item.chatName;
              if(item.latestMessage)
                {
                  user.latestMessage = item.latestMessage.content
                  user.timeStamp = dateFromTimestamp(item.latestMessage.createdAt);
                }
                else{
                  user.latestMessage = "tap here to chat!"
                } 
                return user;
              }
          });

         
          setConversations(usersList); 
        } 
        catch(error){
          console.error("Error fetching chats:", error);
        }
    };
    useEffect(() => {
        load_all_chats();
    }, []);
    const refresh = ()=>{
        load_all_chats();
    }

    
    const initiateChat = async(user)=>{
        try{
            if (!token) {
                console.error("No token found. User not authenticated.");
                return;
            }
            const response = await axios.post(api_url + "chat/",{user:user},config);
            refresh();
        }
        catch(error){
            console.error("Error fetching chats:", error);
        }
    }

    const fetchMessages = async (chatId) => {
    
        if (!token) {
          console.error("No token found. User not authenticated.");
          return;
        }
        try {
          const response = await axios.get(api_url+`messages/${chatId}`, config);
          // console.log("response:",response.data)
          const transformedData = response.data.map(item => ({
            sender_id: item.sender._id,
            sender_name:item.sender.name,
            message_content:item.content,
            time_at:item.createdAt,
            _id:item._id
          }));
          
      
          setMessages(transformedData);
          refresh();
        } 
        catch (error) {
          console.error("Error fetching messages:", error);
        }
    };
    const refresh_fetchMessages = (chatId)=>{
        fetchMessages(chatId);
    }

    const load_all_user = async () => {
      try {
          if (!token) {
              console.error("No token found. User not authenticated.");
              return;
          }
          const response = await axios.post(api_url + 'user/all_user',{},config);
          const all_users_temp_array = response.data.message.filter(item => item._id !== userData.id);
          set_all_users(all_users_temp_array);
          console.log(all_users_temp_array)
          
          
      } 
      catch (error) {
          console.error("Error fetching users:", error);
      }
  };
  
  useEffect(() => {
      load_all_user();
  }, []);



  
  const contextValue = {
    conversations, 
    load_all_chats,
    refresh,
    initiateChat,
    messages,
    setMessages,
    fetchMessages,
    refresh_fetchMessages,
    all_users,
    set_all_users,
    load_all_user,
    api_url,
    token,
    config,
    currentClassIndex,
    setCurrentClassIndex,
    userData
    
  };

  return (
    <Global_Context.Provider value={contextValue}>
      {props.children}
    </Global_Context.Provider>
  );
};

export default GlobalContext;
