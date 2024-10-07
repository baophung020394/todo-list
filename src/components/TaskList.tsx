import { Checkbox, Box, VStack, Text } from "@chakra-ui/react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  return (
    <VStack
      spacing={2}
      align="stretch"
      className="max-h-[400px] overflow-y-auto custom-scrollbar"
    >
      {tasks.map((task) => (
        <Box
          key={task.id}
          p={4}
          className={`flex border border-dashed border-yellow-500 items-center bg-black text-white mb-2`}
        >
          <Checkbox
            isChecked={task.completed}
            onChange={() => onToggleTask(task.id)}
            className={`text-white border border-yellow-500 w-[20px] h-[20px] `}
            aria-label={task.title}
          />
          <Text className={`ml-2 ${task.completed ? "line-through" : ""}`}>
            {task.title}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default TaskList;
