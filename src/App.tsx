import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useTasks } from "./hooks/useTasks";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const { tasks, addTask, toggleTaskCompletion, loading, error } = useTasks();
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all",
  );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box
      mx="auto"
      p={5}
      className="bg-black text-white w-full h-full flex justify-center items-center flex-col"
    >
      <Heading mb={4} className="text-white">
        To-Do List
      </Heading>
      <div>
        <TaskForm onAddTask={addTask} />
      </div>
      <div>
        <FilterButtons currentFilter={filter} onChangeFilter={setFilter} />
      </div>
      <div className="mt-2">
        <TaskList tasks={filteredTasks} onToggleTask={toggleTaskCompletion} />
      </div>
    </Box>
  );
};

export default App;
