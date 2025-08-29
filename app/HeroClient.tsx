'use client';
import { motion } from '@/components/Motion';
export default function HeroClient({ children }: { children?: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }}>
      {children}
    </motion.div>
  );
}

