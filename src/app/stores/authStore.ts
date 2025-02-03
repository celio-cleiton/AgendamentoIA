// src/store/authStore.ts
import { create } from "zustand";

interface AuthData {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  user: AuthData | null;
  error: string;
  signup: (data: AuthData) => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: "",
  signup: async (data: AuthData) => {
    try {
      // Simulação de chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Aqui você faria a chamada real à API de cadastro
      // Exemplo:
      // const response = await fetch("/api/signup", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: { "Content-Type": "application/json" },
      // });
      // if (!response.ok) throw new Error("Erro ao criar conta");

      // Se a operação for bem-sucedida, atualize o estado do usuário
      set({ user: data, error: "" });
    } catch {
      set({ error: "Erro ao criar conta. Tente novamente." });
    }
  },
  clearError: () => set({ error: "" }),
}));
