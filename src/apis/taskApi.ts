import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks = () => axios.get(API_URL);
export const createTask = (task: { title: string }) =>
  axios.post(API_URL, {
    title: task.title,
    completed: false,
    userId: 1,
  });
