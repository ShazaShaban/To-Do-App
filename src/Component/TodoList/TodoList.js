import React, { useState } from "react";
import TodoForm from "../Form/TodoForm";
import TodoItem from "../Item/TodoItem";
import './TodoList.css'

function TodoList(){
const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false, important: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    setTodos(updatedTodos)
  }
  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="container fluid align-items-center justify-content-center " style={{ padding:"50px", background:"rgb(11, 55, 92)", border:"3px solid black"}}>

      <h1 style={{"marginBottom":"20px",color:"white" }}>To-Do App!</h1>
      <p  style={{"marginBottom":"15px", color:"white"}}>Add New Todo</p>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>

      {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}
export default TodoList;