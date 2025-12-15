"use client";
import { LayoutDashboard, Wallet, Calculator, LogOut } from "lucide-react";
import Link from "next/link";

export function Sidebar({ activeTab, setActiveTab }: any) {
  const menuItems = [
    { id: 'visao-geral', label: 'Visão Geral', icon: LayoutDashboard },
    { id: 'precificacao', label: 'Precificação', icon: Calculator },
    { id: 'financeiro', label: 'Financeiro', icon: Wallet },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col fixed left-0 top-0 z-50">
      <div className="mb-10 px-2 border-b border-gray-700 pb-4">
        <h1 className="text-2xl font-bold text-green-400">GestorBnB</h1>
        <p className="text-xs text-gray-400 mt-1">Sistema Integrado</p>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
              activeTab === item.id 
                ? "bg-green-600 text-white shadow-lg translate-x-1" 
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-900/20 text-red-400 mt-auto transition">
        <LogOut size={20} />
        <span>Sair</span>
      </Link>
    </aside>
  );
}