import React from 'react'

export default function TodoItem(props) {
  return (
    <>
    <div className='my-3'>
      <h4>{props.todo.Title}</h4>
      <p>{props.todo.Desc}</p>
      <button id ="del" className='btn btn-sm btn-danger' onClick={ ()=>{props.deleteItem(props.todo)} }>Delete</button>
    </div>
    <hr />
    </>
  )
}
