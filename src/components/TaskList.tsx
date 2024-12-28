import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { deleteTask, updateTaskCompleted } from '../services/taskService';
import './taskList.css'
import { TaskModal } from './TaskModal';
import toast from 'react-hot-toast';
export const TaskList = () => {
  const { state, dispatch } = useTaskContext();
  const [taskToEdit, setTaskToEdit] = useState<null | { _id: string, title: string, description: string }>(null);
  
  const toggleCompletion = async (id: string) => {
    const task = state.tasks.find((task) => task._id === id);

    if (task) {
      try {
        // Llama al servicio para actualizar la tarea en el backend
        const updatedTask = await updateTaskCompleted(id, { completed: !task.completed });

        // Actualiza el estado local con la respuesta del backend
        dispatch({
          type: 'UPDATE_TASK',
          payload: updatedTask,
        });
      } catch (error) {
        console.error('Failed to update task:', error);
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      toast.success('Tarea eliminada con éxito!');
      dispatch({
        type: 'DELETE_TASK',
        payload: id,
      });
    } catch (error) {
      toast.error('Hubo un error al eliminar la tarea.');
      console.error('Failed to delete task:', error);
    }
  };

  const handleEdit = (task: any) => {
    setTaskToEdit(task);
  };

  return (
    <div className="todo-list-container">
      <div className="task-list">
        {state.tasks.map((task) => (
          <div
            key={task._id}
            className="task-item flex justify-between items-center p-4 border-b border-gray-200"
          >
            <div className="task-content flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task._id)}
                className="w-5 h-5"
              />
              <div className="flex flex-col items-start">
                <h3
                  className={`task-title text-lg font-semibold ${
                    task.completed ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {task.title}
                </h3>
                <p className="task-date text-sm text-gray-600">
                  {new Date(task.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="task-actions flex space-x-2">
              <button className="edit-button text-blue-500 hover:text-blue-700"
              onClick={() => handleEdit(task)}>
                ✏️
              </button>
              <button
                className="delete-button text-red-500 hover:text-red-700"
                onClick={() => handleDelete(task._id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {taskToEdit && (
        <TaskModal
          onClose={() => setTaskToEdit(null)}
          taskToEdit={taskToEdit}
        />
      )}
    </div>

  
  );
};
