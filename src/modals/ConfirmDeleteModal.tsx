import React from 'react';

interface ConfirmDeleteModalProps {
  onConfirm: () => void; // Acción para confirmar la eliminación
  onCancel: () => void;  // Acción para cancelar
  taskTitle: string;     // Título de la tarea a eliminar
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onConfirm, onCancel, taskTitle }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Eliminar Tarea</h2>
        <p className="mb-6">
          ¿Estás seguro de que deseas eliminar la tarea <span className="font-bold">"{taskTitle}"</span>? 
          Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-3 hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
