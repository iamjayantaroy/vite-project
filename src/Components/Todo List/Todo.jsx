import { useState } from "react";

// TodoList component
const Todo = () => {
  // State to store the list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isEditing: false },
    { id: 2, text: "Build a Todo App", isEditing: false },
    { id: 3, text: "Master React Hooks", isEditing: false },
  ]);

  // State to store the input value for adding new todo
  const [newTodo, setNewTodo] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        isEditing: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  //   Function to toggle the edit mode of a todo
  const toggleEdit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to save the edited text of a todo
  const saveEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  //   const deleteTodo = (id) => {
  //     const updatedTodos = todos.filter((todo) => todo.id !== id);
  //     setTodos(updatedTodos);
  //   };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.isEditing ? (
              <div>
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id, newTodo)}>Save</button>
              </div>
            ) : (
              <div>
                {todo.text}
                <button onClick={() => toggleEdit(todo.id)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default Todo;
