import { Variants } from "framer-motion";
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export const stagger: Variants = {
  show: { transition: { staggerChildren: 0.06 } },
};
