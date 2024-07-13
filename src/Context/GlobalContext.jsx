import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Global_Context = createContext(null);

const GlobalContext = (props) => {
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
            console.log("doing it");
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
              return user;
            }
            else{
              const user = item.users[1];
              user.chatId = item._id;
              user.chatName = item.chatName;
              return user;
            }
          });
          console.log("debud" , response.data);
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

    //users
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
          const transformedData = response.data.map(item => ({
            sender_id: item.sender._id,
            sender_name:item.sender.name,
            message_content:item.content
          }));
          console.log()
          setMessages(transformedData);
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
          set_all_users(response.data.message);
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
    setCurrentClassIndex
    
  };

  return (
    <Global_Context.Provider value={contextValue}>
      {props.children}
    </Global_Context.Provider>
  );
};

export default GlobalContext;
