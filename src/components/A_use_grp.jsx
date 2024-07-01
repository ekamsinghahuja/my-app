import React from 'react'
import logo from "../Assets/logoo-removebg-preview.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';


const A_use_grp = () => {
  return (
    <div className='list-container'>
        <div className='ug-header'>
            <img 
            src={logo}
            style={{height:"4rem",width:"4rem"}}
            />
            <p className='ug-title'>Online Users</p>
        </div>
        <div className='sb-search'>
            <SearchIcon />
            <input placeholder='Search' className='searchbox'/>
        </div>
        <div className='ug-list'>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test-User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test-User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test-User</p>
            </div>
        </div>
    </div>
  )
}

export default A_use_grp
