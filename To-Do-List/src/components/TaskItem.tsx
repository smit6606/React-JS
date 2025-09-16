import { Circle, CheckCircle, Trash2, Star, Edit3 } from "lucide-react";
import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
  important: boolean;
};

export default function TaskItem({
  task,
  updateTask,
  deleteTask,
  allowEdit,
}: {
  task: Task;
  updateTask: (id: number, updates: Partial<Task>) => void;
  deleteTask: (id: number) => void;
  allowEdit?: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const saveEdit = () => {
    if (editValue.trim()) {
      updateTask(task.id, { text: editValue.trim() });
      setEditing(false);
    }
  };

  return (
    <div className="task-row flex items-center justify-between px-4 py-3 rounded-md border-b border-[#2a2a2a]">
      <div className="flex items-center gap-3">
        <button
          onClick={() => updateTask(task.id, { completed: !task.completed })}
          className="p-1 rounded-full btn-focus"
        >
          {task.completed ? (
            <CheckCircle size={20} className="text-[var(--accent)]" />
          ) : (
            <Circle size={20} className="text-gray-500" />
          )}
        </button>
        {editing ? (
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            onBlur={saveEdit}
            autoFocus
            className="bg-transparent text-sm focus:outline-none border-b border-gray-500"
          />
        ) : (
          <div
            className={`text-sm ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => updateTask(task.id, { important: !task.important })}
          className="p-1"
        >
          <Star
            size={18}
            className={task.important ? "text-yellow-400" : "text-gray-400"}
          />
        </button>
        {allowEdit && !task.completed && (
          <button onClick={() => setEditing(true)} className="p-1">
            <Edit3 size={16} className="text-gray-400" />
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="p-2 rounded-md btn-focus"
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
