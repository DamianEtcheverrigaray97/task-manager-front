import React, { useState } from 'react';
import { TaskList } from '../components/TaskList';
import { TaskModal } from '../components/TaskModal';

export const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-5">

        <button onClick={() => setShowModal(true)} className="bg-[#c934db] text-white px-4 py-2 rounded m-0">
          Agregar Tarea
        </button>

        <select className="bg-white border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm">
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
