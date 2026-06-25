import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ButtonLink({
  href,
  text,
  className,
  isExternal,
}: {
  href: string;
  text: string;
  className?: string;
  isExternal?: boolean;
}) {
  const styling = cn(
    'flex justify-center hover:cursor-pointer text-black text-xl bg-warriors-yellow hover:bg-twilight-yellow! rounded-sm',
    className,
  );

  if (isExternal) {
    <a href={href} className={styling} target="_blank" rel="noreferrer">
      <p>{text}</p>
    </a>;
  }

  return (
    <Link href={href} className={styling}>
      <p>{text}</p>
    </Link>
  );
}
