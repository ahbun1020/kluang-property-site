import type { Metadata } from 'next';
import DistrictKluangTownPage from '@/components/DistrictKluangTownPage';

export const metadata: Metadata = {
  title: 'Kluang Town Property Guide | Best Areas to Live in Kluang',
  description:
    'An in-depth analysis of Kluang Town, covering lifestyle, accessibility, nearby amenities, and property options for homebuyers and investors.',
};

export default function Page() {
  return <DistrictKluangTownPage />;
}
