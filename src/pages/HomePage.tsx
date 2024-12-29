import React, { useState } from 'react';
import { TaskList } from '../components/TaskList/TaskList';
import { TaskModal } from '../modals/TaskModal';
import { useTaskContext } from '../context/TaskContext';
import { fetchTasks } from '../services/taskService';

export const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useTaskContext();

  const handleFilterChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    let completed: boolean | undefined;
    if (value === 'completed') {
      completed = true;
    } else if (value === 'pending') {
      completed = false;
    } else {
      completed = undefined; // Para "Todos"
    }

    try {
      const tasks = await fetchTasks(completed);
      dispatch({ type: 'SET_TASKS', payload: tasks }); // Actualizamos el estado global
    } catch (error) {
      console.error('Error fetching filtered tasks:', error);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-5">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded m-0"
        >
          Agregar Tarea
        </button>

        <select
          className="bg-white border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          onChange={handleFilterChange}
        >
          <option value="all">Todos</option>
          <option value="completed">Completados</option>
          <option value="pending">Pendientes</option>
        </select>
      </div>

      <TaskList />
      {showModal && <TaskModal onClose={() => setShowModal(false)} />}
    </div>
  );
};
