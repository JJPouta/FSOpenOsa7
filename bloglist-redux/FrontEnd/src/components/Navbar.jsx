import React from 'react'
import {Link} from "react-router-dom" 
import {Button, Form, Nav, Navbar} from 'react-bootstrap'
import '../components/customCSS.css'

  const NavigationBar = ({user,logoutfunc}) => {

    const userName = user !== null ? user.username : null

    return(
        
            <Navbar id="navBar">
                <Navbar.Collapse>
                <Nav.Link>
                <Link to='/blogs'>
                    Blogs
                </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to='/users'>
                    Users
                </Link>
                </Nav.Link>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                {userName ? <><Navbar.Text id="nbText">{userName} logged in</Navbar.Text><Button id="logOutBtn" onClick={() => logoutfunc()}>Logout</Button></> : <Nav.Link><Link to='/login'>Login</Link></Nav.Link>}
                </Navbar.Collapse>
                
               
                
            </Navbar >)
        
}


export default NavigationBar