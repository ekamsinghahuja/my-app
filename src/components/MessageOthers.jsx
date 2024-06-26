import React from 'react'

const MessageOthers = () => {
    var props1 = {name:"randomUser",message:"This is a Sample Message"}

  return (
    <div className='other-message-container'>
        <div className='other-message-box'>
            <p className='con-icon'>{props1.name[0]}</p>
            <div className='other-text-content'>
                {/* <p className='other-message-con-name'>{props1.name}</p> */}
                <p className='other-message-con-message'>{props1.message}</p>
                <p className='self-timeStamp'>12:00am</p>
            </div>
        </div>
    
    </div>
  )
}

export default MessageOthers
