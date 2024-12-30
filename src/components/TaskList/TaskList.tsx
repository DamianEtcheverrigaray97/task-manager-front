import { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { deleteTask, updateTaskCompleted } from '../../services/taskService';
import './taskList.css'
import { TaskModal } from '../../modals/TaskModal';
import toast from 'react-hot-toast';
import { ConfirmDeleteModal } from '../../modals/ConfirmDeleteModal';
import { Tooltip } from 'react-tooltip';
import { TaskViewModal } from '../../modals/TaskViewModal';

export const TaskList = () => {
  const { state, dispatch } = useTaskContext();
  const [taskToEdit, setTaskToEdit] = useState<null | { _id: string, title: string, description: string }>(null);
  const [taskToDelete, setTaskToDelete] = useState<{ _id: string, title: string } | null>(null);
  const [taskToView, setTaskToView] = useState<{ title: string, description: string } | null>(null); 

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

  const handleDelete = async () => {
    if (taskToDelete) {
      try {
        await deleteTask(taskToDelete._id);
        dispatch({ type: 'DELETE_TASK', payload: taskToDelete._id });

        // Mostrar toast de éxito
        toast.success(`Tarea "${taskToDelete.title}" eliminada con éxito`);

        setTaskToDelete(null);
      } catch (err) {
        console.error('Error deleting task:', err);

        // Mostrar toast de error
        toast.error('Hubo un error al eliminar la tarea.');
      }
    }
  };

  const handleEdit = (task: any) => {
    setTaskToEdit(task);
  };

  const handleView = (task: any) => {
    setTaskToView({ title: task.title, description: task.description });
  };

  return (
    <div className="todo-list-container max-h-[700px] overflow-y-auto px-4 sm:px-6 overflow-x-auto">
  <div className="task-list">
    {state.tasks.map((task) => (
      <div
        key={task._id}
        className="task-item flex flex-col sm:flex-row justify-between sm:justify-around items-center p-4 border-b border-gray-200 flex-wrap"
      >
        <div className="task-content flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompletion(task._id)}
            className="w-5 h-5"
          />
          <div className="flex flex-col items-start sm:items-start w-full sm:w-auto">
            <h3
              className={`task-title text-lg font-semibold ${
                task.completed ? 'line-through text-gray-500' : ''
              } max-w-xs truncate overflow-hidden whitespace-nowrap`}
              data-tooltip-id={`tooltip-${task._id}`}
              data-tooltip-content={task.title}
            >
              {task.title}
            </h3>
            <Tooltip id={`tooltip-${task._id}`} place="top" />
            <p className="task-date text-sm text-gray-600">
              {new Date(task.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="task-actions flex flex-wrap justify-start sm:justify-end space-x-2 sm:space-x-4 mt-3 sm:mt-0">
          <button
            className="view-button text-green-500 hover:text-green-700 bg-[#ebebeb] p-[6px] rounded-md"
            onClick={() => handleView(task)}
          >
            👁️
          </button>
          <button
            className="edit-button text-blue-500 hover:text-blue-700 bg-[#ebebeb] p-[6px] rounded-md"
            onClick={() => handleEdit(task)}
          >
            ✏️
          </button>
          <button
            onClick={() => setTaskToDelete({ _id: task._id, title: task.title })}
            className="delete-button text-red-500 hover:text-red-700 bg-[#ebebeb] p-[6px] rounded-md"
          >
            🗑️
          </button>
        </div>
      </div>
    ))}
  </div>

  {taskToEdit && (
    <TaskModal onClose={() => setTaskToEdit(null)} taskToEdit={taskToEdit} />
  )}

  {/* Modal de Confirmación */}
  {taskToDelete && (
    <ConfirmDeleteModal
      taskTitle={taskToDelete.title}
      onCancel={() => setTaskToDelete(null)}
      onConfirm={handleDelete}
    />
  )}

  {taskToView && (
    <TaskViewModal onClose={() => setTaskToView(null)} task={taskToView} />
  )}
</div>

  );
};
