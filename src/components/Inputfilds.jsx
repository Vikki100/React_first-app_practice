import React, { useState } from 'react'

const Inputfilds = () => {
    const [username, setusername]=useState('')
    const [about, setabout]=useState('')
  return (
    <div>
      <h1> working on input fileds</h1>
      <label htmlFor='username'> enter your name</label>
      <input type="text" name='name' value={username} 
       onChange={(e)=>{setusername(e.target.value)}}/>

       <p>{username}</p>
       <br />
       <label htmlFor='about'>wirte something about your self</label>
      <input type="text" name='about'  value={about}
       onChange={(e)=>{setabout(e.target.value)}}/>

       <h2>{about}</h2>


    </div>
  )
}

export default Inputfilds
