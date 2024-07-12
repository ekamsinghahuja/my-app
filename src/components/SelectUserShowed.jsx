import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import Conicon from './Conicon';

const SelectUserShowed = ({ name, email, isSelected, onSelect }) => {
    const theme = useSelector((state) => state.themeKey);
    const handleClick = (event) => {
        event.preventDefault();
        onSelect();
    };
  return (
    <div>
      <motion.div 
      whileHover={{scale:1.03}} 
      whileTap={{scale:0.98}} 
      className={'list-tem ' + ((theme)?"":'dark') + ((!isSelected)?"":'selected-user ')}
      onClick={handleClick}
      >
            <Conicon name={name} />
          <div>
          <p className={'con-title '+ ((theme)?"":'dark') + ((!isSelected)?"":'selected-user ')}>{name}</p>
          </div>
          
      </motion.div>
    </div>
  )
}

export default SelectUserShowed
