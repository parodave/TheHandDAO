export const metadata = {
  title: "Contact — The Hand",
  description: "Get in touch.",
};

import Section from "@/components/ui/Section";
import { H1, Subtle } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <Section className="py-12">
      <H1>Contact</H1>
      <Subtle>Get in touch.</Subtle>
      <form className="mt-8 max-w-2xl space-y-4">
        <input className="w-full border p-3" placeholder="Name" />
        <input className="w-full border p-3" placeholder="Email" type="email" />
        <textarea className="w-full border p-3" placeholder="Message" rows={6} />
        <Button type="submit">Send</Button>
      </form>
    </Section>
  );
}
