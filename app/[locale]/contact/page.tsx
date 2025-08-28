'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/app/i18n';
import { Locale } from '@/app/i18n/config';
import { useState } from 'react';

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Message sent! (Demo only)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section spacing="xl">
      <Container size="lg">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-mono uppercase tracking-widest">
              {dict.contact.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              {dict.contact.description}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-label mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-label mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-label mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="px-12 py-4 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors"
              >
                Send Message
              </Button>
            </div>
          </form>
          
          <div className="text-center pt-8 border-t-2 border-black">
            <p className="text-label mb-2">Or reach us directly:</p>
            <a
              href={`mailto:${dict.contact.email}`}
              className="text-xl font-mono uppercase tracking-wider border-b-hover inline-block pb-1 focus:outline-black focus:outline-1"
            >
              {dict.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}