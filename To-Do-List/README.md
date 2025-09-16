# ✅ TaskFlow Pro

A modern **React + TypeScript** To-Do List app built with **Vite** and styled using **Tailwind CSS**.  
TaskFlow Pro helps you organize tasks with categories, priorities, completion status, and persistence using `localStorage`.

---

## 🔖 Quick summary

- **Stack:** React + TypeScript, Vite, Tailwind CSS
- **Features:** add tasks, edit tasks, mark complete, mark important, delete, persist to `localStorage`
- **UI Components:** Sidebar navigation, search bar, task list with filters, inline editing
- **Persistence:** All tasks are saved in `localStorage` until manually deleted

---

## 📁 Project structure

```

TaskFlow-Pro/
├─ node_modules/
├─ public/ # static assets
│ └─ icons, images
├─ src/
│ ├─ components/
│ │ ├─ Sidebar.tsx # Navigation sidebar
│ │ ├─ TasksMain.tsx # Main task manager
│ │ ├─ TaskList.tsx # Renders active + completed tasks
│ │ └─ TaskItem.tsx # Single task with actions
│ ├─ App.tsx # App layout & routes
│ ├─ main.tsx # Entry file
│ └─ index.css # Tailwind styles
├─ .gitignore
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md

```

---

## ✨ Features

- ➕ Add new tasks with quick input
- ✅ Mark tasks as **completed**
- ⭐ Toggle **important/starred** tasks
- ✏️ Inline **edit** option for active tasks
- 🗑️ **Delete** tasks
- 📂 Completed tasks grouped separately
- 📌 Sidebar navigation with:
  - My Day
  - Important
- 🎨 Responsive & modern UI
- 💾 **LocalStorage persistence** (tasks remain after refresh until deleted)

---

## 📸 Screenshots

(Add your screenshots in `/public` folder and link them here)

| Tasks List                        | Important View                              |
| --------------------------------- | ------------------------------------------- |
| ![Tasks](./public/All%20Task.png) | ![Important](./public/Important%20Task.png) |

---

## 🚀 Getting started (run locally)

Make sure you have Node.js (v16+) and npm installed.

```
# 1. clone the repo
git clone https://github.com/your-username/TaskFlow-Pro.git
cd TaskFlow-Pro

# 2. install dependencies
npm install

# 3. run dev server
npm run dev

# open http://localhost:5173

Common npm scripts:

npm run dev — start Vite dev server

npm run build — build for production

npm run preview — locally preview the production build

```

## ⚙️ How it works

On load, app fetches tasks from localStorage.

When you add, update, complete, or delete, tasks update instantly and sync back to localStorage.

Sidebar filters let you view all tasks or only important tasks.

Completed tasks move to a separate list but remain accessible.

---

## 🧾 License

This project is licensed under the MIT License

## 👤 Author

**👤 Smit Garala**  
🚀 Full-Stack Developer

- 💻 Expertise: React | Node.js | TypeScript
- 📬 Email: smeetgarala6606@gmail.com
- 🐙 GitHub: [smit6606](https://github.com/smit6606)
- 💼 LinkedIn: [Smit Garala](https://www.linkedin.com/in/smit-garala-28956b344/)
