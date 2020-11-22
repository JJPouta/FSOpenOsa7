import userService from '../services/users'
  
  
  export const initUsers = () => {
      
    return async (dispatch) => {
      const userList = await userService.getUsers()
        // Sortataan blogit likejen mukaiseen järjestykseen suurimmasta pienempään
        
        dispatch({type: 'INIT_USERS',
        data: userList})
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