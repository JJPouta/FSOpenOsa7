
import React from 'react'
import {
    Switch, Route, Link, useRouteMatch
  } from "react-router-dom" 
  import {Button, Table,ListGroup} from 'react-bootstrap'

const { useSelector} = require("react-redux")

const SingleUserView = ({singleUser}) => {

    if(!singleUser){return null}

return(<div>
            <h2 style={{color:'purple'}}>{singleUser.name}</h2>
            <h3 style={{color:'darkblue'}}>added blogs</h3>
            <ListGroup>
                {singleUser.blogs.map(blog => <ListGroup.Item variant="primary" key={blog.id}>{blog.title}</ListGroup.Item>)}
            </ListGroup>
            <Link to="/users">
                <Button type="button">Back</Button>
            </Link>
            
        </div>)

}

const UsersView = () => {


    const users = useSelector(state => state.users)
    
    const match = useRouteMatch('/users/:username')
    const selectedUser = match ? users.find(u => u.username === match.params.username) : null


    return(
    <div>
        <Switch>
            <Route path="/users/:username">
                <SingleUserView singleUser={selectedUser}/>
            </Route>   
            <Route path='/users'>
                <h2 style={{color:'purple'}}>Users</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Blogs created</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(user => <tr key={user.id}><td>
                        <Link to={`/users/${user.username}`}>{user.name}</Link></td>
                        <td>{user.blogs.length}</td></tr>)}
                    </tbody>
                </Table>
            </Route>
                    
        </Switch>
    </div>
    )
}




export default UsersView