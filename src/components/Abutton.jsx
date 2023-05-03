import React from 'react'

 function Abutton({message ,child}) {
  return (
    <button onClick={()=> alert(message)}> 
        
     {child}   
    </button>
  );
}

export default function Toolbar(){
    return(
        <div>
            <Abutton message='playing now' child={'play'}/>
            <Abutton message='updateing' child='update'/>
        </div>
    );
}
