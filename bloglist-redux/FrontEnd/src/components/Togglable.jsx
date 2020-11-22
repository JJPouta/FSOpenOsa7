import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


const Togglable = (props) => {

  const [visible, setVisible] = useState(false)

  const blockHidden = { display: visible ? 'none' : '' }
  const blockVisible = { display: visible ? '' : 'none' }

  const changeBlockVisibility = () => {
    setVisible(!visible)
  }
   
  return(<div>
    <div style={blockHidden}>
      <Button variant="success" id='newBlogBtn' onClick={changeBlockVisibility}>New blog</Button>
    </div>
    <div style={blockVisible}>
      {props.children}
      <Button variant="danger" onClick={changeBlockVisibility}>Cancel</Button>
    </div>
  </div>) 
    
    
}

export default Togglable