import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/app/i18n';

export default function NotFound() {
  const dict = getDictionary('fr'); // Default to FR for 404

  return (
    <Section spacing="xl">
      <Container size="md">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-mono uppercase tracking-widest">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-mono uppercase tracking-wider">
              {dict.notFound.title}
            </h2>
            <p className="text-lg max-w-md mx-auto">
              {dict.notFound.description}
            </p>
          </div>
          
          <Link href="/fr/">
            <Button size="lg">
              {dict.notFound.action}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}