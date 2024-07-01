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
const Maincontainer = () => {

  const [chat,setchat] = useState({name:"Title1",lastMessage:"last message1",timeStamp:"today"})
  return (
    <div className='main-container'>
        <Sidebar/>
        {/* <Welcom/> */}
        {/* <ChatArea props={chat}/> */}
        {/* <CreateGroup/> */}
        <A_use_grp/>

       
    </div>
  )
}

export default Maincontainer
