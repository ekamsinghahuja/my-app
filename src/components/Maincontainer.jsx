import React, { useState } from 'react'
import './myStyle.css'
import Workarea from './Workarea'
import Sidebar from './Sidebar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatArea from './ChatArea';
import Welcom from './Welcom';
import CreateGroup from './CreateGroup';
import Useer_Groups from './Useer_Groups';
import A_use_grp from './A_use_grp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Maincontainer = () => {

  
  return (
    <div className='main-container'>
      
        <Sidebar/>
        {/* <Welcom/> */}
        {/* <ChatArea props={chat}/> */}
        {/* <CreateGroup/> */}
        {/* <A_use_grp/> */}
        <Outlet /> {/* This is where the nested routes will be rendered */}
    </div>
  )
}

export default Maincontainer
