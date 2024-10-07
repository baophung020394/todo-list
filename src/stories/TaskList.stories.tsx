import TaskList from "../components/TaskList";

export default {
  title: "components/TaskList",
  component: TaskList,
};

const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

export const Default = () => <TaskList tasks={tasks} onToggleTask={() => {}} />;
