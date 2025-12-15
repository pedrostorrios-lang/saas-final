"use client";
import { Lock, CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de delay de segurança
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row min-h-[500px]">
        {/* Esquerda - Marketing */}
        <div className="bg-green-600 p-10 md:w-1/2 flex flex-col justify-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Host de Ouro.</h2>
            <p className="mb-8 text-green-50 text-lg leading-relaxed">
              Transforme sua gestão de Airbnb em uma operação profissional.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><CheckCircle className="text-green-300" /> Precificação Inteligente</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-green-300" /> DRE Automática</li>
            </ul>
          </div>
        </div>

        {/* Direita - Login */}
        <div className="p-10 md:w-1/2 flex flex-col justify-center bg-gray-50">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Acesse sua conta</h1>
            <p className="text-sm text-gray-500 mt-1">Digite seu e-mail de aluno</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
              <input 
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="exemplo@host.com"
              />
            </div>
            
            <button 
              type="submit" disabled={loading}
              className="w-full bg-gray-900 text-white p-4 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              {loading ? "Entrando..." : <>Entrar no Sistema <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}