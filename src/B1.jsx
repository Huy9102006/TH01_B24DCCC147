import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input === '') return; 

    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bài 1: To-do List</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Nhập công việc"
        />
        <button onClick={handleAddTodo}>Thêm</button>
      </div>      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
