import React, { useState,useReducer } from 'react'

const ACTIONS = {
  INCREMENT:'increment',
  DECREMENT:'decrement'
}

function reducer(state,action)
{
  if(action.type==ACTIONS.INCREMENT)
  {
    return{
      count:state.count+1
    }
  }
  else
  {
    return{
      count:state.count-1
    }
  }

}

const App = () => {


 const[state,dispatch] = useReducer(reducer,{count:0})
  const[count,setCount] = useState(4)

  const decrementCount = () =>{
    // setCount(prevCount => prevCount-1)
    dispatch({type:ACTIONS.DECREMENT})
  }

  const incrementCount = ()=>{
    // setCount(count+1)
    dispatch({type:ACTIONS.INCREMENT})
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
