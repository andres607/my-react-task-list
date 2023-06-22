import React, { useState } from "react";

function Task({ task, handleTaskToggle, handleTaskDelete, handleTaskUpdate }) {
  const { id, name, description, completed } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleToggle = () => {
    handleTaskToggle(id);
  };

  const handleDelete = () => {
    handleTaskDelete(id);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    if (updatedName.trim().length >= 3) {
      handleTaskUpdate(id, {
        name: updatedName,
        description: updatedDescription,
        completed,
      });
      setIsEditing(false);
    } else {
      alert("El nombre de la tarea debe tener al menos 3 caracteres.");
    }
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Actualizar</button>
        </div>
      ) : (
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <input type="checkbox" checked={completed} onChange={handleToggle} />
          <button onClick={handleToggleEdit}>Actualizar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  );
}

export default Task;