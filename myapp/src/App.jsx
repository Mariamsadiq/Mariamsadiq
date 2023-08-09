import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file

export default function App(props) {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(()=>{
    console.log(todoList, newTodo)
  },[todoList, newTodo])

  const handleInputChange = (event) => {
    // Update the state with the current input value
    setNewTodo(event.target.value);
  };

  const handleAddNew = () => {
    // Add a new item to the state
      setTodoList([...todoList, { id: Date.now(), text: newTodo, isDone: false }]);
      setNewTodo('');
  };

  const handleToggleDone = (id) => {
    // Toggle the "isDone" property of the todo item with the given id
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(updatedTodoList);
  };

  return (
    <div className='App'>
      <input
        type="text"
        value={newTodo} // Bind the input value to the state
        onChange={handleInputChange} // Handle input changes
        placeholder="Enter a new todo..."
      />

      <button onClick={handleAddNew}> Add a new </button>

      {/* Display the list of todos */}
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleToggleDone(todo.id)}>
              {todo.isDone ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
