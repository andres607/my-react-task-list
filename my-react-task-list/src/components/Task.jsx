import React, { useState } from "react";

function Task({ task, handleTaskToggle, handleTaskDelete, handleTaskUpdate }) {
  const { id, name, completed } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);

  const handleToggle = () => {
    handleTaskToggle(id);
  };

  const handleDelete = () => {
    handleTaskDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    if (updatedName.trim() !== "") {
      handleTaskUpdate(id, { name: updatedName, completed });
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <button onClick={handleUpdate}>Actualizar</button>
        </>
      ) : (
        <>
          <span>{name}</span>
          <input type="checkbox" checked={completed} onChange={handleToggle} />
          <button onClick={handleEdit}>Actualizar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </>
      )}
    </div>
  );
}

export default Task;