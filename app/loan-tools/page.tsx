import type { Metadata } from 'next';
import LoanToolsPage from '@/components/LoanToolsPage';

export const metadata: Metadata = {
  title: 'Home Loan Calculator Malaysia | Kluang Buyers',
  description:
    'Estimate your home loan and monthly repayment for properties in Kluang, Malaysia.',
};

export default function Page() {
  return <LoanToolsPage />;
}
