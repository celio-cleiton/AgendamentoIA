"use client";

import dynamic from "next/dynamic";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";
import { useAuthStore } from "../../stores/authStore"; // Ajuste o path conforme sua estrutura
import { useRouter } from "next/navigation"; // Import useRouter
import Footer from "@/app/components/Footer/Footer";

// Carrega o MotionDiv apenas no lado do cliente
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Signup() {
  const router = useRouter(); // Initialize the router
  const [isClient, setIsClient] = useState(false); // Estado para garantir que o código só será executado no cliente

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
    profession: "",
  });
  const [loading, setLoading] = useState(false);

  // Extrai do Zustand o método signup e a mensagem de erro
  const signup = useAuthStore((state) => state.signup);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  // Garantir que a lógica de cliente seja executada no cliente
  useEffect(() => {
    setIsClient(true); // Marca como client-side
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearError();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signup(formData);
    setLoading(false);
    router.push("/auth/login"); // Use the router to navigate
  };

  if (!isClient) return null; // Evita a renderização no lado do servidor

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex justify-center items-center px-4">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Criar Conta
        </h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

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

          <div className="mb-4">
            <label
              htmlFor="birthDate"
              className="block text-gray-700 font-medium mb-2"
            >
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="profession"
              className="block text-gray-700 font-medium mb-2"
            >
              Profissão
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              placeholder="Sua profissão"
              value={formData.profession}
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
            {loading ? "Criando conta..." : "Criar Conta"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Já possui uma conta?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </MotionDiv>
      <Footer />
    </div>
  );
}
