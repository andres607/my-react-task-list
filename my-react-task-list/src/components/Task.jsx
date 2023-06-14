import React from 'react';

const Task = ({ task }) => {
    return (
        <li>
            <span>{task.name}</span>
            <input type="checkbox" checked={task.completed} readOnly />
        </li>
    );
};

export default Task;