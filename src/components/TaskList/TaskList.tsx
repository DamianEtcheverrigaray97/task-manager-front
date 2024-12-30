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
    <></>
  );
};
