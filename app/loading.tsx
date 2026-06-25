import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <main className="flex flex-col gap-5 items-center">
      <p>Loading...</p>
      <Spinner />
    </main>
  );
}
