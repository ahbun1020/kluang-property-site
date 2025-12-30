import type { Metadata } from 'next';
import PropertiesPage from '@/components/PropertiesPage';

export const metadata: Metadata = {
  title: 'Houses for Sale in Kluang | New Projects & Subsale',
  description:
    'Browse selected residential properties in Kluang including Impiana, Parkland, and surrounding areas.',
};

export default function Page() {
  return <PropertiesPage />;
}
