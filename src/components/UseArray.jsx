import React, { useState } from "react";

const UseArray = () => {
  const myarry = [{ name: "vikas" }, { name: "vishal" }, { name: "akash" }];


  const [items, setitems] = useState(myarry);

  const clearItems =()=>{
    setitems ([])
  };

  const addItems =()=>{
    setitems([...items,{
      value: Math.floor(Math.random() *100)+2

      
    }])
    
  }
    

  return (
    <div>
      <h2> Operations on arrys</h2>
      <ul>
        {items.map((item, i) => 
           <li key={i}>{item.name} {item.value}</li>
        )}
        <br />

        <button onClick={clearItems}> Clear</button>
        <button onClick={addItems}> Additem</button>
      </ul>
    </div>
  );
};

export default UseArray;
