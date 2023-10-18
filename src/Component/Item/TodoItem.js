import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faPen} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css'

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>
            {todo.text}
            <div className="iconsContainer">
                <button onClick={() => importantTodo(todo.id)} className="important-btn"><FontAwesomeIcon icon={faExclamation} /></button>
                <FontAwesomeIcon
                  icon={faCheckCircle} style={{ "marginRight": "5px" }} onClick={() => removeTodo(todo.id)}/>
                <FontAwesomeIcon
                  icon={faPen} onClick={() => completeTodo(todo.id)}/>
            </div>
        </div>
    )
}
