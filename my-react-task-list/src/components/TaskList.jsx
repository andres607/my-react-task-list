import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      return storedTasks;
    } else {
      return [];
    }
  });
  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskName("");
    }
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
        />
      ))}
    </div>
  );
}

export default TaskList;