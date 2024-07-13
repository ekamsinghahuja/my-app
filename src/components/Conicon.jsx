import React, { useState } from 'react';

const Conicon = ({ name }) => {
  const [currentClassIndex, setCurrentClassIndex] = useState(0);

  const classes = [
    'clr1', 'clr2', 'clr3', 'clr4', 'clr5', 'clr6', 'clr7',
    'clr8', 'clr9', 'clr10', 'clr11', 'clr12', 'clr13', 'clr14',
    'clr15', 'clr16', 'clr17', 'clr18', 'clr19', 'clr20', 'clr21',
    'clr22', 'clr23', 'clr24', 'clr25', 'clr26', 'clr27', 'clr28',
    'clr29', 'clr30'
  ];

  // Function to cycle through classes
  const getNextClass = () => {
    const nextIndex = (currentClassIndex + 1) % classes.length;
    setCurrentClassIndex(nextIndex);
    return classes[nextIndex];
  };

  // Get the current class for this render
  const currentClass = classes[currentClassIndex];

  return (
    <p className={"con-icon " + currentClass}>{name[0]}</p>
  );
};

export default Conicon;


