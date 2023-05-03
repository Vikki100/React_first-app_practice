import {useState} from 'react'

const Profile = (props) => {

    const [login, setlogin]=useState(2);


  return (
    <div>
      <h3>condititonal rendering</h3>
      {login==true?'welcom vikas':login==2?'you are the first user':'please login first'};
       <br></br><button onClick={()=>{props.fun()}}>click me</button>
    </div>
  )
}

export default Profile