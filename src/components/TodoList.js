import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, category, toggleComplete, removeTodo, pinTodo }) => {
  const filteredTodos = todos.filter(todo => {
    if (!category) return false; // Hide tasks initially
    if (category === "today") return new Date(todo.dueDate).toDateString() === new Date().toDateString();
    if (category === "scheduled") return new Date(todo.dueDate) > new Date();
    if (category === "flagged") return todo.pinned;
    if (category === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? <p className="empty-text">No reminders found!</p> : 
        filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            pinTodo={pinTodo}
          />
        ))
      }
    </div>
  );
};

export default TodoList;
