"use client";

import dynamic from "next/dynamic";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
// Caso você possua um store de autenticação com Zustand, importe-o aqui
// import { useAuthStore } from "@/store/authStore";

// Carrega o MotionDiv apenas no lado do cliente
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Se você tiver uma função de login no seu store do Zustand, poderá utilizá-la:
  // const login = useAuthStore((state) => state.login);
  // const clearError = useAuthStore((state) => state.clearError);

  // Para este exemplo, vamos simular uma chamada à API:
  const login = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Exemplo: login bem-sucedido se os dados coincidirem com um usuário de teste
        if (email === "teste@exemplo.com" && password === "senha123") {
          resolve();
        } else {
          reject("Credenciais inválidas");
        }
      }, 1000);
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(formData.email, formData.password);
      // Aqui você pode redirecionar o usuário para outra rota, por exemplo:
      // router.push("/dashboard");
      console.log("Usuário autenticado com sucesso!");
    } catch (err) {
      setError(typeof err === "string" ? err : "Erro ao autenticar, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex justify-center items-center px-4">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Entrar</h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Sua senha"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Não possui uma conta?{" "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Criar Conta
          </Link>
        </p>
      </MotionDiv>
      <Footer />
    </div>
  );
}
