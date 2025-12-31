import type { Metadata } from 'next';
import ServicesPage from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: 'Property Buyer Services in Kluang | Fiona Mei',
  description:
    'Advisory services for Kluang homebuyers, covering shortlisting, loan readiness, viewings, and purchase support.',
};

export default function Page() {
  return <ServicesPage />;
}
