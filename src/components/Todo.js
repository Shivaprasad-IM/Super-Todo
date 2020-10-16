import React from 'react'

import './Todo.css'

const Todo = (props) => {
    return (
        <div className="todo">
            <label className="container">
                <input type="checkbox" onChange={() => {} } />
                <span className="checkmark"></span>  
                {props.task} - {props.taskIndex}
            </label>
       </div>

    )
}

export default Todo