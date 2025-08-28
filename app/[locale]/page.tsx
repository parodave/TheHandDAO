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
    <Section spacing="none" className="min-h-screen flex items-center">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-16"
        >
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono uppercase tracking-widest leading-none">
              {dict.hero.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              {dict.hero.subtitle}
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button size="lg" className="px-12 py-6 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
              {dict.cta.joinDao}
            </Button>
            <Button size="lg" variant="outline" className="px-12 py-6 bg-white text-black hover:bg-black hover:text-white border-2 border-black transition-colors">
              {dict.cta.learnMore}
            </Button>
          </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}