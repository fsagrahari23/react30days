import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount] = useState(0);
    const [history,setHistory] = useState([0]);
    const [position,setPosition] = useState(0);

    const updateCount = (newCount)=>{
        const updatedHistory = history.slice(0,position+1);
        updatedHistory.push(newCount);
        setHistory(updatedHistory);
        setPosition(updatedHistory.length -1);
        setCount(newCount)
    }

     const inc = ()=>{
        updateCount(count + 1)
     }
     const dec = ()=>{
       
       updateCount(count - 1)
        
     }

     const undo = ()=>{
       if(position > 0){
        const newPosition = position-1;
        setCount(history[newPosition])
        setPosition(newPosition)
       }
     }
     const redo = ()=>{
     if (position < history.length - 1) {
      const newIndex = position + 1;
      setCount(history[newIndex]); 
      setPosition(newIndex); 
    }
    }
  return (
    <div>
     <h1>
        Counter undo and redo
     </h1>
     <div>
        <button onClick={inc}>+</button>
        <div>{count}</div>
        <button onClick={dec} disabled={count > 0?false:true}>-</button>
     </div>
     <button onClick={redo}>Redo</button>
     <button onClick={undo}>Undo</button>
    </div>
  )
}
