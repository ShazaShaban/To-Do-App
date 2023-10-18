import React, { useState } from "react";
import "./App.css";
import TodoList from "./Component/TodoList/TodoList";
import'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div style={{backgroundColor:"rgb(248, 242, 210)",background:"cover" , height:"100vh"}}>
    <div className="App container align-items-center justify-content-center text-center" >
      <TodoList />
    </div>
    </div>
  );
  
}

export default App;

