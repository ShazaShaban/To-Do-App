import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input is empty before adding a todo
    if (input.trim() === "") {
      return; // Exit the function if input is empty or only contains whitespace
    }

    props.addTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div className="form-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
          placeholder="ex: first task"
        />
      </div>
      <button type="submit" className="btn btn btn-outline-warning" style={{"marginTop":"15px"}}>
        Add Todo
      </button>
    </form>
  );
}
