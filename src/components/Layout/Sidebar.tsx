import { NavLink } from "react-router-dom";
import {
  X,
  Home,
  FileText,
  Bell,
  CheckSquare,
  Folder,
  Calendar,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: FileText, label: "Notes", path: "/notes" },
    { icon: Bell, label: "Reminders", path: "/reminders" },
    { icon: CheckSquare, label: "Tasks", path: "/tasks" },
    { icon: Folder, label: "Projects", path: "/projects" },
    { icon: Calendar, label: "Calendar", path: "/calendar" },
  ];

  return (
    <>
      <div
        className={`fixed  inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed z-50 top-[0.20rem] left-0 h-full w-64 bg-white shadow-lg transform transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-bold text-gray-800">ProTasker</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 mt-2 rounded-lg ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
