import { useState, useEffect } from "react";
import { createTask, fetchTasks } from "../apis/taskApi";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks()
      .then((response: any) => {
        setTasks(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error: any) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const addTask = (title: string) => {
    if (title.trim() === "") return;

    createTask({ title })
      .then((response: any) => {
        setTasks([...tasks, response.data]);
      })
      .catch((error: any) => {
        console.error("Error adding task:", error);
      });
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return { tasks, addTask, toggleTaskCompletion, loading, error };
};
