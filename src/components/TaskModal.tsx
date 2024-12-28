import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

export const TaskModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { dispatch } = useTaskContext();
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title.trim()) {
      const newTask = {
        _id: new Date().toISOString(),
        title,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
        <div className="flex justify-end">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Add
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
