import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/app/i18n';
import { Locale } from '@/app/i18n/config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DAO Dashboard - The Hand DAO',
  description: 'DAO Dashboard Coming Soon - Community governance tools and features.',
};

export default function DAOPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <Section spacing="xl" className="min-h-screen flex items-center">
      <Container size="lg">
        <div className="text-center space-y-12">
          <h1 className="text-5xl md:text-7xl font-mono uppercase tracking-widest">
            {dict.dao.title}
          </h1>
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-mono uppercase tracking-wider">
              Dashboard Coming Soon
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {dict.dao.description}
          </p>
            <div className="border-2 border-black p-12 max-w-2xl mx-auto">
              <p className="text-label mb-4">Features in Development:</p>
              <ul className="space-y-2 text-left">
                <li>• Governance Proposals</li>
                <li>• Voting System</li>
                <li>• Treasury Management</li>
                <li>• Member Directory</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}