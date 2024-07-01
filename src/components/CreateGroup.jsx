import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';

const CreateGroup = () => {
  return (
    <div className='createGroup-container'> 
        <input placeholder='Enter Group Name' className='searchbox'/>
        <IconButton>
            <DoneOutlineIcon/>
        </IconButton>
    </div>
  )
}

export default CreateGroup
