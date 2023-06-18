// Task.js
import React from "react";

function Task({ task, handleTaskToggle, handleTaskDelete }) {
  const { id, name, completed } = task;

  const handleToggle = () => {
    handleTaskToggle(id);
  };

  const handleDelete = () => {
    handleTaskDelete(id);
  };

  return (
    <div>
      <span>{name}</span>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default Task;