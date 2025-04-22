export const loadTodos = () => {
  // function to load todos
    const savedTodos = localStorage.getItem("todos");
    // if there are saved then parse them
    return savedTodos ? JSON.parse(savedTodos) : [];
    // if not allow empty
  };
  
  export const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  