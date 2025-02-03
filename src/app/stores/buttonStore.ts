import { create } from "zustand";

interface ButtonStore {
  baseStyles: string;
  getSizeStyles: (size: "normal" | "large") => string;
  getVariantStyles: (variant: "primary" | "secondary") => string;
}

export const useButtonStore = create<ButtonStore>(() => ({
  baseStyles:
    "rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2",

  getSizeStyles: (size) =>
    size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-md",

  getVariantStyles: (variant) =>
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300"
      : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-200",
}));
