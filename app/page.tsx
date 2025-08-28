import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'The Hand DAO - Minimalist Community Governance',
  description: 'Minimalist black & white UI, community governance. Join The Hand DAO.',
};

export default function RootPage() {
  redirect('/fr');
}