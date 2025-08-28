'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/app/i18n';
import { Locale } from '@/app/i18n/config';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <Section spacing="xl">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono uppercase tracking-widest">
              {dict.hero.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {dict.hero.subtitle}
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="px-12 py-6">
              {dict.cta.getStarted}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}