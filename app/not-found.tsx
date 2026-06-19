import BackButton from './components/BackButton';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center gap-5">
      <h2 className="text-2xl">404 - Page Not Found...</h2>
      <BackButton />
    </main>
  );
}
