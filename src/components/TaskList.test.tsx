import { fireEvent, render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

const tasks = [
  { id: 1, title: "Task 1", completed: true },
  { id: 2, title: "Task 2", completed: true },
];

test("renders task list correctly", () => {
  render(<TaskList tasks={tasks} onToggleTask={() => {}} />);

  const taskElements = screen.getAllByText(/Task/i);
  expect(taskElements.length).toBe(2);
});

test("toggles task completion", () => {
  const toggleMock = jest.fn();
  render(<TaskList tasks={tasks} onToggleTask={toggleMock} />);

  const checkbox = screen.getByLabelText(/task 1/i); 
  fireEvent.click(checkbox);

  expect(toggleMock).toHaveBeenCalledWith(1);
});
