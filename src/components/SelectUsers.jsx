import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import UserShowed from './UserShowed';
import SelectUserShowed from './SelectUserShowed';
import { Button, TextField, CircularProgress, Backdrop } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SelectUsers = () => {
    const theme = useSelector((state)=>state.themeKey);
    const [all_users,set_all_users] = useState([]);
    const location = useLocation();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const { groupName } = location.state || {};

    const navigate = useNavigate();

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
    useEffect(()=>{
        console.log(groupName)
        console.log("sel",selectedUsers)
    },[selectedUsers])
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
        console.log('pressed');
        const all_user_ids = selectedUsers.map((item) => item._id);
        const token = JSON.parse(localStorage.getItem('token'));
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
            "http://localhost:3000/chat/createGroup",
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
