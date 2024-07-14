import React, { useContext, useEffect, useState } from 'react'
import logo from "../Assets/logoo-removebg-preview.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import axios from 'axios';
import GroupsShowed from './GroupsShowed';
import { Global_Context } from '../Context/GlobalContext';

const Groups = () => {
    const theme = useSelector((state)=>state.themeKey);
    const [user_grp,setGroup] = useState([]) 
    const {api_url,config,token} = useContext(Global_Context);
    
    const fetch_groups = async () => {
       
        if (!token) {
            console.error("No token found. User not authenticated.");
            return;
        }
        try {
            const response = await axios.get(
                api_url+"chat/fetchGroups",
                config
            );
            setGroup(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.error("Error fetching groups:", error);
        }
    }
    useEffect(()=>{
        fetch_groups();
    },[])

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
            <p className={'ug-title '+ ((theme)?"":'dark')}>Groups</p>
        </div>
        <div className={'sb-search ' + ((theme)?"":'dark')}>
            <SearchIcon />
            <input placeholder='Search' className={'searchbox ' + ((theme)?"":'dark')}/>
        </div>
        <div className={'ug-list'}>
            {user_grp.length > 0 ? (
                user_grp.map((item) => (
                    <GroupsShowed key={item._id} grp={item} />
                ))
            ) : (
                <></>
            )}
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Groups
