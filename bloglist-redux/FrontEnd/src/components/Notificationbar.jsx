import React from 'react'
import {useSelector } from 'react-redux'

const NotificationBar = (props) => {


  const notification = useSelector(state => state.notification)

  
  console.log(notification)

  if(notification)
  {
    return(<div>
      {notification.type === 'LoginError' && <p style={{color: 'red',border: '1px solid red'}}>Invalid login credentials</p>}
      {notification.type === 'BlogAdded' && <p style={{color: 'green',border: '1px solid green'}}>A new blog added: {notification.blog.title} by {notification.blog.author}</p>}
    </div>)
  }
  else
  {
    return(<div>
      {props.user !== null && <p>User {props.user.name} logged in <button id="logOutBtn"onClick={() => props.logoutfunc()}>Logout</button></p>}
    </div>)
  }
}

export default NotificationBar