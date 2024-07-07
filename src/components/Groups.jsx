import React from 'react'
import logo from "../Assets/logoo-removebg-preview.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

const Groups = () => {
    const theme = useSelector((state)=>state.themeKey);
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
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className={'list-tem ' + ((theme)?"":'dark')}>
                <p className={'con-icon '+ ((theme)?"":'dark')}>T</p>
                <p className={'con-title '+ ((theme)?"":'dark')}>Test-User</p>
            </motion.div>
            
            
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Groups
