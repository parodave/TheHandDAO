import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/app/i18n';
import { Locale } from '@/app/i18n/config';

export default function DAOPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <Section spacing="xl">
      <Container size="md">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-mono uppercase tracking-widest">
            {dict.dao.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {dict.dao.description}
          </p>
        </div>
      </Container>
    </Section>
  );
}