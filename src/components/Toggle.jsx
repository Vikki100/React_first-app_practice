import {useState} from 'react'

const Toggle = () => {

    const [name,setname]=useState('on');
    const [stats,setstats]=useState('click for off ');

    function togglename(){
        console.log(name);

        name==='on'? setname('off'):setname('on');

        name==='on'?setstats('click for on '): setstats('click for off');
    }

  return (
    <div>
        <h1>{name}</h1>

        <button onClick={togglename}> {stats}</button>
    </div>
  )
}

export default Toggle
