import React from 'react'

const Conicon = ({name}) => {
    const getRandomClass = (classes) => {
        const randomIndex = Math.floor(Math.random() * classes.length);
        return classes[randomIndex];
      };
    const classes = [
        'clr1', 'clr2', 'clr3', 'clr4', 'clr5', 'clr6', 'clr7',
        'clr8', 'clr9', 'clr10', 'clr11', 'clr12', 'clr13', 'clr14',
        'clr15', 'clr16', 'clr17', 'clr18', 'clr19', 'clr20', 'clr21',
        'clr22', 'clr23', 'clr24', 'clr25', 'clr26', 'clr27', 'clr28',
        'clr29', 'clr30'
    ];
    const randomClass = getRandomClass(classes);
  return (
    <p className={"con-icon "+randomClass}>{name[0]}</p>
  )
}

export default Conicon
