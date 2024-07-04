import React from 'react'
import logo from "../Assets/logoo-removebg-preview.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../freatures/themeSlice';


const Users = () => {
    const theme = useSelector((state)=>state.themeKey);
  return (
    <div className='list-container'>
        <div className={'ug-header '+((theme)?"":'dark')}>
            <img 
            src={logo}
            style={{height:"4rem",width:"4rem"}}
            />
            <p className={'ug-title '+((theme)?"":'dark')}>Online Users</p>
        </div>
        <div className={'sb-search '+((theme)?"":'dark')}>
            <SearchIcon />
            <input placeholder='Search' className={'searchbox '+((theme)?"":'dark')}/>
        </div>
        <div className={'ug-list'}>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
            <div className={'list-tem '+((theme)?"":'dark')}>
                <p className={'con-icon '+((theme)?"":'dark')}>T</p>
                <p className={'con-title '+((theme)?"":'dark')}>Test-User</p>
            </div>
        </div>
    </div>
  )
}

export default Users
