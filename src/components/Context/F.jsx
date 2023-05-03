import React , {useContext ,useState} from 'react';
import { UserContext } from './A';



const F = () => {
    const user = useContext(UserContext);
  return (
    <div>
      <h3> F components user : {user}</h3>
    </div>
  )
}

export default F
        