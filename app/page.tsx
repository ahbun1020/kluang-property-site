import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Fiona Mei | Kluang Property Agent & Real Estate Specialist',
  description:
    'Certified real estate negotiator in Kluang, Johor. New projects, subsales, loan consultation, and full buying support from booking to key handover.',
};

export default function Page() {
  return <HomePage />;
}
