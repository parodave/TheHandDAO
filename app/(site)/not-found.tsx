import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | The Hand DAO',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {

  return (
    <Section spacing="none" className="min-h-screen flex items-center">
      <Container size="lg">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-mono uppercase tracking-widest">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-wider">
              Page Not Found
            </h2>
            <p className="text-xl max-w-lg mx-auto leading-relaxed">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>
          
          <Link href="/fr/">
            <Button size="lg" className="px-12 py-6 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}