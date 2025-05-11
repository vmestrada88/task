import React from 'react';

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
