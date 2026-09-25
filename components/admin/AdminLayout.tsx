'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard, Mail, LogOut, Menu, X,
  ChevronRight
} from 'lucide-react';
import AdminLogin from './AdminLogin';

const NAV_ITEMS = [
  { href: '/admin', label: 'Candidatures', icon: LayoutDashboard },
  { href: '/admin/newsletter', label: 'Newsletter', icon: Mail },
];

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to true
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('admin_authenticated');
    if (saved === 'true') setIsAuthenticated(true);
    setAuthChecked(true);
    
    // Close sidebar by default on mobile
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('admin_authenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  if (!authChecked) return null;

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-72 bg-white border-r border-gray-200 z-50 transition-all duration-300 ease-in-out flex-shrink-0
          ${sidebarOpen ? 'translate-x-0 ml-0' : '-translate-x-full lg:translate-x-0 lg:-ml-72'}`}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-lg text-blue-800 whitespace-nowrap overflow-hidden text-ellipsis">Business Booster</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg flex-shrink-0"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => { if (window.innerWidth < 1024) setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group
                    ${isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'} />
                  <span className="flex-1 whitespace-nowrap">{item.label}</span>
                  {isActive && <ChevronRight size={16} className="opacity-50" />}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors"
            >
              <LogOut size={20} />
              <span className="whitespace-nowrap">Déconnexion</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden transition-all duration-300 bg-gray-50">
        {/* Header (Visible Mobile & Desktop) */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
