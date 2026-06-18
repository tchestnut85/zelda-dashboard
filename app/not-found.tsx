import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center gap-5">
      <h2 className="text-2xl">404 - Page Not Found...</h2>
      <Link href="/">
        <p className="text-xl text-warriors-green bg-warriors-yellow font-bold p-3 rounded-sm">
          Back to Hyrule!
        </p>
      </Link>
    </main>
  );
}
