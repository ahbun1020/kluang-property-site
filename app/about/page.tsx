import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About Fiona Mei | Kluang Real Estate Negotiator (REN 59021)',
  description:
    'Meet Fiona Mei, a certified real estate negotiator specializing in the Kluang property market.',
};

export default function Page() {
  return <AboutPage />;
}
