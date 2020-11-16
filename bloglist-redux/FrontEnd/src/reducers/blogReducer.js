import blogService from '../services/blogs'


export const initBlogs = () => {

  return async (dispatch) => {
    const bloglist = await blogService.getAll()
    // Sortataan blogit likejen mukaiseen järjestykseen suurimmasta pienempään
    const bloglistSorted = bloglist.sort((a,b) => {return b.likes - a.likes})
    
    dispatch({type: 'INIT_BLOGS',
    data: bloglistSorted})
}
}

// Tämä ei taida kuulua tänne --> uusi reducer (7.11 kesken)
export const addLike = (id,updatedBlog) => {
  
  return async (dispatch) => {
    
    await blogService.updateBlog(id,updatedBlog)
    dispatch({type: 'CASTLIKE',
    data: {id}})
    
  }

}

export const removeBlog = (id) => {

    return async (dispatch) => {
      
      await blogService.deleteBlog(id)
      dispatch({ type:'REMOVEBYID',
      data: {id}})
    }
}

export const createNewBlog = (newBlogObj) => {

return async (dispatch) => {
  
  const createdBlog = await blogService.createNew(newBlogObj)
  dispatch({ type:'ADDNEW',
  data: {createdBlog}})
}

}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch (action.type) {
    case 'CASTLIKE':
      const id = action.data.id
      const selectedBlog = state.find(a => a.id === id)
      const changedBlog = { 
        ...selectedBlog} 
        changedBlog.likes +=1
        return state.map(blog => blog.id !== id ? blog : changedBlog)
    case 'ADDNEW':
      const newBlog = action.data.createdBlog
      return [...state,newBlog]
    case 'REMOVEBYID':
      const removedBlogID = action.data.id
      return state.filter(blog => blog.id !== removedBlogID)
    case 'INIT_BLOGS':
      return action.data
    default:
      return state
  }  
}

export default reducer