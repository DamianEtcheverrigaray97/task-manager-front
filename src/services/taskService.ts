import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

export const fetchTasks = async (completed?: boolean) => {
  let url = API_URL + 'tasks';
  
  // Si 'completed' está definido, agregarlo como parámetro en la URL
  if (completed !== undefined) {
    url += `?completed=${completed}`;
  }

  const response = await axios.get(url);
  return response.data;
};
export const createTask = async (task: { title: string }) => {
  const response = await axios.post(API_URL + 'tasks', task);
  return response.data;
};

export const updateTask = async (id: string, updates: { completed: boolean }) => {
  const response = await axios.put(`${API_URL + 'tasks'}/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${API_URL + 'tasks'}/${id}`);
  return response.data;
};
