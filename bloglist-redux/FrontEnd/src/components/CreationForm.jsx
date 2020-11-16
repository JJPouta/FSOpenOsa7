import React, {useState} from 'react'
import blogService from '../services/blogs'
import {setNotification} from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const BlogCreatorForm = ({bloglistReload}) => {

  const [newBlog,setNewBlog] = useState(null) 
  const dispatch = useDispatch() 
    
  const createBlog = async (e) => {
    e.preventDefault()
    await blogService.createNew(newBlog)
    dispatch(setNotification({type:'BlogAdded',blog:newBlog},3))
    bloglistReload()
  }
    
  const blogBuilder = (value,id) => {

    // eslint-disable-next-line default-case
    switch (id) {
    case 'newBlogTitle':
      setNewBlog({...newBlog,
        title: value,
        likes: 0})
      break;
    case 'newBlogAuthor':
      setNewBlog({...newBlog,
        author: value,
        likes: 0})
      break;
    case 'newBlogURL':
      setNewBlog({...newBlog,
        url: value,
        likes: 0})
      break;
    }
   
  }
  return(
    <div>
      <h3 style={{color: 'purple'}}>Create New Blog</h3>
      <form onSubmit={createBlog}>
        <div>
          <div style={{margin: '10px'}}>
            <label style={{display: 'inline-block',width:'100px'}}>Title</label>
            <input onChange={({ target }) => blogBuilder(target.value,target.id)} id="newBlogTitle" type="text"></input>
          </div>
          <div style={{margin: '10px'}}>
            <label style={{display: 'inline-block',width:'100px'}}>Author</label>
            <input onChange={({ target }) => blogBuilder(target.value,target.id)} id="newBlogAuthor" type="text"></input>
          </div>
          <div style={{margin: '10px'}}>
            <label style={{display: 'inline-block',width:'100px'}}>URL</label>
            <input onChange={({ target }) => blogBuilder(target.value,target.id)} id="newBlogURL" type="text"></input>
          </div>
          <button style={{width:'80px',backgroundColor: 'green',color:'white'}} id="submitNewBlogBtn"  type="submit">Create</button>
        </div>
      </form>
    </div>)


}

export default BlogCreatorForm