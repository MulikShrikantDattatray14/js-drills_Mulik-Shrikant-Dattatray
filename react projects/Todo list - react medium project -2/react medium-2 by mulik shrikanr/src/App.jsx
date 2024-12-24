import React, { useState } from "react";
import "./App.css";

const StraightLine = () => (
  <div
    style={{ border: "3px solid black", margin: "20px 0", width: "40vw" }}
  ></div>
);
const StraightLine1 = () => (
  <div
    style={{ border: "1px solid black", margin: "20px 0", width: "40vw" }}
  ></div>
);
function useTodoLogic() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => setTask(event.target.value);

  const handleSubmit = () => {
    if (task.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTodos = todos.map((todo, index) =>
          index === editingIndex ? { ...todo, task } : todo
        );
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        setTodos([...todos, { task, completed: false }]);
      }
      setTask("");
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setTask("");
  };

  const handleEdit = (index) => {
    setTask(todos[index].task);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleDoubleClick = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return {
    task,
    todos,
    editingIndex,
    handleInputChange,
    handleSubmit,
    handleCancel,
    handleEdit,
    handleDelete,
    handleDoubleClick,
  };
}

function App() {
  const {
    task,
    todos,
    editingIndex,
    handleInputChange,
    handleSubmit,
    handleCancel,
    handleEdit,
    handleDelete,
    handleDoubleClick,
  } = useTodoLogic();

  return (
    <div className="todo-app">
      <StraightLine />
      <h1>Todo List</h1>
      <StraightLine />
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter your todo"
          style={{ width: "30vw", height: "4vh", borderRadius: "5px" }}
        />
      </div>
      <div className="button-container">
        <button onClick={handleSubmit}>
          {editingIndex !== null ? "Update" : "Submit"}
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      <StraightLine1 />
      <h4>Double click on todo to toggle completion status</h4>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} onDoubleClick={() => handleDoubleClick(index)}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",

                color: todo.completed ? "gray" : "black",
              }}
            >
              {todo.completed ? "✅" + todo.task : todo.task}
            </span>
            <div>
              <button
                onClick={() => handleEdit(index)}
                style={{ backgroundColor: "green", color: "white" }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <StraightLine1 />
    </div>
  );
}

export default App;
