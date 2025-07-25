import dynamic from 'next/dynamic';

const FilteredEventsList = dynamic(() => import('../../../components/FilteredEventsList'), { ssr: false });

export default function UpcomingEventsPage() {
  return <FilteredEventsList variant="upcoming" />;
}