"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { H1, Subtle } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function HomePage() {
  return (
    <Section className="py-16">
      <motion.div variants={stagger}>
        <motion.div variants={fadeUp}>
          <H1>The Hand — DAO</H1>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Subtle>Monochrome. Web3-native. Community first.</Subtle>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-8 flex gap-3">
          <a href="/join"><Button>Join DAO</Button></a>
          <a href="/dao"><Button>Open Dashboard</Button></a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
