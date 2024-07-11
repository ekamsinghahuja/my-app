import React, { useEffect, useState } from 'react'
import logo from "../Assets/logoo-removebg-preview.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../freatures/themeSlice';
import axios from 'axios';
import UserShowed from './UserShowed';
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"


const Users = () => {
    const theme = useSelector((state)=>state.themeKey);
    const [all_users,set_all_users] = useState([]);
    const dispatch = useDispatch();

    const load_all_user = async () => {
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
            
            const response = await axios.post(
                "http://localhost:3000/user/all_user",
                {}, // Empty data object if no payload is needed
                config
            );
    
            console.log("Response data:", response.data);
            set_all_users(response.data.message);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    const initiateChat = async(user)=>{
        try{
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
            const response = await axios.post(
                "http://localhost:3000/chat/",
                {
                    userId:user._id
                }, 
                config
            );
            // dispatch(refreshSidebarFun());
            
        }
        catch(error){

        }
    }
    useEffect(() => {
        load_all_user();
    }, []);

    

    // useEffect(() => {
    //     // This will run after all_users has been updated
    //     // console.log("Updated all_users:", all_users[0].name);
        
    // }, [all_users]);


  return (

    <AnimatePresence>
    <motion.div
     initial={{ opacity: 0, scale: 0 }}
     animate={{ opacity: 1, scale: 1 }}
     exit={{ opacity: 0, scale: 0 }}
     transition={{
         ease: "anticipate",
         duration: 0.3
     }}

     className='list-container'>

    
        <div className={'ug-header '+((theme)?"":'dark')}>
            <img 
            src={logo}
            style={{height:"4rem",width:"4rem"}}
            />
            <p className={'ug-title '+ ((theme)?"":'dark')}>Online Users</p>
        </div>
        <div className={'sb-search ' + ((theme)?"":'dark')}>
            <SearchIcon />
            <input placeholder='Search' className={'searchbox ' + ((theme)?"":'dark')}/>
        </div>


        <div className={'ug-list ' }>
            
                {all_users.map((user,key) => (
                    <UserShowed key={key} name={user.name} email ={user.email} />
                ))}
            
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Users
