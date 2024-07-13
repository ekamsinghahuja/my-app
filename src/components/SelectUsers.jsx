import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import UserShowed from './UserShowed';
import SelectUserShowed from './SelectUserShowed';
import { Button, TextField, CircularProgress, Backdrop } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Global_Context } from '../Context/GlobalContext';

const SelectUsers = () => {

    const theme = useSelector((state)=>state.themeKey);
    const location = useLocation();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const { groupName } = location.state || {};

    const {all_users,api_url,token,config,} = useContext(Global_Context);

    const navigate = useNavigate();

    const handleUserSelect = (user) => {
        console.log(user)
        setSelectedUsers((prevSelectedUsers) => {
            if (prevSelectedUsers.includes(user)) {
                return prevSelectedUsers.filter(u => u !== user);
            } else {
                return [...prevSelectedUsers, user];
            }
        });
    };
    const handleSubmit = async () => {
        const all_user_ids = selectedUsers.map((item) => item._id);
        
        if (!token) {
            console.error("No token found. User not authenticated.");
            return;
        }
        const response = await axios.post(
            api_url+"chat/createGroup",
            {
                name:groupName,
                users:all_user_ids
            },
            config
        );
        navigate("/app/groups");
    };
    
    
    return (
      <div className='createGroup-container-choose-member'>
        <div className={'ug-header '+((theme)?"":'dark')}>
            
            <h1 className={'ug-title '+ ((theme)?"":'dark')}>Select Users</h1>
            <Button type="submit" onClick={handleSubmit} variant="outlined">Create Group</Button>
        </div>
        <div className={'ug-list ' }>
            
                {all_users.map((user,key) => (
                    <SelectUserShowed 
                    key={key} 
                    user={user} 
                    name={user.name} 
                    email ={user.email} 
                    isSelected={selectedUsers.includes(user)}
                    onSelect={() => handleUserSelect(user)}
                    />
                ))}
            
        </div>
        {/* <Button type="submit" variant="outlined">Submit</Button> */}
       
        
        
      </div>
    );
}

export default SelectUsers
