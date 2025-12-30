import type { Metadata } from 'next';
import DistrictMatureNeighbourhoodsPage from '@/components/DistrictMatureNeighbourhoodsPage';

export const metadata: Metadata = {
  title: 'Mature Residential Areas in Kluang | Stable & High-Value Neighbourhoods',
  description:
    'A guide to mature residential neighbourhoods in Kluang such as Taman Saujana, Taman Kluang Perdana, and Parkland, ideal for long-term living and stability.',
};

export default function Page() {
  return <DistrictMatureNeighbourhoodsPage />;
}
