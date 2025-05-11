import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  // Estado para las tareas
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Cargar las tareas desde localStorage al inicio
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Guardar las tareas en localStorage cada vez que cambian
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Función para agregar tareas
  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = { id: Date.now(), text: input, done: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  // Función para eliminar tareas
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Función para marcar como completada
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskForm input={input} setInput={setInput} addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
