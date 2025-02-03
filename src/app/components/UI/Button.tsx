import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useButtonStore } from "../../stores/buttonStore";

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "variant" | "size"> {
  variant?: "primary" | "secondary";
  size?: "normal" | "large";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "normal",
  children,
  ...props
}) => {
  const { baseStyles, getSizeStyles, getVariantStyles } = useButtonStore();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${getSizeStyles(size)} ${getVariantStyles(
        variant
      )}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
