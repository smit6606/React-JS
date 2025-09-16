import TaskItem from "./TaskItem";

type Task = {
  id: number;
  text: string;
  completed: boolean;
  important: boolean;
};

export default function TaskList({
  tasks,
  updateTask,
  deleteTask,
  allowEdit = false,
}: {
  tasks: Task[];
  updateTask: (id: number, updates: Partial<Task>) => void;
  deleteTask: (id: number) => void;
  allowEdit?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          allowEdit={allowEdit}
        />
      ))}
    </div>
  );
}
