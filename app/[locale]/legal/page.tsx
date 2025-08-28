import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/app/i18n';
import { Locale } from '@/app/i18n/config';

export default function LegalPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <Section spacing="xl">
      <Container size="lg">
        <div className="space-y-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-mono uppercase tracking-widest">
              {dict.legal.title}
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-mono uppercase tracking-wider">
                {dict.legal.terms}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>{dict.legal.termsContent}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-mono uppercase tracking-wider">
                {dict.legal.privacy}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>{dict.legal.privacyContent}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}