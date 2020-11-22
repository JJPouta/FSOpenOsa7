import React, {useState} from 'react'
import {removeBlog,addLike} from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
import {Button} from 'react-bootstrap'

const Blog = ({blog}) => {

  const [visible,setVisible] = useState(false)
  const dispatch = useDispatch() 

  const largeBlogHidden = { display: visible ? 'none' : '',border: 'solid 1px purple',padding: '2px',marginTop:'5px' }
  const largeBlogVisible = { display: visible ? '' : 'none',border: 'solid 1px purple',padding: '2px',marginTop:'5px'}

  const changeBlockVisibility = () => {
    setVisible(!visible)
  }
  

  const updateBlog =  () => {

    
    const user = blog.user ? blog.user.id : null
    
    const newBlogContent = {...blog,
      user: user
    }

    newBlogContent.likes = newBlogContent.likes += 1
    
    dispatch(addLike(blog.id,newBlogContent))
  }

  const blogRemoval = () => {

    const remove = window.confirm(`Remove blog: ${blog.title} by ${blog.author}`)
    
    if(remove)
    {
      dispatch(removeBlog(blog.id))
    }
  }

  return(
    <div>
      <div style={largeBlogHidden} className='BlogInfo'>
        <p><b>Aihe:</b>{blog.title} <b>Kirjoittaja:</b> {blog.author} <Button className='ViewBtns' onClick={changeBlockVisibility}>View</Button></p>
      </div>
      <div style={largeBlogVisible} className='LargeBlogInfo'>
        <p><b>Aihe:</b>{blog.title} <Button className='HideBtns' variant="outline-secondary" onClick={changeBlockVisibility}>Hide</Button></p>
        <p><b>URL:</b>{blog.url}</p>
        <p className='LikeRows'><b>Tykkäykset:</b>{blog.likes}<Button variant="outline-success" onClick={updateBlog} className='LikeBtns'>Like</Button></p>
        <p><b>Kirjoittaja:</b>{blog.author}</p>
        <p><Button className='RemoveBtns'  variant="outline-danger" onClick={blogRemoval}>Remove</Button></p>
      </div>  
    </div>)
}
  
  


export default Blog
