import React, { useState ,useEffect} from 'react'

const Useeffect = () => {

    const [first, setfirst] = useState(0);

    const handalchange =() =>{
        setfirst(first +1)
    }

    useEffect(() => {
     document.title = `you clicked ${first
    }`
      })
    
  return (
    <div>
      {first}
      <button onClick={handalchange}>click</button>
    </div>
  )
}

export default Useeffect
