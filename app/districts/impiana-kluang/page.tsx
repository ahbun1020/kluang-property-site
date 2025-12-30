import type { Metadata } from 'next';
import DistrictImpianaPage from '@/components/DistrictImpianaPage';

export const metadata: Metadata = {
  title: 'Impiana Kluang Property Analysis | New Developments & Family Homes',
  description:
    'Explore the Impiana area in Kluang, including Impiana Bayu, Impiana Damai, and Impiana Heights. Ideal for families seeking modern homes and growth potential.',
};

export default function Page() {
  return <DistrictImpianaPage />;
}
