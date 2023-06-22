import React, { useState } from "react";
import Task from "./Task";
import useTask from "../hooks/useTask";

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTask();
  const [newTaskName, setNewTaskName] = useState("");

  const handleTaskToggle = (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    updatedTask.completed = !updatedTask.completed;
    updateTask(id, updatedTask);
  };

  const handleTaskDelete = (id) => {
    deleteTask(id);
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        completed: false,
      };
      createTask(newTask);
      setNewTaskName("");
    }
  };

  const handleTaskUpdate = (id, updatedTask) => {
    updateTask(id, updatedTask);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskToggle={handleTaskToggle}
          handleTaskDelete={handleTaskDelete}
          handleTaskUpdate={handleTaskUpdate}
        />
      ))}
    </div>
  );
}

export default TaskList;
