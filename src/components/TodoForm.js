import React, { useState } from "react";
//TodoForm used  to add to-dos and their due date

const TodoForm = ({ addTodo }) => {
  // state for the task text input
  const [text, setText] = useState("");
  const [due, setDue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // it does not allow page to reload 
    if (!text.trim()) return;
    // it stops giving empty responses
    addTodo({ text, dueDate: due, completed: false, pinned: false });
    //  calls addTodo function 
    setText("");
    // clears the input after submitting todo
    setDue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
  <input type="text" placeholder="Add a new task..." className="todo-input" value={text} onChange={(e) => setText(e.target.value)} />
  {/* takes input for adding tasks */}
  <input type="date" className="due-input" value={due} onChange={(e) => setDue(e.target.value)} />
  {/* sets dueDate on selected Date */}
  <button type="submit" className="add-btn">Add</button>
  {/* button to submit a task */}
  </form>

  );
};

export default TodoForm;
