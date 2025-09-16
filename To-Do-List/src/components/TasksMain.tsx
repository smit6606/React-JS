import { useEffect, useState } from "react";
import { Circle } from "lucide-react";
import TaskList from "./TaskList";

type Task = {
  id: number;
  text: string;
  completed: boolean;
  important: boolean;
};

export default function TasksMain({ filter }: { filter: string }) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input.trim(),
        completed: false,
        important: false,
      },
    ]);
    setInput("");
  };

  const updateTask = (id: number, updates: Partial<Task>) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)));

  const deleteTask = (id: number) => setTasks(tasks.filter((t) => t.id !== id));

  const filterTasks = (list: Task[]) =>
    filter === "important" ? list.filter((t) => t.important) : list;

  const activeTasks = filterTasks(tasks).filter((t) => !t.completed);
  const completedTasks = filterTasks(tasks).filter((t) => t.completed);

  return (
    <section className="flex flex-col h-full w-full">
      <h2 className="text-lg font-semibold mb-4 capitalize">{filter}</h2>

      <TaskList
        tasks={activeTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        allowEdit
      />

      {completedTasks.length > 0 && (
        <div className="mt-6">
          <p className="text-xs text-gray-500 mb-2">
            Completed ({completedTasks.length})
          </p>
          <TaskList
            tasks={completedTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </div>
      )}

      <div className="fixed left-64 right-6 bottom-6">
        <div className="flex items-center gap-3 bg-[#1f1f1f] rounded-md ml-3 p-3">
          <button
            onClick={addTask}
            className="p-2 rounded-full btn-focus"
            aria-label="Add task"
          >
            <Circle size={20} className="text-[var(--accent)]" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Add meeting notes by 3pm tomorrow"
            className="flex-1 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
}
