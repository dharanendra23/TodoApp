import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {

  let myStyle = {
    position: 'relative',
    minHeight: '70vh'
  }

  return (
    <div className='container my-4' style={myStyle}> 
        <h2>Todos List</h2>

        {props.todos.length === 0 ? <p>No todos to show</p> : 
            props.todos.map((todo)=>{
            return <TodoItem todo = {todo} key = {todo.Sno} deleteItem = {props.deleteItem}/>
        })}
    </div>
  )
}

export default Todos
