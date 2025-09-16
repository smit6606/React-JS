import { Link, useLocation } from "react-router-dom";
import { Star, Calendar, Search } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { label: "My Day", icon: <Calendar size={18} />, path: "/" },
    { label: "Important", icon: <Star size={18} />, path: "/important" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#1E1E1E] text-white flex flex-col p-2">
      {/* Header */}
      <div className="flex items-center gap-2 p-3">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/checklist-2544211-2129314.png"
          alt="logo"
          className="w-6 h-6"
        />
        <span className="text-sm font-semibold">TaskFlow Pro</span>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-2 p-3">
        <img
          src="https://i.pravatar.cc/40?img=68"
          alt="profile"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">Smit Garala</p>
          <p className="text-xs text-gray-400">smeetgarala6606@gmail.com</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative p-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#2D2D2D] text-sm rounded-md pl-8 pr-2 py-1.5 focus:outline-none text-white"
        />
        <Search
          size={16}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center justify-between px-4 py-2 cursor-pointer text-sm rounded-md hover:bg-[#2D2D2D] ${
              location.pathname === item.path ? "bg-[#2D2D2D]" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
