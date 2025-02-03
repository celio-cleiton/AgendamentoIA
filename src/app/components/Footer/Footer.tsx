"use client"; // Evita problemas de renderização SSR no Next.js

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear()); // Garante que o ano só é definido no cliente
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Logo e descrição */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold tracking-wide">Agendamento IA</h2>
            <p className="text-sm text-gray-300 mt-2">
              Simplificando seu tempo com inteligência artificial.
            </p>
          </div>

          {/* Links úteis */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/sobre" className="hover:underline text-gray-300">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline text-gray-300">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:underline text-gray-300">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="text-lg font-semibold">Nos siga</h3>
            <div className="flex justify-center md:justify-start mt-3 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-500 mt-8 pt-4 text-center text-gray-300 text-sm">
          &copy; {currentYear ? currentYear : "Carregando..."} Agendamento IA. Todos os direitos reservados.
        </div>
      </div>
    </motion.footer>
  );
}
