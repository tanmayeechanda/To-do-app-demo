import React, { useState } from "react";
// todoitemis a individual task in a to-do-list

const TodoItem = ({ todo, index, toggleComplete, removeTodo, pinTodo }) => {
  const [swipeStart, setSwipeStart] = useState(null);

  const handleTouchStart = (e) => {
    setSwipeStart(e.touches[0].clientX);
  };
  // State to store the initial X position when touch starts

  const handleTouchEnd = (e) => {
    const swipeEnd = e.changedTouches[0].clientX;
    const swipeDistance = swipeEnd - swipeStart;

    if (swipeDistance > 50) {
      toggleComplete(index); // Swipe right to complete
    } else if (swipeDistance < -50) {
      removeTodo(index); // Swipe left to delete
    }
  };

  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      // swipe direction and performs actions
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <span>{todo.text}</span>
      {todo.dueDate && <p className="due">⏰ {new Date(todo.dueDate).toLocaleString()}</p>}
      <div className="actions">
        <button onClick={() => pinTodo(index)}>{todo.pinned ? "📌 Unflag" : "🚩 Flag"}</button>
        {/* checks if pinned if yes it unflags or makes flagged */}
        <button onClick={() => toggleComplete(index)}>{todo.completed ? "✅ Undo" : "✔ Complete"}</button>
        {/* checks if completed if yes undo or else complete */}
        <button onClick={() => removeTodo(index)}>🗑 Delete</button>
        {/* remove the todo */}
      </div>
    </div>
  );
};

export default TodoItem;
