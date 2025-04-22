import React, { useState } from "react";

const TodoItem = ({ todo, index, toggleComplete, removeTodo, pinTodo }) => {
  const [swipeStart, setSwipeStart] = useState(null);

  const handleTouchStart = (e) => {
    setSwipeStart(e.touches[0].clientX);
  };

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
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <span>{todo.text}</span>
      {todo.dueDate && <p className="due">⏰ {new Date(todo.dueDate).toLocaleString()}</p>}
      <div className="actions">
        <button onClick={() => pinTodo(index)}>{todo.pinned ? "📌 Unflag" : "🚩 Flag"}</button>
        <button onClick={() => toggleComplete(index)}>{todo.completed ? "✅ Undo" : "✔ Complete"}</button>
        <button onClick={() => removeTodo(index)}>🗑 Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
