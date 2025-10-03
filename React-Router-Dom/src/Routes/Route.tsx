// routes/Route.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Project/Project";
import Services from "../pages/Services/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default AppRoutes;
