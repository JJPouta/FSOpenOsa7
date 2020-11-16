
const showNotification = (content) => {

    console.log('content is',content)
    return {
      type: 'CHANGE_NOTIFICATION',
      message: content
      }
  
  }
  
  const hideNotification = () => {
  
    return({type: 'REMOVE_NOTIFICATION'})
  
  }
  
  export const setNotification = (content,timeOut) => {
      
    return (dispatch) => {
    
      dispatch(showNotification(content))
      
      setTimeout(() => {
        dispatch(hideNotification())
      }, timeOut * 1000)
  
    }
  
  
    }
  
  
  
    const reducer = (state = null, action) => {
      console.log('state now: ', state)
      console.log('action', action)
      
      switch (action.type) {
        case 'CHANGE_NOTIFICATION':
          const newNotification = action.message
          return newNotification
        case 'REMOVE_NOTIFICATION':
          return null
      default:
      return state
      }  
    }
  
  export default reducer