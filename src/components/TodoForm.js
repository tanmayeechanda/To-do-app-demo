import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [due, setDue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo({ text, dueDate: due, completed: false, pinned: false });
    setText("");
    setDue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
  <input type="text" placeholder="Add a new task..." className="todo-input" value={text} onChange={(e) => setText(e.target.value)} />
  <input type="date" className="due-input" value={due} onChange={(e) => setDue(e.target.value)} />
  <button type="submit" className="add-btn">Add</button>
</form>

  );
};

export default TodoForm;
