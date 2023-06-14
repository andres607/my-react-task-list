import React from 'react';
import Task from './Task';

const TaskList = () => {
    const tasks = [
        {id: 1, name: 'Task 1', completed: false},
        {id: 2, name: 'Task 2', completed: true},
        {id: 3, name: 'Task 3', completed: false},
    ];

    retunr (
        <div>
            <h2>Lista de tareas</h2>
            <ul>
                {tasks.map( (task) => (
                    <task key={task.id} task={task}/>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;