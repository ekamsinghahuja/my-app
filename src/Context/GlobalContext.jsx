import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Global_Context = createContext(null);

const GlobalContext = (props) => {
    const [conversations, setConversations] = useState([]);
   
    const navigate = useNavigate();

    const api_url = "http://localhost:3000/"
    const token = JSON.parse(localStorage.getItem('token'));
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
            const user = item.users[0];
            user.chatId = item._id;
            user.chatName = item.chatName;
            return user;
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











  const contextValue = {
    conversations, 
    load_all_chats,
    refresh,
    initiateChat
    
  };

  return (
    <Global_Context.Provider value={contextValue}>
      {props.children}
    </Global_Context.Provider>
  );
};

export default GlobalContext;
