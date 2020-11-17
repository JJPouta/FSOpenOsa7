const { useSelector } = require("react-redux")

const UserView = () => {

    const users = useSelector(state => state.users)

    return(
    <div>
        <h2>Users</h2>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Blogs created</th>
                </tr>
            </thead>
            {users.map(user => <tr><td>{user.name}</td><td>{user.blogcount}</td></tr>)}
        </table>
    </div>)
}

export default UserView