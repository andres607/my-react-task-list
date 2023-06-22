import React, { useState } from "react";
import Task from "./Task";
import useTask from "../hooks/useTask";

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTask();
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleTaskToggle = (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    updatedTask.completed = !updatedTask.completed;
    updateTask(id, updatedTask);
  };

  const handleTaskDelete = (id) => {
    deleteTask(id);
  };

  const handleAddTask = () => {
    if (newTaskName.trim().length >= 3) {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        description: newTaskDescription,
        completed: false,
      };
      createTask(newTask);
      setNewTaskName("");
      setNewTaskDescription("");
    } else {
      alert("El nombre de la tarea debe tener al menos 3 caracteres.");
    }
  };

  const handleTaskEdit = (id) => {
    setEditingTaskId(id);
  };

  const handleTaskUpdate = (id, updatedTask) => {
    updateTask(id, updatedTask);
    setEditingTaskId(null);
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          style={{ marginRight: "1rem" }}
        />
        <textarea
          placeholder="Descripción de la tarea"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          style={{ marginBottom: "1rem" }}
        ></textarea>
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>

      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            isEditing={editingTaskId === task.id}
            handleTaskToggle={handleTaskToggle}
            handleTaskDelete={handleTaskDelete}
            handleTaskEdit={handleTaskEdit}
            handleTaskUpdate={handleTaskUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;