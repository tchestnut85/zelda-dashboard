'use client';

import BackButton from './components/BackButton';

export default function Error() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-2xl">There was an error...</h2>
      <BackButton />
    </div>
  );
}
