'use client';

import BackButton from './components/BackButton';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-2xl">There was an error... take this! 🗡️</h2>
      <p>{error.message}</p>
      <BackButton />
    </div>
  );
}
