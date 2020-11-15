import { useState } from 'react'

export const useField = (type,resetMode) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  console.log(resetMode.current)

  if(resetMode.current === 1)
  {
    return{type,onChange,value: ""}
  }
  
    return {
      type,
      value,
      onChange
    }

  
}