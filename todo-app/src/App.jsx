import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const handleUpdateTodo = () => {
    if (editText.trim() === '') return;
    const updatedTodos = todos.map((todo, i) =>
      i === editIndex ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText('');
  };


  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 border border-gray-300 rounded-l-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddTodo}
              className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          {editIndex !== null && (
            <div className="flex mb-4">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Update your todo..."
                className="flex-1 border border-gray-300 rounded-l-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleUpdateTodo}
                className="bg-green-500 text-white rounded-r-md px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Update
              </button>
            </div>
          )}
          <ul className="space-y-2">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center p-2 rounded-md border bg-gray-100"
              >
                <span className="flex-1">{todo.text}</span>
                <button
                  onClick={() => handleEditTodo(index)}
                  className="bg-yellow-500 text-white rounded-md px-3 py-1 mx-1 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="bg-red-500 text-white rounded-md px-3 py-1 mx-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      

    </>
  )
}

export default App
