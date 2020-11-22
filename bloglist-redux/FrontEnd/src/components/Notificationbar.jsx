import React from 'react'
import {useSelector } from 'react-redux'
import {Alert} from 'react-bootstrap'

const NotificationBar = () => {


  const notification = useSelector(state => state.notification)

  if(notification)
  {
    return(<div>
      {notification.type === 'LoginError' && <Alert variant="danger" >Invalid login credentials</Alert>}
      {notification.type === 'BlogAdded' && <Alert variant="success">A new blog added: {notification.blog.title} by {notification.blog.author}</Alert>}
    </div>)
  }
  else
  {
    return null
  }
 
}

export default NotificationBar