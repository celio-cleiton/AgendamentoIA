"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
import CalendarPicker from "./components/Calendar/CalendarPicker";
import Footer from "./components/Footer/Footer";

// Carrega o MotionDiv apenas no lado do cliente
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-50">
        <p className="text-xl font-semibold text-blue-600 animate-pulse">
          Carregando...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-3xl font-bold text-blue-600">Agendamento IA</h1>
          <div className="flex gap-4">
            <Link
              href="/auth/login"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all"
            >
              Entrar
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-900 transition-all"
            >
              Criar Conta
            </Link>
          </div>
        </nav>

        <MotionDiv
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Agendamento Inteligente para
              <span className="text-blue-600"> Profissionais Modernos</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Otimize seu tempo com nossa IA que aprende seus padrões e sugere
              os melhores horários
            </p>
            <a href="#schedule" className="btn-primary-lg">
              Agendar Agora
            </a>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <CalendarPicker />
            </div>
          </div>
        </MotionDiv>
      </header>
      <Footer />
    </div>
  );
}
