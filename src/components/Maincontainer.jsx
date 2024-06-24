import React from 'react'
import './myStyle.css'
import Workarea from './Workarea'
import Sidebar from './Sidebar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Maincontainer = () => {
  return (
    <div className='main-container'>
        <Sidebar/>
        <Workarea/>
    </div>
  )
}

export default Maincontainer
