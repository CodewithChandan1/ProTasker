import { Menu, Bell, Search, User } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b px-4 h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative hidden sm:block left-64">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
