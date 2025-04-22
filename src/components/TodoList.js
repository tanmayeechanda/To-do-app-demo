import React from "react";
import TodoItem from "./TodoItem";
// imported Todoitem from Todoitem.js
// TodoList  is the one takes what to be done when and which time 

const TodoList = ({ todos, category, toggleComplete, removeTodo, pinTodo }) => {
  const filteredTodos = todos.filter(todo => {
    if (!category) return false; 
    // Hide tasks initially
    if (category === "today") return new Date(todo.dueDate).toDateString() === new Date().toDateString(); 
    // shows the tasks that are due today
    if (category === "scheduled") return new Date(todo.dueDate) > new Date();
    // shows all sceduled taks
    if (category === "flagged") return todo.pinned;
    // shows flagged
    if (category === "completed") return todo.completed;
    // marks completed
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? <p className="empty-text">No reminders found!</p> : 
      // if no tasks there it shows no remainders found
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
