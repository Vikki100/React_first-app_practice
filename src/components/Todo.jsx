import React, { useState } from "react";

const Todo = () => {
  const person = [
    {  id:1, name: "viaks", age: 21 },
    {  id:2, name: "akash", age: 23 },
    {  id:3, name: "abhay", age: 12 },
    {  id:4, name: "akshay", age: 21 },
  ];
  const [items, setitems] = useState(person);

  const removeItem = (id) => {
    const mynewarray =  items.filter((curr)=>{
     return curr.id !==id    
    
    })
     setitems(mynewarray) 
   
  };

  return (
    <div>
      <h1> My First Todo App</h1>

      <ul>
        {items.map((currentItem, index) => {
          return (
            <li key={index}>
              name:{currentItem.name} age:{currentItem.age}
              <button
                onClick={() => {
                  removeItem(currentItem.id);
                }}
              >
               
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
