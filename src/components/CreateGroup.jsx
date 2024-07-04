import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../freatures/themeSlice';


const CreateGroup = () => {
  const theme = useSelector((state)=>state.themeKey);
  return (
    <div className={'createGroup-container '+((theme)?"":'dark')}> 
      {/* <div className='createGroup-input-container'> */}
        <input placeholder='Enter Group Name' className={'searchbox ' + ((theme)?"":'dark')}/>
        <IconButton className={((theme)?"":'dark')}>
            <DoneOutlineIcon/>
        </IconButton>
      {/* </div> */}
    </div>
  )
}

export default CreateGroup
