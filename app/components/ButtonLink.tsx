'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ButtonLink({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  const route = usePathname();
  const isCurrentRoute = route === href;

  return (
    <Link
      href={href}
      className={`hover:cursor-pointer text-black text-xl hover:bg-twilight-yellow focus:bg-twilight-yellow rounded-sm ${isCurrentRoute ? 'bg-sheikahslate-blue' : 'bg-warriors-yellow'} ${className ?? ''}`}
    >
      <p>{text}</p>
    </Link>
  );
}
