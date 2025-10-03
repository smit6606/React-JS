// App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./Routes/Route";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}
