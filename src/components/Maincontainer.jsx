import React, { useState } from 'react'
import './myStyle.css'
import Workarea from './Workarea'
import Sidebar from './Sidebar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatArea from './ChatArea';
import Welcom from './Welcom';
const Maincontainer = () => {

  const [chat,setchat] = useState({name:"Title1",lastMessage:"last message1",timeStamp:"today"})
  return (
    <div className='main-container'>
        <Sidebar/>
        {/* <Workarea/> */}
        {/* <ChatArea props={chat}/> */}
        <Welcom/>
    </div>
  )
}

export default Maincontainer
