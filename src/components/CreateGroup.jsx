import React, { useEffect , useState} from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../freatures/themeSlice';
import { useNavigate } from 'react-router-dom';


const CreateGroup = () => {
  const theme = useSelector((state)=>state.themeKey);
  const [groupName, setName] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setName(e.target.value);
  }
  const handleDoneClick = () => {
    if (groupName.length > 0) {
      navigate('/app/select-users', { state: { groupName } });
    } else {
      alert('Please enter a group name');
    }
  }

  
  useEffect(()=>{
    console.log(groupName.length);
  },[groupName])
  return (
    <div className={'createGroup-container '+((theme)?"":'dark')}> 
      {/* <div className='createGroup-input-container'> */}
        <input placeholder='Enter Group Name' value={groupName} onChange={changeHandler} className={'searchbox ' + ((theme)?"":'dark')}/>
        <IconButton onClick={handleDoneClick} className={((theme) ? "" : 'dark')}>
        <DoneOutlineIcon />
      </IconButton>
      {/* </div> */}
    </div>
  )
}

export default CreateGroup
