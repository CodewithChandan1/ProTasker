import { NavLink } from "react-router-dom";
import { Home, FileText, Bell, Folder, Plus } from "lucide-react";

export function FooterNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 lg:hidden">
      <div className="max-w-lg mx-auto flex items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 ${isActive ? "text-blue-500" : "text-gray-500"}`
          }
        >
          <Home className="h-6 w-6" />
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            `p-2 ${isActive ? "text-blue-500" : "text-gray-500"}`
          }
        >
          <FileText className="h-6 w-6" />
        </NavLink>

        <button className="p-2 bg-blue-500 rounded-full text-white shadow-lg transform -translate-y-4">
          <Plus className="h-6 w-6" />
        </button>

        <NavLink
          to="/reminders"
          className={({ isActive }) =>
            `p-2 ${isActive ? "text-blue-500" : "text-gray-500"}`
          }
        >
          <Bell className="h-6 w-6" />
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `p-2 ${isActive ? "text-blue-500" : "text-gray-500"}`
          }
        >
          <Folder className="h-6 w-6" />
        </NavLink>
      </div>
    </nav>
  );
}
