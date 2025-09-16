import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TasksMain from "./components/TasksMain";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<TasksMain filter="All Task" />} />
            <Route
              path="/important"
              element={<TasksMain filter="important" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
