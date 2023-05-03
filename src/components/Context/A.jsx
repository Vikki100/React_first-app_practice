import React, { createContext, useState } from 'react';
import B from './B';
import Button from 'react-bootstrap/Button';

const UserContext = createContext();
const A = () => {
    const [username ,setusername]=useState('vikas')
  return (
    <UserContext.Provider value={username}>
    <div>
        <p> Useing contex Api data sharing  from A to  F and C</p>
      <h3> A Components user: {username}</h3>
      <B/>

        <Button variant="primary">Primary</Button>
    

    </div>
    </UserContext.Provider>
  )
}

export default A
export {UserContext}
