export default function Navbar() {
  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#">
          <h1 className="text-white text-2xl font-bold tracking-wide">
            Student Portal
          </h1>
        </a>

        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Students
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
