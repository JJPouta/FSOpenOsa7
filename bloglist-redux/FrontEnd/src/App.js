import React, { useState, useEffect} from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import loginService from './services/login' 
import BlogCreatorForm from './components/CreationForm'
import blogService from './services/blogs'
import NotificationBar from './components/Notificationbar'
import {setNotification} from './reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import {initBlogs} from './reducers/blogReducer'
import {useSelector } from 'react-redux'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currUser, setCurrUser] = useState(null)

  const dispatch = useDispatch()

  const blogs = useSelector(state => state.blogs)

  // Uloskirjautuu sovelluksesta
  const logOut = () => {

    window.localStorage.removeItem('blogAppUser')
    setCurrUser(null)
    console.log('user logged out')
  }
  
  const handleLogin = async (event) => {
    event.preventDefault()

    try 
    {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'blogAppUser', JSON.stringify(user)
      ) 

      blogService.setToken(user.token)
      setCurrUser(user)
      setUsername('')
      setPassword('')
    } catch (exp) {
      dispatch(setNotification({type: 'LoginError'},3))
    }
  }


  useEffect(() => {
    dispatch(initBlogs())
    
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('blogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setCurrUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <h2 style={{color:'purple'}}>BLOGS</h2>
      <NotificationBar user={currUser} logoutfunc={logOut}/>
      {currUser === null && 
      <LoginForm loginFunction={handleLogin} usernameFunction={setUsername} passwordFunction={setPassword}/>}
      {currUser !== null &&
      <Togglable>
        <BlogCreatorForm/>
      </Togglable>
      }
      {currUser !== null &&
      blogs.map(blog =>
        <Blog key={blog.id} blog={blog}/>)}
    </div>
  )
}

export default App