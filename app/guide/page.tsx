import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Buying Property in Kluang | Step-by-Step Buyer Guide',
  description:
    'A complete guide to buying property in Kluang, from home selection and loan readiness to legal process and key handover.',
};

export default function Page() {
  return <GuidePage />;
}
