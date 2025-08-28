import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/app/i18n';
import { Locale } from '@/app/i18n/config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Information - The Hand DAO',
  description: 'Terms of Service & Privacy Policy for The Hand DAO.',
};

export default function LegalPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <Section spacing="xl">
      <Container size="lg">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-mono uppercase tracking-widest">
              {dict.legal.title}
            </h1>
            <p className="text-xl mt-6 font-mono uppercase tracking-wider">
              Terms of Service & Privacy Policy — Draft
            </p>
          </div>
          
          <div className="space-y-16">
            <div className="border-2 border-black p-8 space-y-6">
              <h2 className="text-3xl font-mono uppercase tracking-wider">
                {dict.legal.terms}
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <p className="font-mono text-label">Last updated: January 2025</p>
                <p>
                  Welcome to The Hand DAO. These terms of service govern your use of our platform and participation in our decentralized autonomous organization.
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access the service.
                </p>
                <p>
                  <strong>Governance:</strong> As a DAO member, you have voting rights on proposals that affect the organization's direction and treasury management.
                </p>
                <p>
                  <strong>Responsibilities:</strong> Members are expected to participate constructively in governance discussions and vote on proposals.
                </p>
              </div>
            </div>
            
            <div className="border-2 border-black p-8 space-y-6">
              <h2 className="text-3xl font-mono uppercase tracking-wider">
                {dict.legal.privacy}
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <p className="font-mono text-label">Last updated: January 2025</p>
                <p>
                  Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use The Hand DAO platform.
                </p>
                <p>
                  <strong>Data Collection:</strong> We collect minimal data necessary for platform functionality, including wallet addresses and voting records.
                </p>
                <p>
                  <strong>Data Usage:</strong> Information is used solely for governance purposes and platform operation. We do not sell or share personal data with third parties.
                </p>
                <p>
                  <strong>Security:</strong> We implement industry-standard security measures to protect your data and maintain platform integrity.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-label">
                For questions about these terms, contact us at legal@thehanddao.com
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}