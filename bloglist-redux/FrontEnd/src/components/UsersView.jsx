
import React, { useState } from 'react'
const { useSelector} = require("react-redux")

const SingleUserView = ({singleUser}) => {


return(<div>
            <h2>{singleUser.name}</h2>
            <h3>added blogs</h3>
            <ul>
                {singleUser.blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
            </ul>
        </div>)

}

const UsersView = () => {

    const [singleUser,SetSingleUser] = useState(null)

    const users = useSelector(state => state.users)
    
    const InitSingleUserView = (event,user) => {
        event.preventDefault()
        SetSingleUser(user)

    }

    return(
    <div>
        <h2>Users</h2>
        {singleUser === null &&
            <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Blogs created</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user => <tr key={user.id}><td><a href={user.username}  onClick={(e) => InitSingleUserView(e,user)}>{user.name}</a></td><td>{user.blogs.length}</td></tr>)}
            </tbody>
        </table>}
        {singleUser !== null && 
        <SingleUserView singleUser={singleUser}/>}
    </div>
    )
}




export default UsersView