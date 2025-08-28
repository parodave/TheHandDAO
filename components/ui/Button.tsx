"use client";
import { motion } from "framer-motion";
import { ComponentProps } from "react";
export default function Button(props: ComponentProps<"button">) {
  const { className="", ...rest } = props;
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`border px-4 py-2 text-sm bg-transparent ${className}`}
      {...rest}
    />
  );
}
