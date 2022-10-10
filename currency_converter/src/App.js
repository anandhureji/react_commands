import React, { useState,useReducer } from 'react'

function reducer(state,action)
{
return{
  count:state.count+1
}
}

const App = () => {


 const[state,dispatch] = useReducer(reducer,{count:0})
  const[count,setCount] = useState(4)

  const decrementCount = () =>{
    // setCount(prevCount => prevCount-1)
  }

  const incrementCount = ()=>{
    // setCount(count+1)
    dispatch()
  }
  return (
    <div>
    <button onClick={decrementCount}>-</button>
    <span>{state.count}</span>
    <button onClick={incrementCount}>+</button>
      
    </div>
  )
}

export default App
