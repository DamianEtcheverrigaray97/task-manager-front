import React from 'react';

interface TaskViewModalProps {
  task: { title: string; description: string };
  onClose: () => void;
}

export const TaskViewModal: React.FC<TaskViewModalProps> = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 p-9">
            {/* Botón de cerrar */}
            <span
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none text-lg p-2.5 cursor-pointer"
                aria-label="Cerrar"
            >
                ✖️
            </span>

            {/* Contenido del modal */}
            <h2 className="text-gray-900 text-2xl font-bold mb-4 break-words">{task.title}</h2>
            {task.description ? (
                <p className="text-gray-700 break-words">{task.description}</p>
            ) : (
                <p className="text-sm text-gray-500 italic">
                Esta tarea no tiene una descripción disponible.
                </p>
            )}
        </div>
    </div>
  );
};
