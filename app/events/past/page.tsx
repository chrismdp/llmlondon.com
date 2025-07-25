import dynamic from 'next/dynamic';

const FilteredEventsList = dynamic(() => import('../../../components/FilteredEventsList'), { ssr: false });

export default function PastEventsPage() {
  return <FilteredEventsList variant="past" />;
}