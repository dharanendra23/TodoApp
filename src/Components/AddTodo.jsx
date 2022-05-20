import React, { useState } from 'react'

const AddTodo = ({addtodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    let addTodo = (e) => {

        e.preventDefault();

        if(title === "" || desc === "") {

            alert("Title and Description cannot be empty!");
        } else {

         addtodo(title, desc);
         setTitle("");
         setDesc("");
        }
    }

    return (
        <div className='container'>
            <h3>Add Todo</h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value = {title} onChange={(e)=> setTitle(e.target.value)} className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label> 
                <input type="text" value = {desc} onChange={(e)=> setDesc(e.target.value)} className="form-control" id="title" />
            </div>
            <button type="submit" className="btn btn-sm btn-success" onClick={addTodo}>Submit</button>
        </div>
    )
}

export default AddTodo
