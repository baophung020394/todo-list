import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, VStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";

type TaskFormProps = {
  onAddTask: (title: string) => void;
};

type FormData = {
  taskTitle: string;
};

const schema = yup.object().shape({
  taskTitle: yup
    .string()
    .min(6, "Task title must be at least 6 characters")
    .required("Task title is required"),
});

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const {
    control,
    handleSubmit,
    formState,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    onAddTask(data.taskTitle);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ taskTitle: "" });
    }
  }, [formState, onSubmit, reset]);

  return (
    <VStack spacing={4} className="p-4 bg-black rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <Controller
            name="taskTitle"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Add a new task"
                isInvalid={!!errors.taskTitle}
                className={`border p-2 rounded-lg w-full bg-black text-white min-w-[280px] ${
                  errors.taskTitle ? "border-yellow-500" : "border-yellow-300"
                }`}
              />
            )}
          />
          {errors.taskTitle && (
            <Text className="mt-2 text-yellow-500">
              {errors.taskTitle.message}
            </Text>
          )}
        </div>
        <Button
          type="submit"
          disabled={!isValid || !isDirty}
          className={`w-full py-2 rounded-lg text-white border-yellow-500 border-2 ${
            isValid && isDirty
              ? "hover:bg-yellow-700 hover:border-yellow-700 animate-pulse bg-black"
              : "bg-gray-400 text-gray-700"
          }`}
        >
          Add Task
        </Button>
      </form>
    </VStack>
  );
};

export default TaskForm;
