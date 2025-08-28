import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/app/i18n';
import { Locale } from '@/app/i18n/config';

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <Section spacing="xl">
      <Container size="md">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-mono uppercase tracking-widest">
              {dict.contact.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              {dict.contact.description}
            </p>
          </div>
          
          <div className="text-center">
            <a
              href={`mailto:${dict.contact.email}`}
              className="text-2xl md:text-3xl font-mono uppercase tracking-wider border-b-hover inline-block pb-2 focus:outline-black focus:outline-1"
            >
              {dict.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}