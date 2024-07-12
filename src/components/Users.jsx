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
    
    useEffect(() => {
        load_all_user();
    }, []);



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
            <h1 className={'ug-title '+ ((theme)?"":'dark')}>Online Users</h1>
        </div>
        <div className={'sb-search ' + ((theme)?"":'dark')}>
            <SearchIcon />
            <input placeholder='Search' className={'searchbox ' + ((theme)?"":'dark')}/>
        </div>


        <div className={'ug-list ' }>
            
                {all_users.map((user,key) => (
                    <UserShowed key={key} user={user} name={user.name} email ={user.email} />
                ))}
            
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Users
