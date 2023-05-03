import React ,{useContext}from 'react'
import D from './D'
import { UserContext } from './A'

const C = () => {
    const name = useContext(UserContext)
  return (
    <div>
      <h3> C components user name : {name}</h3>
      <D/>
    </div>
  )
}

export default C
