
  
  
  export const setNotification = (content,timeOut) => {
      
    return (dispatch) => {
    
      dispatch(showNotification(content))
      
      setTimeout(() => {
        dispatch(hideNotification())
      }, timeOut * 1000)
  
    }
  
  
    }
  
  
  
    const reducer = (state = [], action) => {     
      switch (action.type) {
        case 'INIT_USERS':
          const userList = action.data
          return userList
      default:
      return state
      }  
    }
  
  export default reducer