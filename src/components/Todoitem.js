
import React from 'react'


function TodoItem(props) {
    const completedStyle = {
        color: "red",
        textDecoration: "line-through"
    }
    return (
            <div className="todo-item" >
                <input 
                type='checkbox' 
                checked={props.item.completed} 
                onChange={(event) => props.handleChange(props.item.id)} /> 
            
                <p style={props.item.completed ? completedStyle: null}> {props.item.text} </p>
            </div>
    )
}

export default TodoItem

// added inline style to paragraph element that would change styling if task is completed/checkbox checked
