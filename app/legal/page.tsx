export const metadata = {
  title: "Legal — The Hand",
  description: "Terms & Privacy (draft).",
};

import Section from "@/components/ui/Section";
import { H1, Subtle } from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

export default function LegalPage() {
  return (
    <Section className="py-12 space-y-6">
      <H1>Legal</H1>
      <Subtle>Terms of Service &amp; Privacy Policy — Draft.</Subtle>
      <Card>
        <p className="text-sm text-[var(--muted)]">
          This project is under active development. Legal content will be added later.
        </p>
      </Card>
    </Section>
  );
}
