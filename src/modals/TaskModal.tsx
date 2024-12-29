import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { createTask, updateTask } from '../services/taskService';
import toast from 'react-hot-toast';

export const TaskModal: React.FC<{ onClose: () => void, taskToEdit?: { _id: string, title: string, description: string } }> = ({ onClose, taskToEdit }) => {
  const { dispatch } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Título es requerido.');
      return;
    }

    try {
      const taskData = { title: title.trim(), description: description.trim() };

      if (taskToEdit) {
        const updatedTask = await updateTask(taskToEdit._id, taskData);
        dispatch({ type: 'UPDATE_TASK', payload: updatedTask });

        toast.success('Tarea actualizada con éxito!');
      } else {

        const createdTask = await createTask(taskData);
        dispatch({ type: 'ADD_TASK', payload: createdTask });

        toast.success('Tarea agregada con éxito!');
      }

      onClose();
    } catch (err: any) {
      // Si el error tiene la propiedad 'errors', buscamos el mensaje específico
      if (err?.response?.data?.errors?.length > 0) {
        const errorMsg = err.response.data.errors[0]?.msg || 'Hubo un error al procesar la tarea.';
        setError(errorMsg); 
        toast.error(errorMsg);
      } else {
        setError('Hubo un error al procesar la tarea.');
        toast.error('Hubo un error al procesar la tarea.');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">{taskToEdit ? 'Editar Tarea' : 'Agregar Tarea'}</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Título
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ingresar título de la tarea"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Descripción
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ingresa la descripción de la tarea"
              rows={4}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-3 hover:bg-gray-600"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {taskToEdit ? 'Actualizar' : 'Agregar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
