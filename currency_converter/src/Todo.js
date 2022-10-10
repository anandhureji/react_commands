import React ,{useReducer, useState} from 'react'
import Todos from './Todos'

function reducer(todos,action)
{
    switch(action.type)
    {
        case ACTIONS.ADD_TODO:
            return[...todos,newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo=>{
                if(todo.id===action.payload.id)
                {
                    return{...todo,complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODOD:
            return todos.filter(todo=>todo.id!==action.payload.id)
        default:
            return todos

    }

}

function newTodo(name){
    return{
        id:Date.now(),name:name,complete:false
    }

}

export const ACTIONS = {
    ADD_TODO:'add-todo',
    TOGGLE_TODO:'toggle-todo',
    DELETE_TODOD:'delete_todo'

}

const Todo = () => {
    const [todos,dispatch] = useReducer(reducer,[])
    const [name,setName] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}})
        setName('')

    }
    console.log(todos)
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text"  value = {name} onChange={e=>setName(e.target.value)}/>
    </form>
    {
        todos.map(todo=>{

           return <Todos key={todo.id} todo={todo} dispatch={dispatch} />
        })
    }
    
      
    </div>
  )
}

export default Todo
