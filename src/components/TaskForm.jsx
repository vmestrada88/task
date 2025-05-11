import React from 'react';

function TaskForm({ input, setInput, addTask }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">+ Add Task</button>
    </form>
  );
}

export default TaskForm;
