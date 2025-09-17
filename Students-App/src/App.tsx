import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import StudentForm from "./components/studentForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    console.log("UseEffect called");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <Navbar prevTheme={theme} toggleTheme={toggleTheme} />
      <div className="pt-18">
        <StudentForm theme={theme} />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
